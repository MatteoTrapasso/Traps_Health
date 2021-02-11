import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CarEditComponent} from './car-edit/car-edit.component';
import {CarMainComponent} from './car-main/car-main.component';
import {CarListComponent} from './car-list/car-list.component';
import {CarRoutingModule} from './car-routing.module';
import {ButtonNewCarComponent} from './components/button-new-car.component';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {SearchModule} from '@components/search/search.module';
import {PipesModule} from '@core/pipe/pipes.module';
import {ButtonDeleteCarComponent} from './components/button-delete-car.component';
import {ButtonEditManyTestCarComponent} from './components/button-edit-many-test-car.component';
import {ButtonCreateManyTestCarComponent} from './components/button-create-many-test-car.component';
import {NgLetModule} from '@core/directive/ng-let.directive';
import {ToolbarModule} from 'primeng/toolbar';

@NgModule({
  declarations: [
    CarEditComponent,
    CarMainComponent,
    CarListComponent,
    ButtonNewCarComponent,
    ButtonDeleteCarComponent,
    ButtonEditManyTestCarComponent,
    ButtonCreateManyTestCarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CarRoutingModule,
    TableModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    PipesModule,
    SearchModule,
    NgLetModule,
    ToolbarModule
  ],
  providers: [],
  entryComponents: []
})
export class CarModule {
}
