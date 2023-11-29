import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterTeacherDto } from '../common/dtos/register-teacher.dto';
import { Teacher } from './entities/teacher.entity';

@Injectable()
export class TeachersService {
  constructor(
    @InjectRepository(Teacher)
    private readonly teacherRepository: Repository<Teacher>,
  ) {}
  create(createTeacherDto: RegisterTeacherDto) {
    return this.teacherRepository.save(createTeacherDto);
  }

  findByCode(teacherCode: string) {
    return this.teacherRepository.findOneBy({ teacherCode });
  }

  // findAll() {
  //   return `This action returns all teachers`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} teacher`;
  // }

  // update(id: number, updateTeacherDto: UpdateTeacherDto) {
  //   return `This action updates a #${id} teacher`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} teacher`;
  // }
}
