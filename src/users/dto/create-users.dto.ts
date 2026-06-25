import { ApiProperty } from '@nestjs/swagger';

import { IsEmail, MinLength } from 'class-validator';

import { IsNotEmpty, IsNumber, IsString, Matches } from 'class-validator';

export class CreateUsersDto {
  @ApiProperty({ example: 'Something', description: 'Title of the users' })
  @MinLength(5, { message: 'Минимальная длина username равна 5' })
  @IsNotEmpty()
  @IsString()
  username: string = '';

  @ApiProperty({
    example: 'johndoe@gmail.com',
    description: 'Title of the users',
  })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string = '';

  @ApiProperty({ example: '22222222', description: 'Title of the users' })
  @MinLength(5, { message: 'Минимальная длина password равна 5' })
  @IsNotEmpty()
  @IsString()
  @Matches(/[!@#$%^&*(),.?":{}|<>]/, {
    message: 'Password must contain at least one special character',
  })
  @Matches(/[a-zA-Z]/, {
    message: 'Пароль должен содержать минимум 1 букву',
  })
  @Matches(/[0-9]/, {
    message: 'Пароль должен содержать минимум 1 символ',
  })
  password: string = '0';

  @ApiProperty({ example: 'Smth', description: 'Title of the users' })
  @MinLength(2, { message: 'Минимальная длина firstName равна 2' })
  @IsNotEmpty()
  @Matches(/^(?!.*[0-9])/, {
    message: 'Имя НЕ должен содержать число',
  })
  @IsString()
  firstName: string = '';

  @ApiProperty({ example: 'Smth', description: 'Title of the users' })
  @MinLength(2, { message: 'Минимальная длина lastName равна 2' })
  @IsNotEmpty()
  @Matches(/^(?!.*[0-9])/, {
    message: 'Фамилия НЕ должен содержать число',
  })
  @IsString()
  lastName: string = '';
}
