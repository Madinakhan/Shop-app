import {User} from '../modal/User';

export class UserService{
    private users: User[] = [];
    private idGenerator: number = 0;
    
    checkUserName(newuser: string):boolean{
        for(let user of this.users){
            if(user.getuserName()==newuser) return true;
        }
        return false;
    }
    add(newuser: User){
        for(let user of this.users){
            if(this.checkUserName(newuser.getuserName())) throw new Error("User already exists");
            
        }
        this.users.push(newuser);
        newuser.setId(++this.idGenerator);
    }
    signIn(userName: string, password: string): User{
        for(let user of this.users){
            if(user.getuserName()==userName && user.getpassword()==password) return user;
        } 
        throw new Error ('User not found');
    }
    signUp(name: string, username: string, password: string){
        if(this.checkUserName(username)){
            throw new Error(`User ${username} already exists`);
        }
        let user = new User(name, username, password, 1000000);
        this.add(user);         
    }  
    getUsersList(){
        return this.users;
    }
}