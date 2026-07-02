import { ApiProperty } from '@nestjs/swagger';

export class CreateProductsDto {
  @ApiProperty({ example: 'Smth', description: 'Title of the products' })
  title: string = '';

  @ApiProperty({ example: 'Smth', description: 'Title of the payment' })
  description: string = '';



  @ApiProperty({ example: true, description: 'Completion status of payment' })
  isHave: boolean = true;
}
