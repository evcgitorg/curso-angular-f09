import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/ngrx/AppState';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  

  store$ : Observable<any>;

  constructor
  (
    private _store : Store<AppState>
  )
  {
    this.store$ = this._store.select(state=> state);
  }
  
  ngOnInit(): void {
    
    this.store$.subscribe(response => {
      console.log("mostrando response", response);
    })

  }

}
