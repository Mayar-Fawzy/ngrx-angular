import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./reducers";
export const selectAuthState = createFeatureSelector<AuthState>("auth")
export const isloggedIn = createSelector(
    selectAuthState,
  (auth) => !!auth.user
);
//isloggedIn = true ....!true....islogout =false
//isloggedIn = false ....!false....islogout =true
export const islogout = createSelector(isloggedIn, (auth) => !auth);
