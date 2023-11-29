import { UseGuards, applyDecorators } from '@nestjs/common';
import { ListRole } from 'src/common/enums/list-role.enum';
import { AuthGuard } from '../guard/auth.guard';
import { RolesGuard } from '../guard/roles.guard';
import { Roles } from './roles.decorator';

export function Auth(roles: ListRole[]) {
  return applyDecorators(Roles(roles), UseGuards(AuthGuard, RolesGuard));
}
