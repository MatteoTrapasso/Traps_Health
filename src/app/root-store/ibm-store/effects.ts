import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {Ibm} from '@models/vo/ibm';
import {IbmService} from '@services/ibm.service';
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
export class IbmStoreEffects {
    constructor(private readonly actions$: Actions, private readonly service: IbmService) {
    }

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest),
    searchCall<Ibm>(this.service),
    searchResponse<Ibm>(actions, {dispatchResponse: false}),
    searchCatchError<Ibm>(actions),
    repeat()
  ));

  deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<Ibm>(this.service),
    deleteResponse<Ibm>(actions, Ibm, {dispatchResponse: false}),
    deleteCatchError<Ibm>(actions),
    repeat()
  ));

  deleteManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteManyRequest),
    deleteManyCall<Ibm>(this.service),
    deleteManyResponse<Ibm>(actions, Ibm, {dispatchResponse: false}),
    deleteManyCatchError<Ibm>(actions),
    repeat()
  ));

  createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<Ibm>(this.service),
    createResponse<Ibm>(actions, {dispatchResponse: false}),
    createCatchError<Ibm>(actions),
    repeat()
  ));

  createManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateManyRequest),
    createManyCall<Ibm>(this.service),
    createManyResponse<Ibm>(actions, {dispatchResponse: false}),
    createManyCatchError<Ibm>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<Ibm>(this.service),
    editResponse<Ibm>(actions, {dispatchResponse: false}),
    editCatchError<Ibm>(actions),
    repeat()
  ));

  editManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditManyRequest),
    editManyCall<Ibm>(this.service),
    editManyResponse<Ibm>(actions, {dispatchResponse: false}),
    editManyCatchError<Ibm>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<Ibm>(this.service),
    selectResponse<Ibm>(actions, {dispatchResponse: false}),
    selectCatchError<Ibm>(actions),
    repeat()
  ));

}
