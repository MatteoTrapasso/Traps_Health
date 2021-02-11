import {SlideMenuItem} from '@models/vo/slide-menu-item';
import {MenuItem} from 'primeng/api';
import * as RouterStoreActions from '@root-store/router-store/actions';
import * as SlideMenuStoreActions from '@root-store/slide-menu-store/actions';

export interface State {
  open: boolean;
  item: SlideMenuItem;
  items: MenuItem[];
}

export const initialState: State = {
  open: false,
  item: {breadcrumb: [], data: null},
  items: [{
    label: 'Coin',
    icon: 'pi pi-fw pi-user-plus',
    command: (event$) => {
      // invoco il router per cambiare pagina
      event$.item.store$.dispatch(RouterStoreActions.RouterGo({path: ['coin']}));

      // salvo nello store del menù l'elemento selezionato.
      event$.item.store$.dispatch(SlideMenuStoreActions.Select({
        item: {
          data: {},
          breadcrumb: ['Sezione ', 'Coin'] // breadcrumb
        }
      }));
    }
  }]
};
