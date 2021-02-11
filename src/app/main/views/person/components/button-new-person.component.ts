import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {RouterStoreActions} from '@root-store/router-store/index';
import {PopUpData} from '@root-store/router-store/pop-up-base.component';
import {Person} from '@models/vo/person';
import {RootStoreState} from '@root-store/index';

@Component({
  selector: 'app-button-new-person',
  template: `
    <button type="button" pButton icon="pi pi-plus"
            label="New Person" (click)="onCreate()"
            [disabled]="(disabled$ |async)"
            class="p-button-success"></button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonNewPersonComponent implements OnInit {

  disabled$: Observable<boolean>;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnInit() {
    this.disabled$ = of(false);
  }

  onCreate() {
    const item: Person = new Person();

    const data: PopUpData<Person> = {
      item,
      props: {title: 'New Person', route: 'person'}
    };

    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['person', {outlets: {popUp: ['edit']}}],
      data
    }));
  }

}
