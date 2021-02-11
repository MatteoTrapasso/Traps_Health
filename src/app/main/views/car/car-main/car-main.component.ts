import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {CarStoreActions, RootStoreState} from '@root-store/index';
import {Actions} from 'ngrx-entity-crud';
import {Car} from '@models/vo/car';

@Component({
  selector: 'app-car-main',
  templateUrl: 'car-main.component.html',
  styles: []
})
export class CarMainComponent implements OnInit {

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  actions: Actions<Car> = CarStoreActions.actions;

  ngOnInit(): void {
  }
}
