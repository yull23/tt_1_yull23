import { Type } from 'class-transformer';
import { IsString } from 'class-validator';
import { User } from 'src/users/entities/user.entity';

export class RegisterTeacherDto {
  @IsString()
  teacherCode: string;

  @Type(() => User)
  user: User;
}
