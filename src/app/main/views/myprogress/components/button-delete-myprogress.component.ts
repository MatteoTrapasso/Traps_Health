import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {MyprogressStoreActions, MyprogressStoreSelectors, RootStoreState} from '@root-store/index';
import {Myprogress} from '@models/vo/myprogress';

@Component({
  selector: 'app-button-delete-myprogress',
  template: `
    <button type="button" *ngLet="(itemsSelected$|async) as itemsSelected" pButton icon="pi pi-trash"
            label="Delete ({{itemsSelected.length}})" (click)="onDelete(itemsSelected)"
            [disabled]="!(itemsSelected.length > 0)"
            class="p-button-danger"></button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonDeleteMyprogressComponent implements OnInit {

  itemsSelected$: Observable<Myprogress[]>;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnInit(): void {
    this.itemsSelected$ = this.store$.pipe(
      select(MyprogressStoreSelectors.selectItemsSelected)
    );
  }

  onDelete(items: Myprogress[]): void {
    this.store$.dispatch(MyprogressStoreActions.DeleteManyRequest({items}));
  }

}
