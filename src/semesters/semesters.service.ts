import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSemesterDto } from './dto/create-semester.dto';
import { Semester } from './entities/semester.entity';

@Injectable()
export class SemestersService {
  constructor(
    @InjectRepository(Semester)
    private readonly semesterService: Repository<Semester>,
  ) {}
  async create(createSemesterDto: CreateSemesterDto) {
    return await this.semesterService.save(createSemesterDto);
  }
  async createSemesters(semestersArray: string[]) {
    for (const semester of semestersArray) {
      const existingSemester = await this.findByName(semester);
      if (!existingSemester) {
        await this.semesterService.save({ name: semester });
      }
    }
    return;
  }

  async findAll() {
    return await this.semesterService.find();
  }

  async findOne(id: string) {
    return await this.semesterService.findOne({ where: { id } });
  }

  async findByName(name: string) {
    return await this.semesterService.findOne({ where: { name } });
  }
  // update(id: number, updateSemesterDto: UpdateSemesterDto) {
  //   return `This action updates a #${id} semester`;
  // }
  // remove(id: number) {
  //   return `This action removes a #${id} semester`;
  // }
}
