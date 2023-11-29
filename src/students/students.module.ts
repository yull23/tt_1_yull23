import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '../users/users.module';
import { Student } from './entities/student.entity';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';

@Module({
  imports: [TypeOrmModule.forFeature([Student]), UsersModule],
  controllers: [StudentsController],
  providers: [StudentsService, JwtService],
  exports: [StudentsService],
})
export class StudentsModule {}
