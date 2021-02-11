import {createAction, props} from '@ngrx/store';

export enum ActionTypes {
  INCREMENT = '[Counter] increment',
  CHANGE_B = '[Counter] Change b',
  DECREMENT = '[Counter] decrement',
  RESET = '[Counter] reset',

}
export const Increment = createAction(ActionTypes.INCREMENT);
export const ChangeB = createAction(ActionTypes.CHANGE_B, props<{ valueB: string }>());
export const Decrement = createAction(ActionTypes.DECREMENT);
export const Reset = createAction(ActionTypes.RESET);
