import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { WelcomeComponent } from './user/welcome/welcome.component';


const routes: Routes = [
  {path: 'sign-up', component: SignupComponent},
  {path: 'login', component: LoginComponent, pathMatch: 'full'},
  {path: 'welcome', component: WelcomeComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: '*', component: LoginComponent},
  {path:'**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
