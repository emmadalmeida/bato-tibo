import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'accueil',
        loadComponent: () => import('../accueil/accueil.page').then(m => m.AccueilPage),
      },
      {
        path: 'tab2',
        loadComponent: () =>
          import('../tab2/tab2.page').then((m) => m.Tab2Page),
      },
      {
        path: 'tab3',
        loadComponent: () =>
          import('../tab3/tab3.page').then((m) => m.Tab3Page),
      },
      {
        path: 'bateaux',
        loadComponent: () =>
          import('../bateaux/bateaux.page').then((m) => m.BateauxPage),
      },
      {
        path: 'recettes',
        loadComponent: () =>
          import('../recettes/recettes.page').then((m) => m.RecettesPage),
      },
      {
        path: 'restaurants',
        loadComponent: () =>
          import('../restaurants/restaurants.page').then((m) => m.RestaurantsPage),
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('../contact/contact.page').then((m) => m.ContactPage),
      },
      {
        path: 'types-produits',
        loadComponent: () =>
          import('../types-produits/types-produits.page').then((m) => m.TypesProduitsPage),
      },
      {
        path: '',
        redirectTo: '../accueil/accueil.page',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '../accueil/accueil.page',
    pathMatch: 'full',
  },
];
