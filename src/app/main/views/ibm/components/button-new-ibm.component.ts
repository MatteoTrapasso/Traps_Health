import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {RouterStoreActions} from '@root-store/router-store/index';
import {PopUpData} from '@root-store/router-store/pop-up-base.component';
import {Ibm} from '@models/vo/ibm';
import {RootStoreState} from '@root-store/index';

@Component({
  selector: 'app-button-new-ibm',
  template: `
    <button type="button" pButton icon="pi pi-plus"
            label="New Ibm" (click)="onCreate()"
            [disabled]="(disabled$ |async)"
            class="p-button-success"></button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonNewIbmComponent implements OnInit {

  disabled$: Observable<boolean>;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnInit() {
    this.disabled$ = of(false);
  }

  onCreate() {
    const item: Ibm = new Ibm();

    const data: PopUpData<Ibm> = {
      item,
      props: {title: 'New Ibm', route: 'ibm'}
    };

    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['ibm', {outlets: {popUp: ['edit']}}],
      data
    }));
  }

}
