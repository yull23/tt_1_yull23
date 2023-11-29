import { IsNumber, IsString, MinLength } from 'class-validator';

export class RegisterCourseDto {
  @IsString()
  @MinLength(6)
  name: string;

  @IsNumber()
  credits: number;
}
