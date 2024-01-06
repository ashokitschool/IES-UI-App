export class LoginResponse {

    userid:number;
    name:string;
    validLogin:boolean;
 
    constructor(a:number, b:string, c:boolean){
     this.userid=a;
     this.name=b;
     this.validLogin=c;
    }
}
