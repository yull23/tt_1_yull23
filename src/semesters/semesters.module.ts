import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Semester } from './entities/semester.entity';
import { SemestersController } from './semesters.controller';
import { SemestersService } from './semesters.service';

@Module({
  imports: [TypeOrmModule.forFeature([Semester])],
  controllers: [SemestersController],
  providers: [SemestersService, JwtService],
  exports: [SemestersService],
})
export class SemestersModule {}
