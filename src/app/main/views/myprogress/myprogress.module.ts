import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MyprogressEditComponent} from './myprogress-edit/myprogress-edit.component';
import {MyprogressMainComponent} from './myprogress-main/myprogress-main.component';
import {MyprogressListComponent} from './myprogress-list/myprogress-list.component';
import {MyprogressRoutingModule} from './myprogress-routing.module';
import {ButtonNewMyprogressComponent} from './components/button-new-myprogress.component';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {SearchModule} from '@components/search/search.module';
import {PipesModule} from '@core/pipe/pipes.module';
import {ButtonDeleteMyprogressComponent} from './components/button-delete-myprogress.component';
import {ButtonEditManyTestMyprogressComponent} from './components/button-edit-many-test-myprogress.component';
import {ButtonCreateManyTestMyprogressComponent} from './components/button-create-many-test-myprogress.component';
import {NgLetModule} from '@core/directive/ng-let.directive';
import {ToolbarModule} from 'primeng/toolbar';

@NgModule({
  declarations: [
    MyprogressEditComponent,
    MyprogressMainComponent,
    MyprogressListComponent,
    ButtonNewMyprogressComponent,
    ButtonDeleteMyprogressComponent,
    ButtonEditManyTestMyprogressComponent,
    ButtonCreateManyTestMyprogressComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MyprogressRoutingModule,
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
export class MyprogressModule {
}
