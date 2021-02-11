import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {RouterStoreActions} from '@root-store/router-store/index';
import {PopUpData} from '@root-store/router-store/pop-up-base.component';
import {Car} from '@models/vo/car';
import {RootStoreState} from '@root-store/index';

@Component({
  selector: 'app-button-new-car',
  template: `
    <button type="button" pButton icon="pi pi-plus"
            label="New Car" (click)="onCreate()"
            [disabled]="(disabled$ |async)"
            class="p-button-success"></button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonNewCarComponent implements OnInit {

  disabled$: Observable<boolean>;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnInit() {
    this.disabled$ = of(false);
  }

  onCreate() {
    const item: Car = new Car();

    const data: PopUpData<Car> = {
      item,
      props: {title: 'New Car', route: 'car'}
    };

    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['car', {outlets: {popUp: ['edit']}}],
      data
    }));
  }

}
