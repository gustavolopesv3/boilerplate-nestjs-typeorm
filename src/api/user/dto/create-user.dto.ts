import { IsEmail, IsEmpty, IsNotEmpty, Matches } from 'class-validator';
import { RegExHelper } from '../../helpers/regex.helper';

export class CreateUserDto {
  @IsNotEmpty()
  fullName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  isActive: boolean;

  @IsNotEmpty()
  @Matches(RegExHelper.password, {
    message:
      'A senha deve conter letra maiuscula minuscala, numeros e caracteres especiais',
  })
  password: string;
}
