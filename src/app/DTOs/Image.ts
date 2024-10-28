export class Image {
    id: number;
    productId: number;
    publicId: string;

    constructor(id: number, productId: number, publicId: string) {
        this.id = id;
        this.productId = productId;
        this.publicId = publicId;
    }
}