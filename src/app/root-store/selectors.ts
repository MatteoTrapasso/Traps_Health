import {StructureStoreSelectors} from '@root-store/structure-store';
import {MyprogressStoreSelectors} from '@root-store/myprogress-store';
import {MybodyStoreSelectors} from '@root-store/mybody-store';
import {IbmStoreSelectors} from '@root-store/ibm-store';
import {createSelectorFactory, defaultMemoize} from '@ngrx/store';

const customMemoizer = (aFn) => defaultMemoize(aFn, (a: any, b: any) => a === b);

export const selectError =
  createSelectorFactory(customMemoizer)(
StructureStoreSelectors.selectError,
MyprogressStoreSelectors.selectError,
MybodyStoreSelectors.selectError,
IbmStoreSelectors.selectError,
    (...args: string[]) => {
      console.log('selectError.args', args);
      return args.join('');
    }
  );

export const selectIsLoading =
  createSelectorFactory(customMemoizer)(
StructureStoreSelectors.selectIsLoading,
MyprogressStoreSelectors.selectIsLoading,
MybodyStoreSelectors.selectIsLoading,
IbmStoreSelectors.selectIsLoading,
    (...args: boolean[]) => {
      console.log('selectIsLoading.args', args);
      return args.find((value => value));
    }
  );

