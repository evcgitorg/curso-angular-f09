import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/ngrx/AppState';
import { loginAction } from 'src/app/ngrx/actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  store$ : Observable<any>;
  public errorMessage: string = "";
  public email: string | undefined;
  public password : string | undefined;
  public loading : boolean = false;

  constructor
  (
    private store : Store<AppState>,
    private _router : Router
  )
  {
    this.store$ = this.store.select(state => state)
  }

  ngOnInit(): void {
  }

  onLogin(){
    const payload = {
      email: this.email,
      password: this.password
    }
    this.store.dispatch(loginAction({data: payload}));
    this._router.navigate(["/home"])
  }

}
