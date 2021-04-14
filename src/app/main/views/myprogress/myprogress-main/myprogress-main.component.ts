import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {MyprogressStoreActions, RootStoreState} from '@root-store/index';
import {Actions} from 'ngrx-entity-crud';
import {Myprogress} from '@models/vo/myprogress';

@Component({
  selector: 'app-myprogress-main',
  templateUrl: 'myprogress-main.component.html',
  styles: []
})
export class MyprogressMainComponent implements OnInit {

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  actions: Actions<Myprogress> = MyprogressStoreActions.actions;

  ngOnInit(): void {
  }
}
