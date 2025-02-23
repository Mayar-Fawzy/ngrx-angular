import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

export const authFeatureKey = 'auth';

export interface AppState {
  //save User Email And Password Here
  

}

export const reducers: ActionReducerMap<AppState> = {

};


export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [] : [];
