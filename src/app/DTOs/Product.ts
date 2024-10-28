import { Category } from "./Category";
import { Image } from "./Image";

export class Product {
    id: number;
    publicId: number;
    categoryId: number;
    name: string;
    description: string;
    slug: string;
    price: number;
    stock: number;
    images: Image[];
    category: Category;

    constructor(
        id: number,
        publicId: number,
        categoryId: number,
        name: string,
        description: string,
        slug: string,
        price: number,
        stock: number,
        images: Image[],
        category: Category
    ) {
        this.id = id;
        this.publicId = publicId;
        this.categoryId = categoryId;
        this.name = name;
        this.description = description;
        this.slug = slug;
        this.price = price;
        this.stock = stock;
        this.images = images;
        this.category = category;
    }
}