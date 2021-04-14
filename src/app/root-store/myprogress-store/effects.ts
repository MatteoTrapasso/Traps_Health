import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {Myprogress} from '@models/vo/myprogress';
import {MyprogressService} from '@services/myprogress.service';
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
export class MyprogressStoreEffects {
    constructor(private readonly actions$: Actions, private readonly service: MyprogressService) {
    }

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest),
    searchCall<Myprogress>(this.service),
    searchResponse<Myprogress>(actions, {dispatchResponse: false}),
    searchCatchError<Myprogress>(actions),
    repeat()
  ));

  deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<Myprogress>(this.service),
    deleteResponse<Myprogress>(actions, Myprogress, {dispatchResponse: false}),
    deleteCatchError<Myprogress>(actions),
    repeat()
  ));

  deleteManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteManyRequest),
    deleteManyCall<Myprogress>(this.service),
    deleteManyResponse<Myprogress>(actions, Myprogress, {dispatchResponse: false}),
    deleteManyCatchError<Myprogress>(actions),
    repeat()
  ));

  createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<Myprogress>(this.service),
    createResponse<Myprogress>(actions, {dispatchResponse: false}),
    createCatchError<Myprogress>(actions),
    repeat()
  ));

  createManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateManyRequest),
    createManyCall<Myprogress>(this.service),
    createManyResponse<Myprogress>(actions, {dispatchResponse: false}),
    createManyCatchError<Myprogress>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<Myprogress>(this.service),
    editResponse<Myprogress>(actions, {dispatchResponse: false}),
    editCatchError<Myprogress>(actions),
    repeat()
  ));

  editManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditManyRequest),
    editManyCall<Myprogress>(this.service),
    editManyResponse<Myprogress>(actions, {dispatchResponse: false}),
    editManyCatchError<Myprogress>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<Myprogress>(this.service),
    selectResponse<Myprogress>(actions, {dispatchResponse: false}),
    selectCatchError<Myprogress>(actions),
    repeat()
  ));

}
