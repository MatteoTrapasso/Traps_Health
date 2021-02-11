import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {PersonStoreActions, PersonStoreSelectors, RootStoreState} from '@root-store/index';
import {Person} from '@models/vo/person';

@Component({
  selector: 'app-button-create-many-test-person',
  template: `
    <button type="button" *ngLet="(itemsSelected$|async) as itemsSelected" pButton icon="pi pi-plus"
            label="Create many ({{itemsSelected.length}})" (click)="onCreateMany(itemsSelected)"
            [disabled]="!(itemsSelected.length > 0)"
            class="p-button-success"></button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonCreateManyTestPersonComponent implements OnInit {

  itemsSelected$: Observable<Person[]>;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnInit(): void {
    this.itemsSelected$ = this.store$.pipe(
      select(PersonStoreSelectors.selectItemsSelected)
    );
  }

  onCreateMany(values: Person[]): void {
    const items = values.map(value => {
      const keys = Object.keys(value);
      const result = {...value};
      keys.forEach(key => {
        result.id = null;
        if (key !== 'id' && typeof result[key] === 'string') {
          result[key] = 'edited ' + new Date().getSeconds();
        }
      });
      return result;
    });
    this.store$.dispatch(PersonStoreActions.CreateManyRequest({items}));
  }

}
