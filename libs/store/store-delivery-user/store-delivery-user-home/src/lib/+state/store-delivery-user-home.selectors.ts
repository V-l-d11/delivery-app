import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  USER_DELIVERY_HOME_FETURE,
  UserHomeState,
} from './store-delivery-user-home.reducer';

const selector = createFeatureSelector<UserHomeState>(
  USER_DELIVERY_HOME_FETURE,
);

export const selectCategoryFood = createSelector(
  selector,
  (state) => state.categoryFoodList,
);

export const isLoading = createSelector(selector, (state) => state.loading);

export const isError = createSelector(selector, (state) => state.error);
