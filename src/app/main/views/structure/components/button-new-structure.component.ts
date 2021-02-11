import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {RouterStoreActions} from '@root-store/router-store/index';
import {PopUpData} from '@root-store/router-store/pop-up-base.component';
import {Structure} from '@models/vo/structure';
import {RootStoreState} from '@root-store/index';

@Component({
  selector: 'app-button-new-structure',
  template: `
    <button type="button" pButton icon="pi pi-plus"
            label="New Structure" (click)="onCreate()"
            [disabled]="(disabled$ |async)"
            class="p-button-success"></button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonNewStructureComponent implements OnInit {

  disabled$: Observable<boolean>;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnInit() {
    this.disabled$ = of(false);
  }

  onCreate() {
    const item: Structure = new Structure();

    const data: PopUpData<Structure> = {
      item,
      props: {title: 'New Structure', route: 'structure'}
    };

    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['structure', {outlets: {popUp: ['edit']}}],
      data
    }));
  }

}
