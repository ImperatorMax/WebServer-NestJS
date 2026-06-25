import { Inject, Injectable } from '@nestjs/common';
import { UsersEntity } from './users.entity';
import { User } from './entities/user.entity';

import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  public async create(user: UsersEntity): Promise<UsersEntity> {
    const userData = new User();
    userData.username = user.username;
    userData.email = user.email;
    const newUser = this.userRepository.create(userData);

    await this.userRepository.save(newUser);
    return user;
  }
}
