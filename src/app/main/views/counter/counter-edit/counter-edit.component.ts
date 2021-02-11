import {Component} from '@angular/core';
import {RootStoreState} from '@root-store/index';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-counter-edit',
  templateUrl: './counter-edit.component.html',
  styles: [``]
})
export class CounterEditComponent {

  constructor(private store$: Store<RootStoreState.State>) {
    console.log('CounterEditComponent.constructor()');
  }

}
