import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  private user = [];

  async existUserWithEmail(email: string) {
    const userPossibly = this.user.find((user) => user.email === email);
    return userPossibly !== undefined;
  }

  async save(user) {
    const existsUser = this.existUserWithEmail(user.email);
    this.user.push(user);
    return this.user;
  }

  async get() {
    return this.user;
  }
}
