import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {RouterStoreActions} from '@root-store/router-store/index';
import {PopUpData} from '@root-store/router-store/pop-up-base.component';
import {Myprogress} from '@models/vo/myprogress';
import {RootStoreState} from '@root-store/index';

@Component({
  selector: 'app-button-new-myprogress',
  template: `
    <button type="button" pButton icon="pi pi-plus"
            label="New Myprogress" (click)="onCreate()"
            [disabled]="(disabled$ |async)"
            class="p-button-success"></button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonNewMyprogressComponent implements OnInit {

  disabled$: Observable<boolean>;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnInit() {
    this.disabled$ = of(false);
  }

  onCreate() {
    const item: Myprogress = new Myprogress();

    const data: PopUpData<Myprogress> = {
      item,
      props: {title: 'New Myprogress', route: 'myprogress'}
    };

    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['myprogress', {outlets: {popUp: ['edit']}}],
      data
    }));
  }

}
