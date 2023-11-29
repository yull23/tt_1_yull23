import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class LoginUserDeto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(50)
  password: string;
}
