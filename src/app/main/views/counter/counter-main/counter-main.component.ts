import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {RootStoreState} from '@root-store/index';
import {Observable} from 'rxjs';
import {CounterStoreActions, CounterStoreSelectors} from '../../../../root-store/counter-store/index';

@Component({
  selector: 'app-counter-main',
  templateUrl: 'counter-main.component.html',
  styles: []
})
export class CounterMainComponent implements OnInit {

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  count$: Observable<number>;

  ngOnInit(): void {
    console.log('CounterMainComponent.ngOnInit()');
    this.count$ = this.store$.select(CounterStoreSelectors.selecQuantity);
  }

  increment(): void {
    console.log('CounterMainComponent.increment()');
    this.store$.dispatch(CounterStoreActions.Increment());
  }

  decrement(): void {
    console.log('CounterMainComponent.decrement()');
    this.store$.dispatch(CounterStoreActions.Decrement());
  }

  reset(): void {
    console.log('CounterMainComponent.reset()');
    this.store$.dispatch(CounterStoreActions.Reset());
  }
}
