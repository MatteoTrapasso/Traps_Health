import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {StructureStoreActions, RootStoreState} from '@root-store/index';
import {Actions} from 'ngrx-entity-crud';
import {Structure} from '@models/vo/structure';

@Component({
  selector: 'app-structure-main',
  templateUrl: 'structure-main.component.html',
  styles: []
})
export class StructureMainComponent implements OnInit {

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  actions: Actions<Structure> = StructureStoreActions.actions;

  ngOnInit(): void {
  }
}
