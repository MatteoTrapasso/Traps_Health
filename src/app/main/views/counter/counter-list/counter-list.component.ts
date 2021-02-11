import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {CounterStoreActions, CounterStoreSelectors, RootStoreState} from '@root-store/index';
import {Observable} from 'rxjs';
import {Counter} from '@models/vo/counter';


@Component({
  selector: 'app-counter-list',
  templateUrl: `counter-list.component.html`,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterListComponent implements OnInit {


  collection$: Observable<Counter[]>;

  constructor(private store$: Store<RootStoreState.State>) {
    console.log('CounterListComponent.constructor()');
  }

  ngOnInit(): void {
    console.log('CounterListComponent.ngOnInit()');
  }

}
