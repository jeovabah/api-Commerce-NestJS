import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { EmailUnicValidator } from './validation/emailUnic.validator';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserRepository, EmailUnicValidator],
})
export class UserModule {}
