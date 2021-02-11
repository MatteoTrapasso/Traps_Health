import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {CarStoreActions, CarStoreSelectors, RootStoreState} from '@root-store/index';
import {Car} from '@models/vo/car';

@Component({
  selector: 'app-button-delete-car',
  template: `
    <button type="button" *ngLet="(itemsSelected$|async) as itemsSelected" pButton icon="pi pi-trash"
            label="Delete ({{itemsSelected.length}})" (click)="onDelete(itemsSelected)"
            [disabled]="!(itemsSelected.length > 0)"
            class="p-button-danger"></button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonDeleteCarComponent implements OnInit {

  itemsSelected$: Observable<Car[]>;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnInit(): void {
    this.itemsSelected$ = this.store$.pipe(
      select(CarStoreSelectors.selectItemsSelected)
    );
  }

  onDelete(items: Car[]): void {
    this.store$.dispatch(CarStoreActions.DeleteManyRequest({items}));
  }

}
