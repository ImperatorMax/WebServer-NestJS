import { ApiProperty } from '@nestjs/swagger';

import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

export class UpdateUsersDto {
  @ApiProperty({ example: 'Smth', description: 'Username' })
  @MinLength(5, { message: 'Минимальная длина username равна 5' })
  @IsNotEmpty()
  @IsString()
  username?: string;

  @ApiProperty({ example: 'johndoe@gmail.com', description: 'Email' })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email?: string;

  @ApiProperty({ example: 1332, description: 'Password' })
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
  password?: string;
}
