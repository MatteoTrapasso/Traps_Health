import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {MybodyStoreActions, MybodyStoreSelectors, RootStoreState} from '@root-store/index';
import {Observable} from 'rxjs';
import {Mybody} from '@models/vo/mybody';
import {RouterStoreActions} from '@root-store/router-store/index';
import {tap} from 'rxjs/operators';
import {ConfirmationService} from 'primeng/api';
import {PopUpData} from '@root-store/router-store/pop-up-base.component';

@Component({
  selector: 'app-mybody-list',
  templateUrl: `mybody-list.component.html`,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MybodyListComponent implements OnInit {


  collection$: Observable<Mybody[]>;
  cols: any;
  itemsSelected$: Observable<Mybody[]>;

  constructor(private store$: Store<RootStoreState.State>,
              private confirmationService: ConfirmationService) {
    console.log('MybodyListComponent.constructor()');
  }

  ngOnInit(): void {
    console.log('MybodyListComponent.ngOnInit()');

    this.itemsSelected$ = this.store$.pipe(
      select(MybodyStoreSelectors.selectItemsSelected)
    );

    this.collection$ = this.store$.select(
      MybodyStoreSelectors.selectAll
    ).pipe(
      tap(values => {
        if (values && values.length > 0) {
          this.cols = Object.keys(values[0]);
        }
      })
    );

    this.store$.dispatch(
      MybodyStoreActions.SearchRequest({queryParams: {}})
    );

  }

  onEdit(item): void {
    console.log('MybodyListComponent.onEdit()');

    const data: PopUpData<Mybody> = {
      item,
      props: {title: 'Edit Mybody', route: 'mybody'}
    };

    // apro la popUP
    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['mybody', {outlets: {popUp: ['edit']}}],
      data
    }));

  }

  onCopy(value): void {
    console.log('MybodyListComponent.onCopy()');

    const item = {...{}, ...value, ...{id: null}};
    const data: PopUpData<Mybody> = {
      item,
      props: {title: 'Copy Mybody', route: 'mybody'}
    };

    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['mybody', {outlets: {popUp: ['edit']}}],
      data
    }));

  }

  onDelete(item): void {

    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        this.store$.dispatch(MybodyStoreActions.DeleteRequest({item}));
      }
    });

  }

  onSelectionChange(items: Mybody[]): void {
    console.log('MybodyListComponent.onSelectionChange()');
    console.log('items', items);
    this.store$.dispatch(MybodyStoreActions.SelectItems({items}));
  }

}
