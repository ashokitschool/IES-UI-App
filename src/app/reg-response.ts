export class RegResponse {

    successMsg:string;
    errorMsg:string;

    constructor(a:string, b:string){
        this.successMsg = a;
        this.errorMsg=b;
    }
}
