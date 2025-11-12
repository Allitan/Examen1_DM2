import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'examen',
    loadComponent: () => import('./pages/examen/examen.page').then( m => m.ExamenPage)
  },
  {
    path: 'examen2',
    loadComponent: () => import('./pages/examen2/examen2.page').then( m => m.Examen2Page)
  },
  {
    path: 'examen3',
    loadComponent: () => import('./pages/examen3/examen3.page').then( m => m.Examen3Page)
  },
  {
    path: 'examen4',
    loadComponent: () => import('./pages/examen4/examen4.page').then( m => m.Examen4Page)
  },
  {
    path: 'examen5',
    loadComponent: () => import('./pages/examen5/examen5.page').then( m => m.Examen5Page)
  },
];
