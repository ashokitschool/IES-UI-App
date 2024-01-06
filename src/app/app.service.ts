import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginForm } from './login-form';
import { Observable } from 'rxjs';
import { LoginResponse } from './login-response';
import { RegForm } from './reg-form';
import { RegResponse } from './reg-response';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private baseUrl="http://localhost:8080"

  constructor(private http:HttpClient) { }

  loginCheck(loginForm:LoginForm):Observable<LoginResponse>{
    return this.http.post<LoginResponse>(`${this.baseUrl}/login`,
                                        loginForm, 
                                        {responseType:'json'}
    );
  }

  register(regForm:RegForm):Observable<RegResponse>{
      return this.http.post<RegResponse>(`${this.baseUrl}/register`, 
                                        regForm,
                                        {responseType:'json'}
    );
  }


  validateLogin():Boolean{
    return Boolean(localStorage.getItem("isLoggedIn"));
  }
}
