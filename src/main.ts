import { User } from './modal/User';
import { Product } from './modal/product/Product';
import { TV } from './modal/product/TV';
import { Laptop } from './modal/product/Laptop';
import { Monitor } from './modal/product/Monitor';
import { Phone } from './modal/product/Phone';
import { UserService } from './services/UserService';
import { ProductService } from './services/ProductService';

export class Main {
    private userService = new UserService();
    private productService = new ProductService();

    addProducts(...newproducts: Product[]) {
        for (const product of newproducts) {
            this.productService.add(product);
        }
    }
    addUsers(...newUsers: User[]) {
        for (const user of newUsers) {
            this.userService.add(user);
        }
    }
    getProductsList() {
        return this.productService.getProductsList();
    }
    getUsersList() {
        return this.userService.getUsersList();
    }
    showProducts(type: string) {
        return this.productService.getPruductByType('Laptop');
    }
    signUp(name: string, username: string, password: string) {
        this.userService.signUp(name, username, password)
    }
    checkAdmin(user: User) {
        return user.getuserName() === "admin";
    }
}