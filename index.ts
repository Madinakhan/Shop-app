import { User } from './src/modal/User'; 
import { Laptop } from './src/modal/product/Laptop';
import { TV } from './src/modal/product/TV';
import { Monitor } from './src/modal/product/Monitor';
import { Phone } from './src/modal/product/Phone';
import { Main } from './src/main';

const main = new Main();

const laptop1 = new Laptop("HP G850", 2000, "HP", 32, "Core i9 13 Gen", "RTX4090", 512);
const phone1 = new Phone("S20", 400, "Sumsung", 5000, 108);
const tv1 = new TV("Sumsung 2", 500, "Sumsung", 32, false, "Amoled");
const tv2 = new TV("Sumsung 2", 500, "Sumsung", 32, false, "Amoled");

main.addProducts(laptop1, phone1, tv1, tv2);

// console.log(main.getProductsList());

// console.log(main.showProducts("Tv"));

// main.signUp("Madina", "ya_medinee", "hyg782hjd");
// main.signUp("Madina", "ya_medine", "n3hui2jce");

const user1 = new User("Madina", "ya_medinee", "hyg782hjd", 1000000);
const user2 = new User("Zilola", "zabihullaeva_zilola", "zilola05", 11222);
const user3 = new User("Malika", "mlkvmu_", "malika05", 345643);

main.addUsers(user1,user2,user3);
console.log("Users list: ",main.getUsersList());

// console.log("Admin :", main.checkAdmin(user3));