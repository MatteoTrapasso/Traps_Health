import {StructureStoreState} from '@root-store/structure-store';
import {MyprogressStoreState} from '@root-store/myprogress-store';
import {MybodyStoreState} from '@root-store/mybody-store';
import {Counter} from '@models/vo/counter';
import {Auth} from '@models/vo/auth';
import {IbmStoreState} from '@root-store/ibm-store';
import {SlideMenuStoreState} from '@root-store/slide-menu-store';

export interface State {
structure:StructureStoreState.State;
myprogress:MyprogressStoreState.State;
mybody:MybodyStoreState.State;
counter:Counter;
auth:Auth;
ibm:IbmStoreState.State;
  slide_menu: SlideMenuStoreState.State;
}
