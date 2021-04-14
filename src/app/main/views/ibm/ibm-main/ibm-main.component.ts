import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {IbmStoreActions, RootStoreState} from '@root-store/index';
import {Actions} from 'ngrx-entity-crud';
import {Ibm} from '@models/vo/ibm';

@Component({
  selector: 'app-ibm-main',
  templateUrl: 'ibm-main.component.html',
  styles: []
})
export class IbmMainComponent implements OnInit {

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  actions: Actions<Ibm> = IbmStoreActions.actions;

  ngOnInit(): void {
  }
}
