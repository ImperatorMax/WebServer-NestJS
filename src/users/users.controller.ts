import {
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Put,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Body } from '@nestjs/common';
import { CreateUsersDto } from './dto/create-users.dto';
import { UsersEntity } from './users.entity';
import { UpdateUsersDto } from './dto/update-users.dto';

@Controller('users')
export class UsersController {
  private readonly list: UsersEntity[];

  constructor(private readonly usersService: UsersService) {
    this.list = [
      new UsersEntity(1, 'StilF_M', 'maskimfarukh@gmail.com', '13322', 'Maxim', 'F'),
      new UsersEntity(2, 'dacha1233', 'dachca13333@gmail.com', '42333', 'Sergey', 'V'),
      new UsersEntity(3, 'Romenov_V', 'romka337@gmail.com', '33333', 'Vlad', 'K')
    ]
  }

  @Get('id')
  public findAll(): UsersEntity[] {
    return this.list;
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
  public create(@Body() dto: CreateUsersDto): string {
    this.list.push(
      new UsersEntity(
        this.list.length + 1,
        dto.username,
        dto.email,
        dto.password,
        dto.firstName,
        dto.lastName,
      ),
    );

    return 'User created';
  }

  @Delete(':id')
  public delete(@Param('id') id: string): string {
    const index = this.list.findIndex((users) => users.id === +id);
    if (index != -1) {
      this.list.splice(index, 1);
    }

    return 'User deleted';
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
    if (dto.password) user.password = dto.password;

    return user;
  }
}
