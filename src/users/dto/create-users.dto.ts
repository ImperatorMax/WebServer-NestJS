import { ApiProperty } from '@nestjs/swagger';

import { IsEmail, MinLength } from 'class-validator';

export class CreateUsersDto {
  @ApiProperty({ example: 'Smth', description: 'Title of the users' })
  @MinLength(5, { message: 'Минимальная длина username равна 5' })
  username: string = '';

  @ApiProperty({
    example: 'johndoe@gmail.com',
    description: 'Title of the users',
  })
  @IsEmail()
  email: string = '';

  @ApiProperty({ example: 1332, description: 'Title of the users' })
  password: number = 0;

  @ApiProperty({ example: 'Smth', description: 'Title of the users' })
  firstName: string = '';

  @ApiProperty({ example: 'Smth', description: 'Title of the users' })
  lastName: string = '';
}
