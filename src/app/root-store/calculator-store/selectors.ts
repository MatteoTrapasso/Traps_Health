import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';
import {Names} from './names';
import {Calculator} from '@models/vo/calculator';

const getValueA = (state: Calculator): string => state.valueA;
const getValueB = (state: Calculator): string => state.valueB;

export const selectState: MemoizedSelector<object, Calculator> = createFeatureSelector<Calculator>(Names.NAME);

export const selectValueA: MemoizedSelector<object, string> = createSelector(
  selectState,
  getValueA
);

export const selectValueB: MemoizedSelector<object, string> = createSelector(
  selectState,
  getValueB
);
