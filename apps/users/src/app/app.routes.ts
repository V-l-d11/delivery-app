import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@deliv-app/user-delivery-home-page').then(
        (module) => module.UserDeliveryHomePageComponent,
      ),
  },
];
