import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IbmEditComponent} from './ibm-edit/ibm-edit.component';
import {IbmMainComponent} from './ibm-main/ibm-main.component';
import {IbmListComponent} from './ibm-list/ibm-list.component';
import {IbmRoutingModule} from './ibm-routing.module';
import {ButtonNewIbmComponent} from './components/button-new-ibm.component';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {SearchModule} from '@components/search/search.module';
import {PipesModule} from '@core/pipe/pipes.module';
import {ButtonDeleteIbmComponent} from './components/button-delete-ibm.component';
import {ButtonEditManyTestIbmComponent} from './components/button-edit-many-test-ibm.component';
import {ButtonCreateManyTestIbmComponent} from './components/button-create-many-test-ibm.component';
import {NgLetModule} from '@core/directive/ng-let.directive';
import {ToolbarModule} from 'primeng/toolbar';
import {FormErrorMsgModule} from '../../../core/components/form-error-msg/form-error-msg.module';
import {CounterModule} from '../counter/counter.module';
import {CalculatorModule} from '../calculator/calculator.module';

@NgModule({
  declarations: [
    IbmEditComponent,
    IbmMainComponent,
    IbmListComponent,
    ButtonNewIbmComponent,
    ButtonDeleteIbmComponent,
    ButtonEditManyTestIbmComponent,
    ButtonCreateManyTestIbmComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IbmRoutingModule,
    TableModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    PipesModule,
    SearchModule,
    NgLetModule,
    ToolbarModule,
    FormErrorMsgModule,
    CounterModule,
    CalculatorModule
  ],
  providers: [],
  entryComponents: []
})
export class IbmModule {
}
