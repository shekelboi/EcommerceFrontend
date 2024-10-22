import { Category } from "./Category";

export class Product {
    id: number;
    categoryId: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    images: string[];
    category: Category;

    constructor(
        id: number,
        categoryId: number,
        name: string,
        description: string,
        price: number,
        stock: number,
        images: string[],
        category: Category
    ) {
        this.id = id;
        this.categoryId = categoryId;
        this.name = name;
        this.description = description;
        this.price = price;
        this.stock = stock;
        this.images = images;
        this.category = category;
    }
}