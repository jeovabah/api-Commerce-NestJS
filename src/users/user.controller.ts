import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsePipes } from '@nestjs/common/decorators';
import { ValidationPipe } from '@nestjs/common/pipes';
import { CreateUserDTO } from './dto/createUser.dto';
import { UserRepository } from './user.repository';

@Controller('/users')
export class UserController {
  constructor(private userRepository: UserRepository) {}
  @UsePipes(new ValidationPipe({ transform: true }))
  @Post()
  async createUser(@Body() request: CreateUserDTO) {
    this.userRepository.save(request);
    return request;
  }

  @Get()
  async listUsers() {
    const list = this.userRepository.get();
    return list;
  }
}
