import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BlanksService } from './blanks.service';
import { CreateBlankDto } from './dto/create-blank.dto';
import { UpdateBlankDto } from './dto/update-blank.dto';

@Controller('blanks')
export class BlanksController {
  constructor(private readonly blanksService: BlanksService) {}

  @Post()
  create(@Body() createBlankDto: CreateBlankDto) {
    return this.blanksService.create(createBlankDto);
  }

  @Get()
  findAll() {
    return this.blanksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blanksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBlankDto: UpdateBlankDto) {
    return this.blanksService.update(+id, updateBlankDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blanksService.remove(+id);
  }
}
