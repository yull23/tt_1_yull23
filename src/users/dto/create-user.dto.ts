import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ListRole } from 'src/common/enums/list-role.enum';

export class CreateUserDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  email: string;

  // @IsNotEmpty()
  // univCode: string;

  @IsNotEmpty()
  @IsEnum(ListRole, { message: 'Invalid role' })
  role: ListRole;

  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(50)
  // @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, {
  //   message: 'Password too weak',
  // })
  password: string;
}
