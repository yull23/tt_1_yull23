import { IsNumber, IsString, MinLength } from 'class-validator';

export class CreateCourseDto {
  @IsString()
  @MinLength(6)
  name: string;

  @IsNumber()
  credits: number;

  // @IsString()
  // teacherCode?: string;
}
