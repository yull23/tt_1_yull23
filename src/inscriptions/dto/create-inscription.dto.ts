import { IsNumber, IsString } from 'class-validator';

export class CreateInscriptionDto {
  @IsNumber()
  idMatricula: string;
  @IsString()
  courseCode: string;
}
