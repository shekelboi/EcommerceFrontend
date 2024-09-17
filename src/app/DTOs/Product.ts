export class Product {
    categoryId: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    images: string[];

    constructor(
        categoryId: number,
        name: string,
        description: string,
        price: number,
        stock: number,
        images: string[]
    ) {
        this.categoryId = categoryId;
        this.name = name;
        this.description = description;
        this.price = price;
        this.stock = stock;
        this.images = images;
    }
}