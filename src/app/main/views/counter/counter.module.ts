import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CounterEditComponent} from './counter-edit/counter-edit.component';
import {CounterMainComponent} from './counter-main/counter-main.component';
import {CounterListComponent} from './counter-list/counter-list.component';
import {CounterRoutingModule} from './counter-routing.module';

@NgModule({
    declarations: [
        CounterEditComponent,
        CounterMainComponent,
        CounterListComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CounterRoutingModule
    ],
    providers: [],
  exports: [
    CounterListComponent,
    CounterEditComponent,
    CounterMainComponent
  ],
    entryComponents: []
})
export class CounterModule {
}
