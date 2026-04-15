import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
export declare class ProductsService {
    private productsRepository;
    constructor(productsRepository: Repository<Product>);
    create(createProductDto: CreateProductDto): Promise<{
        message: string;
        data: Product;
    }>;
    findAll(): Promise<{
        message: string;
        data: Product[];
    }>;
    findOne(id: number): Promise<{
        message: string;
        data: Product;
    }>;
    update(id: number, PartialUpdateProductDto: Partial<UpdateProductDto>): Promise<{
        message: string;
        data: Product;
    }>;
    replace(id: number, updateProductDto: UpdateProductDto): Promise<{
        message: string;
        data: Product;
    }>;
    remove(id: number): Promise<{
        message: string;
        data: Product;
    }>;
    findByCategory(category: string): Promise<{
        message: string;
        data: Product[];
        count: number;
    }>;
    search(keyword: string): Promise<{
        message: string;
        data: Product[];
        count: number;
    }>;
    toggleActiveStatus(id: number): Promise<{
        message: string;
        data: Product;
    }>;
}
