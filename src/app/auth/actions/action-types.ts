import { createAction, props } from '@ngrx/store';
import { User } from '../model/user.model';

// Define login action with a User object
export const login = createAction(
    '[Auth] Login',
    props<{ user: User }>() // ✅ Fix: Expect a User object instead of email/password
);

export const logout = createAction('[Auth] Logout');
