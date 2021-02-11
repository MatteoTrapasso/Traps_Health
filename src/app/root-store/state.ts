import {Counter} from '@models/vo/counter';
import {Auth} from '@models/vo/auth';
import {CoinStoreState} from '@root-store/coin-store';
import {SlideMenuStoreState} from '@root-store/slide-menu-store';

export interface State {
counter:Counter;
auth:Auth;
coin:CoinStoreState.State;
  slide_menu: SlideMenuStoreState.State;
}
