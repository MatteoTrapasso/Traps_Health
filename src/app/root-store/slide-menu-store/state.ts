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
    label: 'Login',
    icon: 'pi pi-fw pi-user-plus',
    // @ts-ignore
    roles: ['guest'],
    command: (event$) => {
      // invoco il router per cambiare pagina
      event$.item.store$.dispatch(RouterStoreActions.RouterGo({path: ['login']}));

      // salvo nello store del menù l'elemento selezionato.
      event$.item.store$.dispatch(SlideMenuStoreActions.Select({
        item: {
          data: {},
          breadcrumb: ['Sezione ', 'Login'] // breadcrumb
        }
      }));
    }
  },
    {
    label: 'Ibm',
    icon: 'pi pi-fw pi-user-plus',
    // @ts-ignore
    roles: ['roleA', 'guest'],
    command: (event$) => {
      // invoco il router per cambiare pagina
      event$.item.store$.dispatch(RouterStoreActions.RouterGo({path: ['ibm']}));

      // salvo nello store del menù l'elemento selezionato.
      event$.item.store$.dispatch(SlideMenuStoreActions.Select({
        item: {
          data: {},
          breadcrumb: ['Sezione ', 'Ibm'] // breadcrumb
        }
      }));
    }
  },
    {
      label: 'Mybody',
      icon: 'pi pi-fw pi-user-plus',
      // @ts-ignore
      roles: ['roleA'],
      command: (event$) => {
        // invoco il router per cambiare pagina
        event$.item.store$.dispatch(RouterStoreActions.RouterGo({path: ['mybody']}));

        // salvo nello store del menù l'elemento selezionato.
        event$.item.store$.dispatch(SlideMenuStoreActions.Select({
          item: {
            data: {},
            breadcrumb: ['Sezione ', 'Mybody'] // breadcrumb
          }
        }));
      }
    },
    {
      label: 'Myprogress',
      icon: 'pi pi-fw pi-user-plus',
      // @ts-ignore
      roles: ['roleA'],
      command: (event$) => {
        // invoco il router per cambiare pagina
        event$.item.store$.dispatch(RouterStoreActions.RouterGo({path: ['myprogress']}));

        // salvo nello store del menù l'elemento selezionato.
        event$.item.store$.dispatch(SlideMenuStoreActions.Select({
          item: {
            data: {},
            breadcrumb: ['Sezione ', 'Myprogress'] // breadcrumb
          }
        }));
      }
    },
    {
      label: 'Structure',
      icon: 'pi pi-fw pi-user-plus',
      // @ts-ignore
      roles: ['roleA'],
      command: (event$) => {
        // invoco il router per cambiare pagina
        event$.item.store$.dispatch(RouterStoreActions.RouterGo({path: ['structure']}));

        // salvo nello store del menù l'elemento selezionato.
        event$.item.store$.dispatch(SlideMenuStoreActions.Select({
          item: {
            data: {},
            breadcrumb: ['Sezione ', 'Structure'] // breadcrumb
          }
        }));
      }
    }
  ]
};
