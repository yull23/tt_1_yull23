import { Injectable } from '@nestjs/common';
import { CreateBlankDto } from './dto/create-blank.dto';
import { UpdateBlankDto } from './dto/update-blank.dto';

@Injectable()
export class BlanksService {
  create(createBlankDto: CreateBlankDto) {
    return 'This action adds a new blank';
  }

  findAll() {
    return `This action returns all blanks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} blank`;
  }

  update(id: number, updateBlankDto: UpdateBlankDto) {
    return `This action updates a #${id} blank`;
  }

  remove(id: number) {
    return `This action removes a #${id} blank`;
  }
  async getData() {
    console.log('Fetching data from the database...');
    return 'Data from the database';
  }
}
