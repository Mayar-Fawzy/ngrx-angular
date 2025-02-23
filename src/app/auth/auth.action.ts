import { User } from './model/user.model';
import { createAction, props } from "@ngrx/store";
//[المصدر] الحدث
//payold =props
//props => تاخد الداتا الي راجعه و من نوع ايه 
export const login =createAction
('[login Page] User Login',
  props<{user:User}>()
);

//log out
export const logOut=createAction(
    '[side Menue] Logout',
)