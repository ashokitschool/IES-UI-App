import { Component } from '@angular/core';
import { RegForm } from '../reg-form';
import { RegResponse } from '../reg-response';
import { AppService } from '../app.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  register:RegForm = new RegForm("","","","");

  regResp:RegResponse | undefined;

  constructor(private appSvc:AppService){

  }

  registration(){
    this.appSvc.register(this.register)
               .subscribe(data => {
                  this.regResp = data;
                  console.log(this.regResp);
               });
  }

}
