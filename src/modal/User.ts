export class User{
    private id: number;
    constructor(public name: string, public userName: string, public password: string, public balance: number){};
    getName(){
        return this.name;
    }
    setName(newName: string){
        this.name = newName;
    }
    getuserName(){
        return this.userName;
    }
    setuserName(newuserName: string){
        this.userName = newuserName;
    }
    getpassword(){
        return this.password;
    }
    setpassword(newpassword: string){
        this.password = newpassword;
    }
    getbalance(){
        return this.balance;
    }
    setbalance(newbalance: number){
        this.balance = newbalance;
    }
    getId(){
        return this.id;
    }
    setId(newId: number){
        this.id = newId;
    }
}
