import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {Mybody} from '@models/vo/mybody';

export const adapter: EntityCrudAdapter<Mybody> = createCrudEntityAdapter<Mybody>({
	selectId: model => Mybody.selectId(model),
});

export interface State extends EntityCrudState<Mybody> {
};

export const initialState: State = adapter.getInitialCrudState();
