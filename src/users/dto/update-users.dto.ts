import { ApiProperty } from '@nestjs/swagger';

export class UpdateUsersDto {
  @ApiProperty({ example: 'Smth', description: 'Username' })
  username?: string;

  @ApiProperty({ example: 'johndoe@gmail.com', description: 'Email' })
  email?: string;

  @ApiProperty({ example: 1332, description: 'Password' })
  password?: number;
}
