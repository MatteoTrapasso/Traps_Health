import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';
import {Person} from '@models/vo/person';
import {PersonService} from '@services/person.service';
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
export class PersonStoreEffects {
    constructor(private readonly actions$: Actions, private readonly service: PersonService) {
    }

  searchRequestEffect$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.SearchRequest),
    searchCall<Person>(this.service),
    searchResponse<Person>(actions, {dispatchResponse: false}),
    searchCatchError<Person>(actions),
    repeat()
  ));

  deleteRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteRequest),
    deleteCall<Person>(this.service),
    deleteResponse<Person>(actions, Person, {dispatchResponse: false}),
    deleteCatchError<Person>(actions),
    repeat()
  ));

  deleteManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.DeleteManyRequest),
    deleteManyCall<Person>(this.service),
    deleteManyResponse<Person>(actions, Person, {dispatchResponse: false}),
    deleteManyCatchError<Person>(actions),
    repeat()
  ));

  createRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateRequest),
    createCall<Person>(this.service),
    createResponse<Person>(actions, {dispatchResponse: false}),
    createCatchError<Person>(actions),
    repeat()
  ));

  createManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.CreateManyRequest),
    createManyCall<Person>(this.service),
    createManyResponse<Person>(actions, {dispatchResponse: false}),
    createManyCatchError<Person>(actions),
    repeat()
  ));

  editRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditRequest),
    editCall<Person>(this.service),
    editResponse<Person>(actions, {dispatchResponse: false}),
    editCatchError<Person>(actions),
    repeat()
  ));

  editManyRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.EditManyRequest),
    editManyCall<Person>(this.service),
    editManyResponse<Person>(actions, {dispatchResponse: false}),
    editManyCatchError<Person>(actions),
    repeat()
  ));

  selectRequestEffect$: Observable<Action>  = createEffect(() => this.actions$.pipe(
    ofType(actions.SelectRequest),
    selectCall<Person>(this.service),
    selectResponse<Person>(actions, {dispatchResponse: false}),
    selectCatchError<Person>(actions),
    repeat()
  ));

}
