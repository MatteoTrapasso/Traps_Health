import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {IbmStoreActions, IbmStoreSelectors, RootStoreState} from '@root-store/index';
import {Ibm} from '@models/vo/ibm';

@Component({
  selector: 'app-button-create-many-test-ibm',
  template: `
    <button type="button" *ngLet="(itemsSelected$|async) as itemsSelected" pButton icon="pi pi-plus"
            label="Create many ({{itemsSelected.length}})" (click)="onCreateMany(itemsSelected)"
            [disabled]="!(itemsSelected.length > 0)"
            class="p-button-success"></button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonCreateManyTestIbmComponent implements OnInit {

  itemsSelected$: Observable<Ibm[]>;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnInit(): void {
    this.itemsSelected$ = this.store$.pipe(
      select(IbmStoreSelectors.selectItemsSelected)
    );
  }

  onCreateMany(values: Ibm[]): void {
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
    this.store$.dispatch(IbmStoreActions.CreateManyRequest({items}));
  }

}
