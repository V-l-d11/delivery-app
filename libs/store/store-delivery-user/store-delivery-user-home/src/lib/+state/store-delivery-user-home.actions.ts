import { CategoryFood } from '@deliv-app/interfaces';
import { createAction, props } from '@ngrx/store';

export enum UserDeliveryHomeActions {
  GET_FOOD_CATEGORY_ALL = '[User Home page] get food crtaegory All',
  GET_FOOD_CATEGORY_ALL_SUCESS = '[User Home page] get food category sucess',
  GET_FOOD_CATEGORY_ALL_FAILED = '[User Home page] get food category failed',
}

const getFoodCategoryList = createAction(
  UserDeliveryHomeActions.GET_FOOD_CATEGORY_ALL,
);
const getFoodCategoryListSucess = createAction(
  UserDeliveryHomeActions.GET_FOOD_CATEGORY_ALL_SUCESS,
  props<{ items: CategoryFood[] }>(),
);
const getFoodCategoryListFailed = createAction(
  UserDeliveryHomeActions.GET_FOOD_CATEGORY_ALL_FAILED,
  props<{ error: string }>(),
);

export const UserDeliveryHomeActionsList = {
  getFoodCategoryList,
  getFoodCategoryListSucess,
  getFoodCategoryListFailed,
};
