import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {IbmStoreActions, IbmStoreSelectors, RootStoreState} from '@root-store/index';
import {Ibm} from '@models/vo/ibm';

@Component({
  selector: 'app-button-edit-many-test-ibm',
  template: `
    <button type="button" *ngLet="(itemsSelected$|async) as itemsSelected" pButton icon="pi pi-plus"
            label="Edit many ({{itemsSelected.length}})" (click)="onEditMany(itemsSelected)"
            [disabled]="!(itemsSelected.length > 0)"
            class="p-button-success"></button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonEditManyTestIbmComponent implements OnInit {

  itemsSelected$: Observable<Ibm[]>;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnInit(): void {
    this.itemsSelected$ = this.store$.pipe(
      select(IbmStoreSelectors.selectItemsSelected)
    );
  }

  onEditMany(values: Ibm[]): void {
    const items = values.map(value => {
      const keys = Object.keys(value);
      const result = {...value};
      keys.forEach(key => {
        if (key !== 'id' && typeof result[key] === 'string') {
          result[key] = result[key] + ' edited' + new Date().getSeconds();
        }
      });
      return result;
    });
    this.store$.dispatch(IbmStoreActions.EditManyRequest({items}));
  }

}
