import {Calculator} from '@models/vo/calculator';
import {StructureStoreState} from '@root-store/structure-store';
import {CarStoreState} from '@root-store/car-store';
import {PersonStoreState} from '@root-store/person-store';
import {Counter} from '@models/vo/counter';
import {Auth} from '@models/vo/auth';
import {IbmStoreState} from '@root-store/ibm-store';
import {SlideMenuStoreState} from '@root-store/slide-menu-store';

export interface State {
calculator:Calculator;
structure:StructureStoreState.State;
car:CarStoreState.State;
person:PersonStoreState.State;
counter:Counter;
auth:Auth;
ibm:IbmStoreState.State;
  slide_menu: SlideMenuStoreState.State;
}
