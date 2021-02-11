import {Auth} from '@models/vo/auth';
import {CoinStoreState} from '@root-store/coin-store';
import {SlideMenuStoreState} from '@root-store/slide-menu-store';

export interface State {
auth:Auth;
coin:CoinStoreState.State;
  slide_menu: SlideMenuStoreState.State;
}
