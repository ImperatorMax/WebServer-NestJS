import { Injectable } from '@nestjs/common';
import { ProductsEntity } from './products.entity';
import { Products } from './entities/products.entity';

import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductsRepository {
  constructor(
    @InjectRepository(Products)
    private readonly productsRepository: Repository<Products>,
  ) {}

    public async create(products: ProductsEntity): Promise<ProductsEntity> {
        const productsData = new Products()
        productsData.title = products.title;
        productsData.description = products.description;
        productsData.createdAt = products.createdAt;
        productsData.updatedAt = products.updatedAt;
        productsData.isHave = products.isHave;

        const newProducts = this.productsRepository.create(productsData);

        const savedProducts = await this.productsRepository.save(newProducts)

        console.log(savedProducts)
        return products;
    }


    public async findAll(): Promise<Products[]> {
    const products = await this.productsRepository.find()
    return products;
    }

    public async delete(id:number): Promise<void> {
        await this.productsRepository.delete(id)
    }

    public async findById(id: number): Promise<Products | null> {
        const products = await this.productsRepository.findOneBy({id})
        return products;
    }
}
