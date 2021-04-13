import {adapter} from './state';
import {Names} from './names';

export const actions = adapter.createCrudActions(Names.NAME);

export const {
  Response,
  ResetResponses,
  /**
   * azione utilizzata per eseguire delle ricerche asincrone
   * parametri necessari:
   *  ...
   */
  SearchRequest,
  SearchFailure,
  SearchSuccess,

  DeleteRequest,
  DeleteFailure,
  DeleteSuccess,

  DeleteManyRequest,
  DeleteManyFailure,
  DeleteManySuccess,

  CreateRequest,
  CreateFailure,
  CreateSuccess,

  CreateManyRequest,
  CreateManyFailure,
  CreateManySuccess,

  SelectRequest,
  SelectFailure,
  SelectSuccess,

  EditRequest,
  EditFailure,
  EditSuccess,

  EditManyRequest,
  EditManyFailure,
  EditManySuccess,

  Reset, //reset store
  Filters, //filtra i dati
  SelectItems, //indica allo store gruppo elementi che si vuole selezionare
  SelectItem, //indica un elemento ...
  Edit, //modifica elemento senza chiamata
  Create, //crea elemento
  Delete, //elimina elemento
} = actions;



