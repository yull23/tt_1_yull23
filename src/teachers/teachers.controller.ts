import { Controller } from '@nestjs/common';
import { TeachersService } from './teachers.service';

@Controller('teachers')
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) {}

  // @Post()
  // create(@Body() createTeacherDto: CreateTeacherDto) {
  //   return this.teachersService.create(createTeacherDto);
  // }
  // @Get()
  // findAll() {
  //   return this.teachersService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.teachersService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateTeacherDto: UpdateTeacherDto) {
  //   return this.teachersService.update(+id, updateTeacherDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.teachersService.remove(+id);
  // }
}
