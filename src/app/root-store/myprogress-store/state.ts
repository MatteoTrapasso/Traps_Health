import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {Myprogress} from '@models/vo/myprogress';

export const adapter: EntityCrudAdapter<Myprogress> = createCrudEntityAdapter<Myprogress>({
	selectId: model => Myprogress.selectId(model),
});

export interface State extends EntityCrudState<Myprogress> {
};

export const initialState: State = adapter.getInitialCrudState();
