import { Type, Transform } from "class-transformer";
import { IsBoolean, IsEmpty, IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, Min } from "class-validator";

export class CreateProductDto {

    @IsString()
    @IsNotEmpty()
    name!: string;

    @IsString()
    @IsOptional()
    description!: string;

    @IsNumber()
    @IsPositive()
    @Type(() => Number)
    price!: number;

    @IsInt()
    @Min(0)
    @IsOptional()
    @Type(() => Number)
    stock!: number;

    @IsString()
    @IsNotEmpty()
    category!: string;

    @IsOptional()
    @IsBoolean()
    @Type(() => Boolean)
    isActive!: boolean;
}
