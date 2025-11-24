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
  {
    path: 'panier',
    loadComponent: () => import('./panier/panier.page').then( m => m.PanierPage)
  },
  {
    path: 'types-produits',
    loadComponent: () => import('./types-produits/types-produits.page').then( m => m.TypesProduitsPage)
  },
  {
    path: 'liste-produits',
    loadComponent: () => import('./liste-produits/liste-produits.page').then( m => m.ListeProduitsPage)
  },
];
