import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {Structure} from '@models/vo/structure';
import {StructureService} from '@services/structure.service';
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
export class StructureStoreEffects {
    constructor(private readonly actions$: Actions, private readonly service: StructureService) {
    }

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest),
    searchCall<Structure>(this.service),
    searchResponse<Structure>(actions, {dispatchResponse: false}),
    searchCatchError<Structure>(actions),
    repeat()
  ));

  deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<Structure>(this.service),
    deleteResponse<Structure>(actions, Structure, {dispatchResponse: false}),
    deleteCatchError<Structure>(actions),
    repeat()
  ));

  deleteManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteManyRequest),
    deleteManyCall<Structure>(this.service),
    deleteManyResponse<Structure>(actions, Structure, {dispatchResponse: false}),
    deleteManyCatchError<Structure>(actions),
    repeat()
  ));

  createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<Structure>(this.service),
    createResponse<Structure>(actions, {dispatchResponse: false}),
    createCatchError<Structure>(actions),
    repeat()
  ));

  createManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateManyRequest),
    createManyCall<Structure>(this.service),
    createManyResponse<Structure>(actions, {dispatchResponse: false}),
    createManyCatchError<Structure>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<Structure>(this.service),
    editResponse<Structure>(actions, {dispatchResponse: false}),
    editCatchError<Structure>(actions),
    repeat()
  ));

  editManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditManyRequest),
    editManyCall<Structure>(this.service),
    editManyResponse<Structure>(actions, {dispatchResponse: false}),
    editManyCatchError<Structure>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<Structure>(this.service),
    selectResponse<Structure>(actions, {dispatchResponse: false}),
    selectCatchError<Structure>(actions),
    repeat()
  ));

}
