import { CacheKey, CacheTTL } from '@nestjs/cache-manager';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
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
  @Get('unhandled')
  async unhandledError() {
    // Simulando un error no controlado lanzando una excepción
    throw new Error('¡Esto es un error no controlado!');
  }
  @CacheKey('custom_key')
  @CacheTTL(20)
  @Get('test')
  getData() {
    return this.blanksService.getData();
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
