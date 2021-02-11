import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {Car} from '@models/vo/car';

export const adapter: EntityCrudAdapter<Car> = createCrudEntityAdapter<Car>({
	selectId: model => Car.selectId(model),
});

export interface State extends EntityCrudState<Car> {
};

export const initialState: State = adapter.getInitialCrudState();
