import { Injectable } from '@angular/core';
import { Image } from '../DTOs/Image';

@Injectable({
    providedIn: 'root'
})
export class ImageService {
    readonly S3_PATH = 'https://ecommerce420.s3.eu-central-1.amazonaws.com/'
    readonly BLANK = this.getImageUrl('blank');
    readonly BLANK_IMAGE = new Image(0, 0, 'blank');

    constructor() { }

    public getImageUrl(publicId: string) {
        return this.S3_PATH + publicId + '.jpg';
    }
}
