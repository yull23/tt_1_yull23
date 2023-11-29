import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcryptjs from 'bcryptjs';
import { LoginUserDeto } from '../common/dtos/login-user.dto';
import { RegisterUserDto } from '../common/dtos/register-user.dto';
import { StudentsService } from '../students/students.service';
import { TeachersService } from '../teachers/teachers.service';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly teacherService: TeachersService,
    private readonly studentService: StudentsService,
    private readonly jwtServices: JwtService,
  ) {}

  async register(registerUserDto: RegisterUserDto) {
    const user = await this.userService.findOneByEmail(registerUserDto.email);
    if (user) {
      throw new BadRequestException('Email already exists');
    }
    const newUser = await this.userService.create({
      // return await this.userService.create({
      ...registerUserDto,
      password: await bcryptjs.hash(registerUserDto.password, 10),
    });
    if (newUser.role === 'teacher') {
      const teacherCode: string = 'CODE' + newUser.email + 'TEACHER';
      return this.teacherService.create({ user: newUser, teacherCode });
    } else if (newUser.role === 'student') {
      const studentCode: string = 'CODE' + newUser.email + 'STUDENT';
      return this.studentService.create({ user: newUser, studentCode });
    }
  }
  async login(loginUserDeto: LoginUserDeto) {
    const user = await this.userService.findByEmailWithPassword(
      loginUserDeto.email,
    );
    if (!user) {
      throw new UnauthorizedException('Email is wrong');
    }
    let isPasswordValid: boolean;
    if (
      loginUserDeto.email === process.env.ADMIN_EMAIL &&
      loginUserDeto.password === process.env.ADMIN_PASSWORD
    ) {
      isPasswordValid = true;
      console.log('Soy el admin');
    } else {
      isPasswordValid = await bcryptjs.compare(
        loginUserDeto.password,
        user.password,
      );
    }
    if (!isPasswordValid) {
      throw new UnauthorizedException('Password invalid');
    }

    const payload = { email: user.email, role: user.role };
    const token = await this.jwtServices.signAsync(payload);
    return {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      role: user.role,
      token,
    };
  }
}
