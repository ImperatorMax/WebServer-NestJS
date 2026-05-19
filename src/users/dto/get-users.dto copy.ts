import { ApiProperty } from '@nestjs/swagger';

export class GetUsersDto {
  @ApiProperty({ example: 1, description: 'ID get' })
  id: number = 0;
}
