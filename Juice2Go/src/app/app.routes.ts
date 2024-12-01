import { Routes } from '@angular/router';

export const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'cart',
        loadComponent: () => import('./pages/home/cart/cart.page').then(m => m.CartPage) // Ensure Cart page is here
      },
      {
        path: 'juice/:id',
        children: [
          {
            path: '',
            loadComponent: () => import('./pages/home/item-detail/item-detail.page').then(m => m.ItemDetailPage)
          },
          {
            path: 'cart',
            loadComponent: () => import('./pages/home/cart/cart.page').then(m => m.CartPage) // Cart path inside item details as well
          },
        ],
      },
    ],
  },
  {
    path: 'login',
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage)
      },
      {
        path: 'signup',
        loadComponent: () => import('./pages/login/signup/signup.page').then(m => m.SignupPage)
      },
    ],
  },
  {
    path: 'developers',
    loadComponent: () => import('./pages/developers/developers.page').then(m => m.DevelopersPage)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.page').then(m => m.ContactPage)
  },
  {
    path: 'company',
    loadComponent: () => import('./pages/company/company.page').then(m => m.CompanyPage)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.page').then( m => m.AboutPage)
  },
];
