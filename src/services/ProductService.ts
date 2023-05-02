import {Product} from "../modal/product/Product"
import {TV} from "../modal/product/TV"
import {Laptop} from "../modal/product/Laptop"
import {Monitor} from "../modal/product/Monitor"
import {Phone} from "../modal/product/Phone"

type ProductType = 'Laptop' | 'Monitor' | 'Phone' | 'TV';

export class ProductService{
    private idGenerator: number = 0;
    private productList: Product[] = [];
    add(product: Product){
        product.setId(++this.idGenerator);
        this.productList.push(product);
    }
    getById(id:number):Product{
        for(let product of this.productList){
            if(product.getId() === id) return product;
        }
        throw new Error ("Product not found")
    }
    getPruductByType(type: ProductType):Product[]{
        let products: Product[] = [];
        switch (type) {
            case 'TV':
                for(let product of this.productList){
                    if(product instanceof TV) products.push(product);
                }
                return products;
            case 'Laptop':
                for(let product of this.productList){
                    if(product instanceof Laptop) products.push(product);
                }
                return products;
            case 'Monitor':
                for(let product of this.productList){
                    if(product instanceof Monitor) products.push(product);
                }
                return products;
            case 'Phone':
                for(let product of this.productList){
                    if(product instanceof Phone) products.push(product);
                }
                return products;;
            default:
                return products;;
        }
    }
    getProductsList(){
        return this.productList;
    }
}