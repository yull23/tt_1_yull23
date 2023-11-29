import { SetMetadata } from '@nestjs/common';
import { ListRole } from 'src/common/enums/list-role.enum';

// Local storage syntax
export const ROLE_KEYS = 'roles';
export const Roles = (role: ListRole[]) => SetMetadata(ROLE_KEYS, role);
