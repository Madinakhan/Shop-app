import {Product} from './Product';

export class Phone extends Product{
    constructor(public name: string, public price: number, public manufacturer: string, public batterySize: number, public cameraPix: number){
        super(name, price, manufacturer);
    };
    getBatterySize(){
        return this.batterySize;
    }
    setBatterySize(newBatterySize: number){
        this.batterySize = newBatterySize;
    }
    getCameraPix(){
        return this.cameraPix;
    }
    setCameraPix(newCameraPix: number){
        this.cameraPix = newCameraPix;
    }
}