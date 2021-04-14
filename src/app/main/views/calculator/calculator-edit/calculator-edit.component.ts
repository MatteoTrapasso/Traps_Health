import {Component} from '@angular/core';
import {RootStoreState} from '@root-store/index';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-calculator-edit',
  templateUrl: './calculator-edit.component.html',
  styles: [``]
})
export class CalculatorEditComponent {

  constructor(private store$: Store<RootStoreState.State>) {
    console.log('CalculatorEditComponent.constructor()');
  }

}
