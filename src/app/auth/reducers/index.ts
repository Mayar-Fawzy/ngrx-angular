import { isDevMode } from "@angular/core";
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on,
} from "@ngrx/store";
import { User } from "../model/user.model";
import { AuthAction } from "../auth_types";
import { stat } from "fs";

export const authFeatureKey = "auth";

export interface AuthState {
  //save User Email And Password Here
  user: User;
}
export const initialAuthState: AuthState = {
  user: undefined,
};

export const metaReducers: MetaReducer<AuthState>[] = isDevMode() ? [] : [];

//create reducer
export const authReducer = createReducer(
  initialAuthState,
  //الحاجه الي هترد علي ال action الي حصل
  on(AuthAction.login, (state, action) => {
    return {
      user: action.user
    };
  })
);
