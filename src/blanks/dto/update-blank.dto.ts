import { PartialType } from '@nestjs/mapped-types';
import { CreateBlankDto } from './create-blank.dto';

export class UpdateBlankDto extends PartialType(CreateBlankDto) {}
