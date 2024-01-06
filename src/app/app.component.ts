import { Component, DoCheck } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { SideMenuComponent } from "./side-menu/side-menu.component";
import { AppService } from './app.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, RouterModule, SideMenuComponent, FormsModule]
})
export class AppComponent implements DoCheck{

  title = 'app';
  isLoggedIn:Boolean=false;

  constructor(private router:Router, private appSvc:AppService){

  }

  ngDoCheck(): void {
    this.isLoggedIn = this.appSvc.validateLogin();
  }

}
