import {StructureStoreSelectors} from '@root-store/structure-store';
import {CarStoreSelectors} from '@root-store/car-store';
import {PersonStoreSelectors} from '@root-store/person-store';
import {CoinStoreSelectors} from '@root-store/coin-store';
import {createSelectorFactory, defaultMemoize} from '@ngrx/store';

const customMemoizer = (aFn) => defaultMemoize(aFn, (a: any, b: any) => a === b);

export const selectError =
  createSelectorFactory(customMemoizer)(StructureStoreSelectors.selectError,CarStoreSelectors.selectError,PersonStoreSelectors.selectError,CoinStoreSelectors.selectError,
    (...args: string[]) => {
      console.log('selectError.args', args);
      return args.join('');
    }
  );

export const selectIsLoading =
  createSelectorFactory(customMemoizer)(StructureStoreSelectors.selectIsLoading,CarStoreSelectors.selectIsLoading,PersonStoreSelectors.selectIsLoading,CoinStoreSelectors.selectIsLoading,
    (...args: boolean[]) => {
      console.log('selectIsLoading.args', args);
      return args.find((value => value));
    }
  );

