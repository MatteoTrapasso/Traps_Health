import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {IbmStoreActions, IbmStoreSelectors, RootStoreState} from '@root-store/index';
import {Ibm} from '@models/vo/ibm';

@Component({
  selector: 'app-button-delete-ibm',
  template: `
    <button type="button" *ngLet="(itemsSelected$|async) as itemsSelected" pButton icon="pi pi-trash"
            label="Delete ({{itemsSelected.length}})" (click)="onDelete(itemsSelected)"
            [disabled]="!(itemsSelected.length > 0)"
            class="p-button-danger"></button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonDeleteIbmComponent implements OnInit {

  itemsSelected$: Observable<Ibm[]>;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnInit(): void {
    this.itemsSelected$ = this.store$.pipe(
      select(IbmStoreSelectors.selectItemsSelected)
    );
  }

  onDelete(items: Ibm[]): void {
    this.store$.dispatch(IbmStoreActions.DeleteManyRequest({items}));
  }

}
