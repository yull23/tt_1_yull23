import { IsString } from 'class-validator';

export class AssignTeacherDto {
  @IsString()
  courseCode: string;
  @IsString()
  teacherCode: string;
}
