import {
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Body } from '@nestjs/common';
import { CreateUsersDto } from './dto/create-users.dto';
import { UsersEntity } from './users.entity';
import { UpdateUsersDto } from './dto/update-users.dto';
import { UsersRepository } from './users.repository';

@Controller('users')
export class UsersController {
  private readonly list: UsersEntity[];

  constructor(
    private readonly usersService: UsersService,
    private readonly usersRepo: UsersRepository,
  ) {
    this.list = [
      new UsersEntity(
        1,
        'StilF_M',
        'maskimfarukh@gmail.com',
        // '13322',
        // 'Maxim',
        // 'F',
      ),
      new UsersEntity(
        2,
        'dacha1233',
        'dachca13333@gmail.com',
        // '42333',
        // 'Sergey',
        // 'V',
      ),
      new UsersEntity(
        3,
        'Romenov_V',
        'romka337@gmail.com',
        // '33333',
        // 'Vlad',
        // 'K',
      ),
    ];
  }

  @Get()
  public async findAll(): Promise<UsersEntity[]> {
      const users = await this.usersRepo.findAll();
      return users;
    }

  @Get(':id')
  public findById(@Param('id') id: string): UsersEntity {
    const user = this.list.find((user) => user.id === +id);

    if (!user) {
      throw new NotFoundException(`Пользователь с id=${id} не найден`);
    }

    return user;
  }

  @Post()
  public async create(@Body() dto: CreateUsersDto): Promise<string> {
    const newUser = new UsersEntity(
      this.list.length + 1,
      dto.username,
      dto.email,
      // dto.password,
      // dto.firstName,
      // dto.lastName,
    );

    this.list.push(newUser);

    await this.usersRepo.create(newUser);

    return 'User created';
  }


  @Delete(':id')
  public async delete(@Param('id') id: string): Promise<string> {
    await this.usersRepo.delete(+id)

    return 'Todo deleted';
  }

  @Patch(':id')
  public update(
    @Param('id') id: string,
    @Body() dto: UpdateUsersDto,
  ): UsersEntity {
    const user = this.list.find((user) => user.id === +id);

    if (!user) {
      throw new NotFoundException(`Пользователь с id=${id} не найден`);
    }

    if (dto.username) user.username = dto.username;
    if (dto.email) user.email = dto.email;
    // if (dto.password) user.password = dto.password;

    return user;
  }
}
