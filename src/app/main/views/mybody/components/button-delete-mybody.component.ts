import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {MybodyStoreActions, MybodyStoreSelectors, RootStoreState} from '@root-store/index';
import {Mybody} from '@models/vo/mybody';

@Component({
  selector: 'app-button-delete-mybody',
  template: `
    <button type="button" *ngLet="(itemsSelected$|async) as itemsSelected" pButton icon="pi pi-trash"
            label="Delete ({{itemsSelected.length}})" (click)="onDelete(itemsSelected)"
            [disabled]="!(itemsSelected.length > 0)"
            class="p-button-danger"></button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonDeleteMybodyComponent implements OnInit {

  itemsSelected$: Observable<Mybody[]>;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnInit(): void {
    this.itemsSelected$ = this.store$.pipe(
      select(MybodyStoreSelectors.selectItemsSelected)
    );
  }

  onDelete(items: Mybody[]): void {
    this.store$.dispatch(MybodyStoreActions.DeleteManyRequest({items}));
  }

}
