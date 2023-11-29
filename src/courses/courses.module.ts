import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeachersModule } from 'src/teachers/teachers.module';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import { Course } from './entities/course.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Course]), TeachersModule],
  controllers: [CoursesController],
  providers: [CoursesService, JwtService],
  exports: [CoursesService],
})
export class CoursesModule {}
