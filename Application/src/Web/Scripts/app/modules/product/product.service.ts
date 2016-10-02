import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductService {
    public constructor(private http: Http) { }

    public getProducts() {
        return this.http.get('/api/products');
    }

    public addProduct(product: IProduct) {
        return this.http.post('/api/products', product);
    }

    public updateProduct(product: IProduct) {
        return this.http.put('/api/products' + product.id, product);
    }

    public deleteProduct(id: number) {
        return this.http.delete('/api/products' + id);
    }
}