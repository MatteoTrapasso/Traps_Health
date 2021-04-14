import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {MybodyStoreActions, RootStoreState} from '@root-store/index';
import {Actions} from 'ngrx-entity-crud';
import {Mybody} from '@models/vo/mybody';

@Component({
  selector: 'app-mybody-main',
  templateUrl: 'mybody-main.component.html',
  styles: []
})
export class MybodyMainComponent implements OnInit {

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  actions: Actions<Mybody> = MybodyStoreActions.actions;

  ngOnInit(): void {
  }
}
