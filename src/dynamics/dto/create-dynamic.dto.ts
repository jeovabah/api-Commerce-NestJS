import { IsNotEmpty } from 'class-validator';

export class CreateDynamicDto {
  @IsNotEmpty({ message: 'Insira um link de um banner' })
  banner?: string | File;

  @IsNotEmpty({ message: 'A logo nao pode ser vazia' })
  logo?: string | File;
}
