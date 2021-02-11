import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {Structure} from '@models/vo/structure';

export const adapter: EntityCrudAdapter<Structure> = createCrudEntityAdapter<Structure>({
	selectId: model => Structure.selectId(model),
});

export interface State extends EntityCrudState<Structure> {
};

export const initialState: State = adapter.getInitialCrudState();
