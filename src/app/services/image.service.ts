import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ImageService {
    readonly S3_PATH = 'https://ecommerce420.s3.eu-central-1.amazonaws.com/'

    constructor() { }

    public getImageUrl(publicId: string) {
        return this.S3_PATH + publicId + '.jpg';
    }
}
