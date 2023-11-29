import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CoursesService } from 'src/courses/courses.service';
import { EnrollmentsService } from 'src/enrollments/enrollments.service';
import { Repository } from 'typeorm';
import { CreateInscriptionDto } from './dto/create-inscription.dto';
import { Inscription } from './entities/inscription.entity';

@Injectable()
export class InscriptionsService {
  constructor(
    @InjectRepository(Inscription)
    private readonly inscriptionsRepository: Repository<Inscription>,
    private readonly coursesService: CoursesService,
    private readonly enrollmentsService: EnrollmentsService,
  ) {}
  async create({ idMatricula, courseCode }: CreateInscriptionDto) {
    const enrollment = await this.enrollmentsService.findOne(idMatricula);
    const course = await this.coursesService.findByCode(courseCode);

    const inscription = this.inscriptionsRepository.create({
      enrollment,
      course,
    });

    return await this.inscriptionsRepository.save(inscription);
  }
}
