import {InjectionToken, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActionReducer, StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {CalculatorStoreEffects} from './effects';
import {featureReducer} from './reducer';
import {Calculator} from '@models/vo/calculator';
import {Names} from './names';

export const INJECTION_TOKEN = new InjectionToken<ActionReducer<Calculator>>(`${Names.NAME}-store Reducers`);

@NgModule({
	imports: [
		CommonModule,
		StoreModule.forFeature(Names.NAME, INJECTION_TOKEN),
		EffectsModule.forFeature([CalculatorStoreEffects]),
	],
	declarations: [],
	providers: [CalculatorStoreEffects,
		{
			provide: INJECTION_TOKEN,
			useFactory: (): ActionReducer<Calculator> => featureReducer
		}]
})
export class CalculatorStoreModule {
}
