export class Product {
    id: number;
    categoryId: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    images: string[];

    constructor(
        id: number,
        categoryId: number,
        name: string,
        description: string,
        price: number,
        stock: number,
        images: string[]
    ) {
        this.id = id;
        this.categoryId = categoryId;
        this.name = name;
        this.description = description;
        this.price = price;
        this.stock = stock;
        this.images = images;
    }
}