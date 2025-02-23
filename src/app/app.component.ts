import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from "@angular/router";
import { select, Store } from "@ngrx/store";
import { AuthState } from "./auth/reducers";
import { map } from "rxjs/operators";
import { isloggedIn, islogout } from "./auth/auth.selectors";
import { logOut } from "./auth/auth.action";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  loading = true;
  isloggedIn$: Observable<boolean>;
  isloggedOut$: Observable<boolean>;
  sidebarVisible: boolean = false;

  constructor(private router: Router, private store: Store<AuthState>) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    });
 // (!!) => return boolean
    this.isloggedIn$ = this.store.pipe(select(isloggedIn));
    this.isloggedOut$ = this.store.pipe(select(islogout));
  }

  logout() {

    this.store.dispatch(logOut())
  }
}
