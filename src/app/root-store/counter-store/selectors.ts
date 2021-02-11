import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';
import {Names} from './names';
import {Counter} from '@models/vo/counter';

const getQuantity = (state: Counter): number => state.quantity;

export const selectState: MemoizedSelector<object, Counter> = createFeatureSelector<Counter>(Names.NAME);

export const selecQuantity: MemoizedSelector<object, number> = createSelector(
  selectState,
  getQuantity
);
