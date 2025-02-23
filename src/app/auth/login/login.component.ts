import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormControl, FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";

import {Store} from "@ngrx/store";

import {AuthService} from "../auth.service";
import {tap} from "rxjs/operators";
import {noop} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup= new  FormGroup({
    email: new FormControl('ngrx@codezetta.com', [Validators.required]),
    password: new FormControl('test', [Validators.required])
});;

  constructor(
      private fb:UntypedFormBuilder,
      private auth: AuthService,
      private router:Router,) {


  }

  ngOnInit() {

  }

  login() {
    //distract تفتيت
    const {email,password}=this.form.value;
 //tap => side effect
  this.auth.login(email,password).
  pipe(tap(user=>{
    this.router.navigateByUrl('/blog')
  })).subscribe(
    //no operation to excute يعني متنفذش حاجه 
    noop,
    ()=> alert("Wrong Login")
  )
   }
}

