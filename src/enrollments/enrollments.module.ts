import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SemestersModule } from 'src/semesters/semesters.module';
import { StudentsModule } from 'src/students/students.module';
import { EnrollmentsController } from './enrollments.controller';
import { EnrollmentsService } from './enrollments.service';
import { Enrollment } from './entities/enrollment.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Enrollment]),
    StudentsModule,
    SemestersModule,
  ],
  controllers: [EnrollmentsController],
  providers: [EnrollmentsService, JwtService],
  exports: [EnrollmentsService],
})
export class EnrollmentsModule {}
