import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { AboutReducerEnum, AboutReducerState } from 'src/app/@ngrx/about.reducer';

@Component({
  selector: 'app-committer',
  templateUrl: './committer.component.html',
  styleUrls: ['./committer.component.css']
})
export class CommitterComponent {
  committersState$:Observable<AboutReducerState>|null=null;
  readonly AboutReducerEnum=AboutReducerEnum;
  constructor(private store:Store<any>){

  }
  ngOnInit():void{
   this.committersState$ = this.store.pipe(
    map((state)=>state.catalogStore)
   )
  }
}
