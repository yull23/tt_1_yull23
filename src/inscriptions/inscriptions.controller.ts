import { Body, Controller, Post } from '@nestjs/common';
import { CreateInscriptionDto } from './dto/create-inscription.dto';
import { InscriptionsService } from './inscriptions.service';

@Controller('inscriptions')
export class InscriptionsController {
  constructor(private readonly inscriptionsService: InscriptionsService) {}

  @Post()
  create(@Body() createInscriptionDto: CreateInscriptionDto) {
    return this.inscriptionsService.create(createInscriptionDto);
  }
}
