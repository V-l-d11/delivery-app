import { inject, Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
@Injectable({
  providedIn: 'root',
})
export class UserDeliveryHomeEffects {
  private readonly _actions$ = inject(Actions);
}
