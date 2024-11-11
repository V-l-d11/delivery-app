import { Route } from '@angular/router';
export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('@deliv-app/user-delivery-home-page').then(
        (module) => module.UserDeliveryHomePageComponent,
      ),
  },
];
