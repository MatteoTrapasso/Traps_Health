import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CalculatorEditComponent} from './calculator-edit/calculator-edit.component';
import {CalculatorMainComponent} from './calculator-main/calculator-main.component';
import {CalculatorListComponent} from './calculator-list/calculator-list.component';
import {CalculatorRoutingModule} from './calculator-routing.module';

@NgModule({
  declarations: [
    CalculatorEditComponent,
    CalculatorMainComponent,
    CalculatorListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CalculatorRoutingModule
  ],
  providers: [],
  exports: [
    CalculatorMainComponent
  ],
  entryComponents: []
})
export class CalculatorModule {
}
