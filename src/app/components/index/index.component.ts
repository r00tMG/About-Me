import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AboutService } from 'src/app/services/about.service';
import {map, Observable} from "rxjs";
import {AboutReducerState} from "../../@ngrx/about.reducer";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
   committersState$: Observable<AboutReducerState>|null=null;
    constructor(private store:Store<any>) {
    }
  ngOnInit():void{
    this.committersState$ = this.store.pipe(
      map((state)=>state.catalogStore)
    )
  }
}
