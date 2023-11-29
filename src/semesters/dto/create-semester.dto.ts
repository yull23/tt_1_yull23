import { IsEnum } from 'class-validator';
import { ListSemesters } from 'src/common/enums/list-semesters.enum';

export class CreateSemesterDto {
  @IsEnum(ListSemesters)
  name: ListSemesters;
}
