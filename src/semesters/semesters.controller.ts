import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { ListRole } from 'src/common/enums/list-role.enum';
import { ListSemesters } from 'src/common/enums/list-semesters.enum';
import { CreateSemesterDto } from './dto/create-semester.dto';
import { SemestersService } from './semesters.service';

@Controller('semesters')
export class SemestersController {
  constructor(private readonly semestersService: SemestersService) {}

  @Auth([ListRole.Admin])
  @Post()
  create(@Body() createSemesterDto: CreateSemesterDto) {
    return this.semestersService.create(createSemesterDto);
  }
  @Auth([ListRole.Admin])
  @Get('create')
  createSemesters() {
    const semestersArray: string[] = Object.values(ListSemesters);
    return this.semestersService.createSemesters(semestersArray);
  }

  @Auth([ListRole.Admin])
  @Get()
  findAll() {
    return this.semestersService.findAll();
  }

  @Auth([ListRole.Admin])
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.semestersService.findOne(id);
  }
}
