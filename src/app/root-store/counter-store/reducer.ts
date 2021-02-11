import {initialState} from './state';
import {createReducer, on} from '@ngrx/store';
import * as actions from './actions';

export const featureReducer = createReducer(initialState,
  on(actions.Increment, (state) => {
      console.log('actions.Increment');
      const quantity = state.quantity + 1;
      console.log('quantity', quantity);
      return {quantity};
    },
  ),
  on(actions.Decrement, (state) => {
      console.log('actions.Decrement');
      const quantity = state.quantity - 1;
      console.log('quantity', quantity);
      return {quantity};
    },
  ),
  on(actions.Reset, (state) => {
      console.log('actions.Reset');
      const quantity = 0;
      console.log('quantity', quantity);
      return {quantity};
    },
  ),
);
