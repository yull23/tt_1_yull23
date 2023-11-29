import { Type } from 'class-transformer';
import { IsString } from 'class-validator';
import { User } from 'src/users/entities/user.entity';

export class RegisterStudentDto {
  @IsString()
  studentCode: string;

  @Type(() => User)
  user: User;
}
