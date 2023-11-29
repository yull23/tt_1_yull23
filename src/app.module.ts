import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { BlanksModule } from './blanks/blanks.module';
import { Blank } from './blanks/entities/blank.entity';
import { DataSourceConfig } from './config/data.source';
import { CoursesModule } from './courses/courses.module';
import { Course } from './courses/entities/course.entity';
import { EnrollmentsModule } from './enrollments/enrollments.module';
import { Enrollment } from './enrollments/entities/enrollment.entity';
import { HealthController } from './healt-check/health.controller';
import { Inscription } from './inscriptions/entities/inscription.entity';
import { InscriptionsModule } from './inscriptions/inscriptions.module';
import { Semester } from './semesters/entities/semester.entity';
import { SemestersModule } from './semesters/semesters.module';
import { Student } from './students/entities/student.entity';
import { StudentsModule } from './students/students.module';
import { Teacher } from './teachers/entities/teacher.entity';
import { TeachersModule } from './teachers/teachers.module';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      ...DataSourceConfig,
      entities: [
        User,
        Blank,
        Teacher,
        Student,
        Course,
        Inscription,
        Enrollment,
        Semester,
      ],
    }),
    AuthModule,
    BlanksModule,
    UsersModule,
    TeachersModule,
    StudentsModule,
    CoursesModule,
    SemestersModule,
    EnrollmentsModule,
    InscriptionsModule,
    // CacheModule.register({
    //   isGlobal: true,
    //   ttl: 5,,Bl
    //   max: 10,
    // }),
  ],
  controllers: [HealthController],
  providers: [
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: CacheInterceptor,
    // },
  ],
})
export class AppModule {}
