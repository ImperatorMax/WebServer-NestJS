import { Controller, Get, Post, Delete, Patch, Put, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { Body } from '@nestjs/common';
import { CreateUsersDto } from './dto/create-users.dto';
import { UsersEntity } from './users.entity';



@Controller('users')
export class UsersController {
  private readonly list: UsersEntity[];

  constructor(private readonly usersService: UsersService) {
    this.list = [
      new UsersEntity(1, 'StilF_M', 'maskimfarukh@gmail.com', 13322, 'Maxim', 'F'),
      new UsersEntity(2, 'dacha1233', 'dachca13333@gmail.com', 42333, 'Sergey', 'V'),
      new UsersEntity(3, 'Romenov_V', 'romka337@gmail.com', 33333, 'Vlad', 'K')
    ]
  }


  @Get()
  public findAll(): UsersEntity[] {
    return this.list
  }


  @Post()
  public create(@Body() dto: CreateUsersDto): string {
    this.list.push(
      new UsersEntity(this.list.length +1, dto.username, dto.email, dto.password, dto.firstName, dto.lastName)
    )

    return 'User created'
  }


  @Delete(':id')
  public delete (@Param('id') id: string): string {
    const index = this.list.findIndex((users) => users.id === +id);
    if (index != -1) {
      this.list.splice(index, 1)
    }

    return 'User deleted'
  }


  @Patch()
  public update(): string {
    return 'User updated'
  }
  

  @Put()
  public fullupdate(): string {
    return 'User fully updated'
  }
}
