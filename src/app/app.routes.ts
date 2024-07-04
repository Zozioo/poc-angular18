import { Routes } from '@angular/router';
<
export const routes: Routes = [
  {path:'',  pathMatch:'full', redirectTo:'login'},
  {path:'login', loadComponent:()=>import('./features/authentication/login/login.component').then((item: { LoginComponent: any; }) => item.LoginComponent) },
  {path:'**', redirectTo:'login', pathMatch:'full'}
];
