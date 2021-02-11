import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {CarStoreActions, CarStoreSelectors, RootStoreState} from '@root-store/index';
import {Observable} from 'rxjs';
import {Car} from '@models/vo/car';
import {RouterStoreActions} from '@root-store/router-store/index';
import {tap} from 'rxjs/operators';
import {ConfirmationService} from 'primeng/api';
import {PopUpData} from '@root-store/router-store/pop-up-base.component';

@Component({
  selector: 'app-car-list',
  templateUrl: `car-list.component.html`,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarListComponent implements OnInit {


  collection$: Observable<Car[]>;
  cols: any;
  itemsSelected$: Observable<Car[]>;

  constructor(private store$: Store<RootStoreState.State>,
              private confirmationService: ConfirmationService) {
    console.log('CarListComponent.constructor()');
  }

  ngOnInit(): void {
    console.log('CarListComponent.ngOnInit()');

    this.itemsSelected$ = this.store$.pipe(
      select(CarStoreSelectors.selectItemsSelected)
    );

    this.collection$ = this.store$.select(
      CarStoreSelectors.selectAll
    ).pipe(
      tap(values => {
        if (values && values.length > 0) {
          this.cols = Object.keys(values[0]);
        }
      })
    );

    this.store$.dispatch(
      CarStoreActions.SearchRequest({queryParams: {}})
    );

  }

  onEdit(item): void {
    console.log('CarListComponent.onEdit()');

    const data: PopUpData<Car> = {
      item,
      props: {title: 'Edit Car', route: 'car'}
    };

    // apro la popUP
    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['car', {outlets: {popUp: ['edit']}}],
      data
    }));

  }

  onCopy(value): void {
    console.log('CarListComponent.onCopy()');

    const item = {...{}, ...value, ...{id: null}};
    const data: PopUpData<Car> = {
      item,
      props: {title: 'Copy Car', route: 'car'}
    };

    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['car', {outlets: {popUp: ['edit']}}],
      data
    }));

  }

  onDelete(item): void {

    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        this.store$.dispatch(CarStoreActions.DeleteRequest({item}));
      }
    });

  }

  onSelectionChange(items: Car[]): void {
    console.log('CarListComponent.onSelectionChange()');
    console.log('items', items);
    this.store$.dispatch(CarStoreActions.SelectItems({items}));
  }

}
