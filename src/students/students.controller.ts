import { Controller, Get, Param } from '@nestjs/common';
import { Auth } from '../auth/decorators/auth.decorator';
import { ListRole } from '../common/enums/list-role.enum';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Auth([ListRole.Admin, ListRole.Student])
  @Get()
  findAll() {
    return this.studentsService.findAll();
  }
  @Auth([ListRole.Admin, ListRole.Student])
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentsService.findOne(+id);
  }
}
