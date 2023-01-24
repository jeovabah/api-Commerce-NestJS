import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  private user = [];

  async save(user) {
    this.user.push(user);
    return this.user;
  }

  async get() {
    return this.user;
  }
}
