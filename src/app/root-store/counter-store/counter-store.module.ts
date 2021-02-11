import {InjectionToken, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActionReducer, StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {CounterStoreEffects} from './effects';
import {featureReducer} from './reducer';
import {Counter} from '@models/vo/counter';
import {Names} from './names';

export const INJECTION_TOKEN = new InjectionToken<ActionReducer<Counter>>(`${Names.NAME}-store Reducers`);

@NgModule({
	imports: [
		CommonModule,
		StoreModule.forFeature(Names.NAME, INJECTION_TOKEN),
		EffectsModule.forFeature([CounterStoreEffects]),
	],
	declarations: [],
	providers: [CounterStoreEffects,
		{
			provide: INJECTION_TOKEN,
			useFactory: (): ActionReducer<Counter> => featureReducer
		}]
})
export class CounterStoreModule {
}
