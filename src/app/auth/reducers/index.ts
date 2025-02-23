import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector, createReducer,
    createSelector,
    MetaReducer, on
} from '@ngrx/store';
import {User} from '../model/user.model';
import * as AuthActions from '../actions/action-types';



export interface AuthState {
    user: User | null
}

export const initialAuthState: AuthState = {
    user: null
};

export const authReducer = createReducer(

    initialAuthState,

    on(AuthActions.login, (state, action) => {
        return {
            user: action.user
        }
    }),

    on(AuthActions.logout, (state, action) => {
        return {
            user: undefined
        }
    })



);

