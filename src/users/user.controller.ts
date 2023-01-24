import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Controller('/users')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  async createUser(@Body() request) {
    this.userRepository.save(request);
    return request;
  }

  @Get()
  async listUsers() {
    const list = this.userRepository.get();
    return list;
  }
}
