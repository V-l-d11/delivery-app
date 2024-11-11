import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserDeliveryHomeActionsList } from './+state/store-delivery-user-home.actions';
import {
  isError,
  isLoading,
} from './+state/store-delivery-user-home.selectors';
@Injectable({ providedIn: 'root' })
export class StoreDeliveryUserHomeFacade {
  private readonly _store = inject(Store);

  public loadCategoryFoodList = (): void =>
    this._store.dispatch(UserDeliveryHomeActionsList.getFoodCategoryList());

  public getIsLoading = (): boolean => this._store.select(isLoading);

  public getError = (): string => this._store.select(isError);
}
