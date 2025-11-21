import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'accueil',
    loadComponent: () => import('./accueil/accueil.page').then( m => m.AccueilPage)
  },
  {
    path: 'bateaux',
    loadComponent: () => import('./bateaux/bateaux.page').then( m => m.BateauxPage)
  },
  {
    path: 'recettes',
    loadComponent: () => import('./recettes/recettes.page').then( m => m.RecettesPage)
  },
  {
    path: 'restaurants',
    loadComponent: () => import('./restaurants/restaurants.page').then( m => m.RestaurantsPage)
  },
  {
    path: 'contact',
    loadComponent: () => import('./contact/contact.page').then( m => m.ContactPage)
  },
];
