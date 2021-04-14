import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {metaReducers, reducers} from '@root-store/root-reducer';
import {RouterStoreModule} from './router-store';
import {environment} from '../../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {SlideMenuStoreModule} from '@root-store/slide-menu-store';
import { IbmStoreModule } from '@root-store/ibm-store';
import { AuthStoreModule } from '@root-store/auth-store';
import { CounterStoreModule } from '@root-store/counter-store';
import { MybodyStoreModule } from '@root-store/mybody-store';
import { MyprogressStoreModule } from '@root-store/myprogress-store';
import { StructureStoreModule } from '@root-store/structure-store';
import { CalculatorStoreModule } from '@root-store/calculator-store';

@NgModule({
  imports: [
    CommonModule,
    RouterStoreModule,
    SlideMenuStoreModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {strictStateImmutability: true, strictActionImmutability: true}
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    IbmStoreModule,
    AuthStoreModule,
    CounterStoreModule,
    MybodyStoreModule,
    MyprogressStoreModule,
    StructureStoreModule,
    CalculatorStoreModule,
  ],
  declarations: []
})
export class RootStoreModule {
}
