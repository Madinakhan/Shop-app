import {Product} from './Product';

export class Laptop extends Product{
    constructor(public name: string, public price: number, public manufacturer: string, public RAM: number, public CPU: string, public GPU: string, public memory: number){
        super(name, price, manufacturer);
    };
    getRAM(){
        return this.RAM;
    }
    setRAM(newRAM: number){
        this.RAM = newRAM;
    }
    getCPU(){
        return this.CPU;
    }
    setCPU(newCPU: string){
        this.CPU = newCPU;
    }
    getGPU(){
        return this.GPU;
    }
    setGPU(newGPU: string){
        this.GPU = newGPU;
    }
    getMemory(){
        return this.memory
    }
    setMemory(newMemory: number){
        this.memory = newMemory
    }
}