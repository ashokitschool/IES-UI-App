import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateCwComponent } from './create-cw/create-cw.component';
import { ViewCwComponent } from './view-cw/view-cw.component';

export const routes: Routes = [

    {path: '', component:LoginComponent, pathMatch:'full'},

    {path: 'login', component:LoginComponent},

    {path: 'register', component: RegisterComponent},

    {path: 'dashboard', component: DashboardComponent},

    {path: 'create-cw', component: CreateCwComponent},

    {path: 'view-cw', component: ViewCwComponent}

];
