import {InjectionToken, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActionReducer, StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {IbmStoreEffects} from './effects';
import {featureReducer} from './reducer';
import {State} from './state';
import {Names} from './names';

export const INJECTION_TOKEN = new InjectionToken<ActionReducer<State>>(`${Names.NAME}-store Reducers`);

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(Names.NAME, INJECTION_TOKEN),
    EffectsModule.forFeature([IbmStoreEffects]),
  ],
  declarations: [],
  providers: [IbmStoreEffects,
    {
      provide: INJECTION_TOKEN,
      useFactory: (): ActionReducer<State> => featureReducer
    }]
})
export class IbmStoreModule {
}
