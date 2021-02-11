import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {StructureStoreActions, StructureStoreSelectors, RootStoreState} from '@root-store/index';
import {Structure} from '@models/vo/structure';

@Component({
  selector: 'app-button-delete-structure',
  template: `
    <button type="button" *ngLet="(itemsSelected$|async) as itemsSelected" pButton icon="pi pi-trash"
            label="Delete ({{itemsSelected.length}})" (click)="onDelete(itemsSelected)"
            [disabled]="!(itemsSelected.length > 0)"
            class="p-button-danger"></button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonDeleteStructureComponent implements OnInit {

  itemsSelected$: Observable<Structure[]>;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnInit(): void {
    this.itemsSelected$ = this.store$.pipe(
      select(StructureStoreSelectors.selectItemsSelected)
    );
  }

  onDelete(items: Structure[]): void {
    this.store$.dispatch(StructureStoreActions.DeleteManyRequest({items}));
  }

}
