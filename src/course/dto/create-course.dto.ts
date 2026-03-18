import {
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsEmail,
  IsInt,
  Matches,
  IsNumber,
  IsString,
  IsOptional,
  isEmpty,
  isNotEmpty,
  Min,
  Max,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateCourseDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(50)
    name: string;

    @IsNotEmpty()
    @IsString()
    code : string;


    @IsString()
    @IsNotEmpty()
    instructor: string;

    @IsNumber()
    @Min(1)
    @Max(6)
    @Type(() => Number)
    credit: number;

    @IsString()
    @IsOptional()
    description: string;




}