import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterUserDto } from '../common/dtos/register-user.dto';
import { ListRole } from '../common/enums/list-role.enum';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  create(createUserDto: RegisterUserDto) {
    console.log(23);
    return this.userRepository.save(createUserDto);
  }

  findOneByEmail(email: string) {
    return this.userRepository.findOneBy({ email });
  }
  async findByEmailWithPassword(email: string) {
    const user = await this.userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.teacher', 'teacher')
      .leftJoinAndSelect('user.student', 'student')
      .where('user.email = :email', { email })
      .select([
        'user.email',
        'user.role',
        'user.firstName',
        'user.lastName',
        'user.password',
      ])
      .getOne();
    return user;
    // return {
    //   firstName: 'student1',
    //   lastName: 'student1',
    //   email: 'student1@mail.com',
    //   password: '$2a$10$PT8yjHZeHZsAejFPjshlI.bEW0BGf0uNysspOa3Hu1791cA0NkN1y',
    //   role: 'student',
    //   id: 36,
    // };
  }

  async createTeachers(teachers: string[]) {
    const result = [];
    for (const teacher of teachers) {
      const existingTeacher = await this.findOneByEmail(teacher + '@mail.com');
      const teacherData = {
        firstName: teacher,
        lastName: teacher,
        email: teacher + '@mail.com',
        password: '123456',
        role: ListRole.Teacher,
      };
      if (!existingTeacher) {
        result.push(await this.userRepository.save(teacherData));
      }
    }
    return result;
  }
}
