import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {Ibm} from '@models/vo/ibm';

export const adapter: EntityCrudAdapter<Ibm> = createCrudEntityAdapter<Ibm>({
	selectId: model => Ibm.selectId(model),
});

export interface State extends EntityCrudState<Ibm> {
};

export const initialState: State = adapter.getInitialCrudState();
