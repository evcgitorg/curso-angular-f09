import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/ngrx/AppState';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  implements OnInit {

  store$ : Observable<any>;


  constructor
  (
    private store : Store<{userStore: any}>,
  )
  {
    this.store$ = this.store.select('userStore');
  }
  ngOnInit(): void {
    
    this.store$.subscribe(response => console.log(response.userData))

  }


}
