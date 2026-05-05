import { Controller, Get, Post, Delete, Patch, Put, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Body } from '@nestjs/common';
import { CreateProductsDto } from './dto/create-products.dto';
import { ProductsEntity } from './products.entity';



@Controller('products')
export class ProductsController {
  private readonly list: ProductsEntity[];
  private readonly url1: string[] = 
  [`https://tse2.mm.bing.net/th/id/OIP.zD5dA74Os5pfKf5ZEJIciwHaHu?rs=1&pid=ImgDetMain&o=7&rm=3`]
  private readonly url2: string[] = 
  [`https://tse4.mm.bing.net/th/id/OIP.YU4igMRl5W9Lq7DAeQaAyQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3`]
  private readonly url3: string[] = 
  [`https://tse1.mm.bing.net/th/id/OIP.387PojRI5pukjUndARHSuAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3`]
  

  constructor(private readonly productsService: ProductsService) {
    this.list = [
      new ProductsEntity(1, 'Apple', 'Яблоко', this.url1, new Date(), new Date(), true),
      new ProductsEntity(2, 'Coca-Cola', 'Газировка', this.url2, new Date(), new Date(), false),
      new ProductsEntity(3, 'Burger', 'Чизбургер', this.url3, new Date(), new Date(), false)
    ]
  }


  @Get()
  public findAll(): ProductsEntity[] {
    return this.list
  }


  @Post()
  public create(@Body() dto: CreateProductsDto): string {
    this.list.push(
      new ProductsEntity(this.list.length +1, dto.title, dto.description, dto.image, dto.createdAt, dto.updatedAt, dto.isHave)
    )

    return 'Card created'
  }


  @Delete(':id')
  public delete (@Param('id') id: string): string {
    const index = this.list.findIndex((products) => products.id === +id);
    if (index != -1) {
      this.list.splice(index, 1)
    }

    return 'Products deleted'
  }


  @Patch()
  public update(): string {
    return 'Products updated'
  }
  

  @Put()
  public fullupdate(): string {
    return 'Products fully updated'
  }
}
