import {Product} from "../modal/product/Product"
import {TV} from "../modal/product/TV"
import {Laptop} from "../modal/product/Laptop"
import {Monitor} from "../modal/product/Monitor"
import {Phone} from "../modal/product/Phone"

type ProductType = Laptop | Monitor | Phone | TV;

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
    getPruductByType(type: string){
        let products: Array<ProductType> = [];
        switch (type) {
            case 'TV':
                for(let product of this.productList){
                    if(product instanceof TV) products.push(product);
                }
                break;
            case 'Laptop':
                for(let product of this.productList){
                    if(product instanceof Laptop) products.push(product);
                }
                break;
            case 'Monitor':
                for(let product of this.productList){
                    if(product instanceof Monitor) products.push(product);
                }
                break;
            case 'Phone':
                for(let product of this.productList){
                    if(product instanceof Phone) products.push(product);
                }
                break;
            default:
                break;
        }
        return products;
    }
    getProductsList(){
        return this.productList;
    }
}