import {Product} from './Product';

export class TV extends Product{
    constructor(public name: string, public price: number, public manufacturer: string, public displaySize: number, public isSmart: boolean, public displayType: string){
        super(name, price, manufacturer);
    };
    getDisplaySize(){
        return this.displaySize;
    }
    setDisplaySize(newDisplaySize: number){
        this.displaySize = newDisplaySize;
    }
    getisSmart(){
        return this.isSmart;
    }
    setisSmart(newisSmart: boolean){
        this.isSmart = newisSmart;
    }
    getdisplayType(){
        return this.displayType;
    }
    setdisplayType(newdisplayType: string){
        this.displayType = newdisplayType;
    }
}