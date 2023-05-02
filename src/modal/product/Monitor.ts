import {Product} from './Product';

export class Monitor extends Product{
    constructor(public name: string, public price: number, public manufacturer: string, public displaySize: number, public HZ: number){
        super(name, price, manufacturer);
    };
    getDisplaySize(){
        return this.displaySize;
    }
    setDisplaySize(newDisplaySize: number){
        this.displaySize = newDisplaySize;
    }
    getHZ(){
        return this.HZ;
    }
    setHZ(newHZ: number){
        this.HZ = newHZ;
    }
}