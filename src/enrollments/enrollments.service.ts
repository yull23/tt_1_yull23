import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SemestersService } from 'src/semesters/semesters.service';
import { StudentsService } from 'src/students/students.service';
import { Repository } from 'typeorm';
import { CreateEnrollmentDto } from './dto/create-enrollment.dto';
import { Enrollment } from './entities/enrollment.entity';

@Injectable()
export class EnrollmentsService {
  constructor(
    @InjectRepository(Enrollment)
    private readonly enrollmentRepository: Repository<Enrollment>,
    private readonly studentsService: StudentsService,
    private readonly semestersService: SemestersService,
  ) {}
  async create({ nameSemester, studentCode }: CreateEnrollmentDto) {
    const student = await this.studentsService.findByCode(studentCode);
    const semester = await this.semestersService.findByName(nameSemester);
    const enrollment = this.enrollmentRepository.create({
      student,
      semester,
    });
    return await this.enrollmentRepository.save(enrollment);
  }
  // findAll() {
  //   return `This action returns all enrollments`;
  // }
  async findOne(id: string) {
    return await this.enrollmentRepository.findOne({ where: { id } });
  }
  // update(id: number, updateEnrollmentDto: UpdateEnrollmentDto) {
  //   return `This action updates a #${id} enrollment`;
  // }
  // remove(id: number) {
  //   return `This action removes a #${id} enrollment`;
  // }
}
