import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {MyprogressStoreActions, MyprogressStoreSelectors, RootStoreState} from '@root-store/index';
import {Observable} from 'rxjs';
import {Myprogress} from '@models/vo/myprogress';
import {RouterStoreActions} from '@root-store/router-store/index';
import {tap} from 'rxjs/operators';
import {ConfirmationService} from 'primeng/api';
import {PopUpData} from '@root-store/router-store/pop-up-base.component';

@Component({
  selector: 'app-myprogress-list',
  templateUrl: `myprogress-list.component.html`,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyprogressListComponent implements OnInit {


  collection$: Observable<Myprogress[]>;
  cols: any;
  itemsSelected$: Observable<Myprogress[]>;

  constructor(private store$: Store<RootStoreState.State>,
              private confirmationService: ConfirmationService) {
    console.log('MyprogressListComponent.constructor()');
  }

  ngOnInit(): void {
    console.log('MyprogressListComponent.ngOnInit()');

    this.itemsSelected$ = this.store$.pipe(
      select(MyprogressStoreSelectors.selectItemsSelected)
    );

    this.collection$ = this.store$.select(
      MyprogressStoreSelectors.selectAll
    ).pipe(
      tap(values => {
        if (values && values.length > 0) {
          this.cols = Object.keys(values[0]);
        }
      })
    );

    this.store$.dispatch(
      MyprogressStoreActions.SearchRequest({queryParams: {}})
    );

  }

  onEdit(item): void {
    console.log('MyprogressListComponent.onEdit()');

    const data: PopUpData<Myprogress> = {
      item,
      props: {title: 'Edit Myprogress', route: 'myprogress'}
    };

    // apro la popUP
    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['myprogress', {outlets: {popUp: ['edit']}}],
      data
    }));

  }

  onCopy(value): void {
    console.log('MyprogressListComponent.onCopy()');

    const item = {...{}, ...value, ...{id: null}};
    const data: PopUpData<Myprogress> = {
      item,
      props: {title: 'Copy Myprogress', route: 'myprogress'}
    };

    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['myprogress', {outlets: {popUp: ['edit']}}],
      data
    }));

  }

  onDelete(item): void {

    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        this.store$.dispatch(MyprogressStoreActions.DeleteRequest({item}));
      }
    });

  }

  onSelectionChange(items: Myprogress[]): void {
    console.log('MyprogressListComponent.onSelectionChange()');
    console.log('items', items);
    this.store$.dispatch(MyprogressStoreActions.SelectItems({items}));
  }

}
