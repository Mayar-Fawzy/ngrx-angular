import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import {
  FormControl,
  FormGroup,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from "@angular/forms";

import { Store } from "@ngrx/store";

import { AuthService } from "../auth.service";
import { tap } from "rxjs/operators";
import { noop } from "rxjs";
import { Router } from "@angular/router";
import { AuthState } from "../reducers";
import { login } from "../auth.action";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl("ngrx@codezetta.com", [Validators.required]),
    password: new FormControl("test", [Validators.required]),
  });

  constructor(
    private fb: UntypedFormBuilder,
    private auth: AuthService,
    private router: Router,
    private store: Store<AuthState>
  ) {}

  ngOnInit() {}

  login() {
    //distract تفتيت
    const { email, password } = this.form.value;
    //tap => side effect
    this.auth
      .login(email, password)
      .pipe(
        tap((user) => {
          console.log(user);
          //تخزين ال user ف ال store
          //login({user})=>action
          const newUser = login({ user });
          console.log("newUser", newUser);

          //dispatch لازم ياخد action
          this.store.dispatch(newUser);
          this.router.navigate(["blogs"]);
        })
      )
      .subscribe(
        //no operation to excute يعني متنفذش حاجه
        noop,
        () => alert("Wrong Login")
      );
  }
}
