import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { ListRole } from 'src/common/enums/list-role.enum';
import { CoursesService } from './courses.service';
import { AssignTeacherDto } from './dto/assgin-teacher';
import { CreateCourseDto } from './dto/create-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Auth([ListRole.Admin, ListRole.Student, ListRole.Teacher])
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coursesService.findOne(id);
  }

  @Auth([ListRole.Admin])
  @Post()
  createCourse(@Body() registerCourseDto: CreateCourseDto) {
    return this.coursesService.create(registerCourseDto);
  }
  @Auth([ListRole.Admin])
  @Post('assign')
  assignTeacher(@Body() assingCourseDto: AssignTeacherDto) {
    return this.coursesService.assignTeacher(assingCourseDto);
  }
}
