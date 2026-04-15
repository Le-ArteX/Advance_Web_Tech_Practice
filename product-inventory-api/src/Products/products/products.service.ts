import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { ILike } from 'typeorm';

@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  async create (createProductDto: CreateProductDto): Promise<{message: string; data: Product}> {
    const product = this.productsRepository.create(createProductDto);
    const data = await this.productsRepository.save(product);
    return {message : "Product created successfully", "data": data};
  }
  

  async findAll() {
    const data = await this.productsRepository.find({order:{createdAt: "DESC"}});
    return {message: "Products retrieved successfully", data};
  }

  async findOne(id: number) {
    const data = await this.productsRepository.findOne({ where: { id } });
    if(!data) throw new Error(`Product not found with id: ${id}`);
    return {message: "Product retrieved successfully", data};
  }

  async update(id: number, PartialUpdateProductDto: Partial<UpdateProductDto>) {
    const product = await this.productsRepository.findOne({ where: { id } });
    if(!product) throw new Error(`Product not found with id: ${id}`);
    Object.assign(product, PartialUpdateProductDto);
    const data = await this.productsRepository.save(product);
    return {message: "Product updated successfully", data};
  }

  async replace(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.productsRepository.findOne({ where: { id } });
    if(!product) throw new Error(`Product not found with id: ${id}`); 
    Object.assign(product, updateProductDto);
    const data = await this.productsRepository.save(product);
    return {message: "Product replaced successfully", data};
  }

  async remove(id: number) {
    const product = await this.productsRepository.findOne({ where: { id } });
    if(!product) throw new Error(`Product not found with id: ${id}`);
    const data = await this.productsRepository.remove(product);
    return {message: "Product deleted successfully", data};
  }

  async findByCategory(category: string) {
    const data = await this.productsRepository.find({ where: { category }, order:{createdAt: "DESC"} });
    return {message: "Products retrieved successfully", data, count: data.length};
  }

  async search(keyword: string) {
    const data = await this.productsRepository.find({
      where: 
        { name: ILike(`%${keyword}%`) },
    });
    return {message: "Products retrieved successfully", data, count: data.length};
  }

  async toggleActiveStatus(id: number) {

    const product = await this.productsRepository.findOne({ where: { id } });
    if (!product)  throw new Error(`Product not found with id: ${id}`); 
    product.isActive = !product.isActive;
    const data = await this.productsRepository.save(product);
    return { message: "Product active status toggled successfully", data };
  }
}
