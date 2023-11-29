import { IsString } from 'class-validator';

export class CreateEnrollmentDto {
  @IsString()
  nameSemester: string;
  @IsString()
  studentCode: string;
}
