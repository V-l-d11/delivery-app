import { CategoryFood } from '@deliv-app/interfaces';
import { createReducer, on } from '@ngrx/store';
import { UserDeliveryHomeActionsList } from './store-delivery-user-home.actions';

export const USER_DELIVERY_HOME_FETURE = 'USER_HOME_REDUCER';

export interface UserHomeState {
  categoryFoodList: CategoryFood[];
  error: string;
  loading: boolean;
}

export const initialState: UserHomeState = {
  categoryFoodList: [],
  error: '',
  loading: false,
};

export const UserHomeReducer = createReducer(
  initialState,
  on(
    UserDeliveryHomeActionsList.getFoodCategoryList,
    (state: UserHomeState) => ({
      ...state,
      loading: true,
    }),
  ),
  on(
    UserDeliveryHomeActionsList.getFoodCategoryListSucess,
    (state: UserHomeState, { items }) => ({
      ...state,
      categoryFoodList: items,
      loading: false,
    }),
  ),
  on(
    UserDeliveryHomeActionsList.getFoodCategoryListFailed,
    (state: UserHomeState, { error }) => ({
      ...state,
      error,
      loading: false,
    }),
  ),
);
