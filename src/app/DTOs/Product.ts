import { Category } from "./Category";

export class Product {
    id: number;
    publicId: number;
    categoryId: number;
    name: string;
    description: string;
    slug: string;
    price: number;
    stock: number;
    images: string[];
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
        images: string[],
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