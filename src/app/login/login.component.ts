import { Component } from '@angular/core';
import { LoginForm } from '../login-form';
import { AppService } from '../app.service';
import { LoginResponse } from '../login-response';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  isLoggedIn:Boolean=false;

  login:LoginForm = new LoginForm("","");
  loginResp: LoginResponse | undefined;

  errMsg:string="";

  constructor(private router:Router, private appSvc:AppService){

  }


  loginCheck(){
    this.appSvc.loginCheck(this.login)
               .subscribe(data => {
                   this.loginResp = data;
                   console.log(this.loginResp);
                   if(this.loginResp.validLogin){
                      localStorage.setItem("isLoggedIn", "true");
                      this.router.navigate(['dashboard'])
                   }else{
                      this.errMsg = "Invalid Credentials";
                   }
               });
  }

}
