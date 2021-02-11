import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {Car} from '@models/vo/car';
import {CarService} from '@services/car.service';
import {
  createCall, createCatchError, createResponse,
  createManyCall, createManyCatchError, createManyResponse,
  deleteCall, deleteCatchError, deleteResponse,
  deleteManyCall, deleteManyCatchError, deleteManyResponse,
  editCall, editCatchError, editResponse,
  editManyCall, editManyCatchError, editManyResponse,
  searchCall, searchCatchError, searchResponse,
  selectCall, selectCatchError, selectResponse
} from 'ngrx-entity-crud';
import {repeat} from 'rxjs/operators';

@Injectable()
export class CarStoreEffects {
    constructor(private readonly actions$: Actions, private readonly service: CarService) {
    }

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest),
    searchCall<Car>(this.service),
    searchResponse<Car>(actions, {dispatchResponse: false}),
    searchCatchError<Car>(actions),
    repeat()
  ));

  deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<Car>(this.service),
    deleteResponse<Car>(actions, Car, {dispatchResponse: false}),
    deleteCatchError<Car>(actions),
    repeat()
  ));

  deleteManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteManyRequest),
    deleteManyCall<Car>(this.service),
    deleteManyResponse<Car>(actions, Car, {dispatchResponse: false}),
    deleteManyCatchError<Car>(actions),
    repeat()
  ));

  createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<Car>(this.service),
    createResponse<Car>(actions, {dispatchResponse: false}),
    createCatchError<Car>(actions),
    repeat()
  ));

  createManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateManyRequest),
    createManyCall<Car>(this.service),
    createManyResponse<Car>(actions, {dispatchResponse: false}),
    createManyCatchError<Car>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<Car>(this.service),
    editResponse<Car>(actions, {dispatchResponse: false}),
    editCatchError<Car>(actions),
    repeat()
  ));

  editManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditManyRequest),
    editManyCall<Car>(this.service),
    editManyResponse<Car>(actions, {dispatchResponse: false}),
    editManyCatchError<Car>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<Car>(this.service),
    selectResponse<Car>(actions, {dispatchResponse: false}),
    selectCatchError<Car>(actions),
    repeat()
  ));

}
