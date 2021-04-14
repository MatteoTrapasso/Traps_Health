import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {Mybody} from '@models/vo/mybody';
import {MybodyService} from '@services/mybody.service';
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
export class MybodyStoreEffects {
    constructor(private readonly actions$: Actions, private readonly service: MybodyService) {
    }

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest),
    searchCall<Mybody>(this.service),
    searchResponse<Mybody>(actions, {dispatchResponse: false}),
    searchCatchError<Mybody>(actions),
    repeat()
  ));

  deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<Mybody>(this.service),
    deleteResponse<Mybody>(actions, Mybody, {dispatchResponse: false}),
    deleteCatchError<Mybody>(actions),
    repeat()
  ));

  deleteManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteManyRequest),
    deleteManyCall<Mybody>(this.service),
    deleteManyResponse<Mybody>(actions, Mybody, {dispatchResponse: false}),
    deleteManyCatchError<Mybody>(actions),
    repeat()
  ));

  createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<Mybody>(this.service),
    createResponse<Mybody>(actions, {dispatchResponse: false}),
    createCatchError<Mybody>(actions),
    repeat()
  ));

  createManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateManyRequest),
    createManyCall<Mybody>(this.service),
    createManyResponse<Mybody>(actions, {dispatchResponse: false}),
    createManyCatchError<Mybody>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<Mybody>(this.service),
    editResponse<Mybody>(actions, {dispatchResponse: false}),
    editCatchError<Mybody>(actions),
    repeat()
  ));

  editManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditManyRequest),
    editManyCall<Mybody>(this.service),
    editManyResponse<Mybody>(actions, {dispatchResponse: false}),
    editManyCatchError<Mybody>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<Mybody>(this.service),
    selectResponse<Mybody>(actions, {dispatchResponse: false}),
    selectCatchError<Mybody>(actions),
    repeat()
  ));

}
