import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {CalculatorStoreActions, CalculatorStoreSelectors, RootStoreState} from '@root-store/index';
import {Observable} from 'rxjs';
import {Calculator} from '@models/vo/calculator';


@Component({
  selector: 'app-calculator-list',
  templateUrl: `calculator-list.component.html`,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalculatorListComponent implements OnInit {


  collection$: Observable<Calculator[]>;

  constructor(private store$: Store<RootStoreState.State>) {
    console.log('CalculatorListComponent.constructor()');
  }

  ngOnInit(): void {
    console.log('CalculatorListComponent.ngOnInit()');
  }

}
