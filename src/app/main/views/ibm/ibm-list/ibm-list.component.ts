import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {IbmStoreActions, IbmStoreSelectors, RootStoreState} from '@root-store/index';
import {Observable} from 'rxjs';
import {Ibm} from '@models/vo/ibm';
import {RouterStoreActions} from '@root-store/router-store/index';
import {tap} from 'rxjs/operators';
import {ConfirmationService} from 'primeng/api';
import {PopUpData} from '@root-store/router-store/pop-up-base.component';

@Component({
  selector: 'app-ibm-list',
  templateUrl: `ibm-list.component.html`,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IbmListComponent implements OnInit {

  collection$: Observable<Ibm[]>;

  constructor(private store$: Store<RootStoreState.State>,
              private confirmationService: ConfirmationService) {
    console.log('IbmListComponent.constructor()');
  }

  ngOnInit(): void {
    console.log('IbmListComponent.ngOnInit()');
    this.collection$ = this.store$.select(IbmStoreSelectors.selectAll);
    this.store$.dispatch(
      IbmStoreActions.SearchRequest({queryParams: {}})
    );
  }

  onEdit(item): void {
    console.log('IbmListComponent.onEdit()');

    const data: PopUpData<Ibm> = {
      item,
      props: {title: 'Edit Ibm', route: 'ibm'}
    };

    // apro la popUP
    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['ibm', {outlets: {popUp: ['edit']}}],
      data
    }));

  }

  onCopy(value): void {
    console.log('IbmListComponent.onCopy()');

    const item = {...{}, ...value, ...{id: null}};
    const data: PopUpData<Ibm> = {
      item,
      props: {title: 'Copy Ibm', route: 'ibm'}
    };

    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['ibm', {outlets: {popUp: ['edit']}}],
      data
    }));

  }

  onDelete(item): void {

    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        this.store$.dispatch(IbmStoreActions.DeleteRequest({item}));
      }
    });

  }

  onSelectionChange(items: Ibm[]): void {
    console.log('IbmListComponent.onSelectionChange()');
    console.log('items', items);
    this.store$.dispatch(IbmStoreActions.SelectItems({items}));
  }

}
