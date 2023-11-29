import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TeachersService } from 'src/teachers/teachers.service';
import { Repository } from 'typeorm';
import { AssignTeacherDto } from './dto/assgin-teacher';
import { CreateCourseDto } from './dto/create-course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
    private readonly teacherService: TeachersService,
  ) {}
  async create(createCourseDto: CreateCourseDto) {
    const courseCode =
      'CODE' + createCourseDto.name.split(' ').join('') + 'COURSE';
    // const teacher = await this.teacherService.findByCode(
    //   createCourseDto.teacherCode,
    // );
    return this.courseRepository.save({
      ...createCourseDto,
      courseCode,
      // teacher,
    });
  }

  async assignTeacher({ teacherCode, courseCode }: AssignTeacherDto) {
    const teacher = await this.teacherService.findByCode(teacherCode);
    const course = await this.courseRepository.findOne({
      where: { courseCode },
    });
    return await this.courseRepository.update(course.id, {
      ...course,
      teacher,
    });
    // return { teacher, course };
  }

  async findOne(id: string) {
    const course = await this.courseRepository.findOne({
      where: { id },
    });
    return course;
  }

  async findByName(name: string) {
    return await this.courseRepository.findOne({ where: { name } });
  }
  async findByCode(courseCode: string) {
    return await this.courseRepository.findOne({ where: { courseCode } });
  }
}
