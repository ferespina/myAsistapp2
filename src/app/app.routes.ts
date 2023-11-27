import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'homeprofesor',
    loadComponent: () => import('./pages/homeprofesor/homeprofesor.page').then( m => m.HomeprofesorPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'loginprofesor',
    loadComponent: () => import('./pages/loginprofesor/loginprofesor.page').then( m => m.LoginProfesorPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'usertype',
    loadComponent: () => import('./pages/usertype/usertype.page').then( m => m.UsertypePage)
  },
  {
    path: '',
    redirectTo: 'usertype',
    pathMatch: 'full',
  }
];
