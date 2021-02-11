import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {PersonStoreActions, PersonStoreSelectors, RootStoreState} from '@root-store/index';
import {Person} from '@models/vo/person';

@Component({
  selector: 'app-button-delete-person',
  template: `
    <button type="button" *ngLet="(itemsSelected$|async) as itemsSelected" pButton icon="pi pi-trash"
            label="Delete ({{itemsSelected.length}})" (click)="onDelete(itemsSelected)"
            [disabled]="!(itemsSelected.length > 0)"
            class="p-button-danger"></button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonDeletePersonComponent implements OnInit {

  itemsSelected$: Observable<Person[]>;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnInit(): void {
    this.itemsSelected$ = this.store$.pipe(
      select(PersonStoreSelectors.selectItemsSelected)
    );
  }

  onDelete(items: Person[]): void {
    this.store$.dispatch(PersonStoreActions.DeleteManyRequest({items}));
  }

}
