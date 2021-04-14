import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {RouterStoreActions} from '@root-store/router-store/index';
import {PopUpData} from '@root-store/router-store/pop-up-base.component';
import {Mybody} from '@models/vo/mybody';
import {RootStoreState} from '@root-store/index';

@Component({
  selector: 'app-button-new-mybody',
  template: `
    <button type="button" pButton icon="pi pi-plus"
            label="New Mybody" (click)="onCreate()"
            [disabled]="(disabled$ |async)"
            class="p-button-success"></button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonNewMybodyComponent implements OnInit {

  disabled$: Observable<boolean>;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnInit() {
    this.disabled$ = of(false);
  }

  onCreate() {
    const item: Mybody = new Mybody();

    const data: PopUpData<Mybody> = {
      item,
      props: {title: 'New Mybody', route: 'mybody'}
    };

    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['mybody', {outlets: {popUp: ['edit']}}],
      data
    }));
  }

}
