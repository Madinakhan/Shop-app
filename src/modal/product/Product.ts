export class Product{
    private id: number;
    constructor(public name: string, public price: number, public manufacturer: string){};
    getName(){
        return this.name;
    }
    setName(newName: string){
        this.name = newName;
    }
    getPrice(){
        return this.price;
    }
    setPrice(newPrice: number){
        this.price = newPrice;
    }
    getmanufacturer(){
        return this.manufacturer;
    }
    setmanufacturer(newmanufacturer: string){
        this.name = newmanufacturer;
    }
    getId(){
        return this.id;
    }
    setId(newId: number){
        this.id = newId;
    }
}