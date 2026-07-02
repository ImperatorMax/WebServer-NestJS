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
import { ProductsService } from './products.service';
import { Body } from '@nestjs/common';
import { CreateProductsDto } from './dto/create-products.dto';
import { ProductsEntity } from './products.entity';
import { ProductsRepository } from './products.repository';

@Controller('products')

export class ProductsController {
  private readonly list: ProductsEntity[];


  constructor(
    private readonly productsService: ProductsService,
    private readonly productsRepo: ProductsRepository,
  ) {
    this.list = [
      new ProductsEntity(
        1,
        'Apple',
        'Яблоко',
        new Date(),
        new Date(),
        true,
      ),
      new ProductsEntity(
        2,
        'Coca-Cola',
        'Газировка',
        new Date(),
        new Date(),
        false,
      ),
      new ProductsEntity(
        3,
        'Burger',
        'Чизбургер',
        new Date(),
        new Date(),
        false,
      ),
    ];
  }

  @Get()
    public async findAll(): Promise<ProductsEntity[]> {
        const products = await this.productsRepo.findAll();
        return products;
      }
  
    @Get(':id')
    public findById(@Param('id') id: string): ProductsEntity {
      const product = this.list.find((product) => product.id === +id);
  
      if (!product) {
        throw new NotFoundException(`Продукт с id=${id} не найден`);
      }
  
      return product;
    }

  @Post()
  public async create(@Body() dto: CreateProductsDto): Promise<string> {
    const newProducts = new ProductsEntity(
      this.list.length + 1,
      dto.title,
      dto.description,
      new Date(),
      new Date(),
      dto.isHave,
    );

    this.list.push(newProducts);

    await this.productsRepo.create(newProducts);

    return 'Todo created';
  }

  @Delete(':id')
  public async delete(@Param('id') id: string): Promise<string> {
    await this.productsRepo.delete(+id)

    return 'Todo deleted';
  }

  @Patch()
  public update(): string {
    return 'Products updated';
  }

  @Put()
  public fullupdate(): string {
    return 'Products fully updated';
  }
}
