import { IsString, IsEmail, MinLength, IsNotEmpty } from 'class-validator';
import { EmailUnic } from '../validation/emailUnic.validator';

export class CreateUserDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio ' })
  name: string;

  // @EmailUnic({ message: 'Email ja Cadastrado' })
  @IsEmail(undefined, { message: 'Não é um email válido' })
  email: string;

  @MinLength(6, {
    message: 'A senha precisa de no minimo 6 caracteres',
  })
  password: string;
}
