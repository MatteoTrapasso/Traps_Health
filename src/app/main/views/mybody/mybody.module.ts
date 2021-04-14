import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MybodyEditComponent} from './mybody-edit/mybody-edit.component';
import {MybodyMainComponent} from './mybody-main/mybody-main.component';
import {MybodyListComponent} from './mybody-list/mybody-list.component';
import {MybodyRoutingModule} from './mybody-routing.module';
import {ButtonNewMybodyComponent} from './components/button-new-mybody.component';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {SearchModule} from '@components/search/search.module';
import {PipesModule} from '@core/pipe/pipes.module';
import {ButtonDeleteMybodyComponent} from './components/button-delete-mybody.component';
import {ButtonEditManyTestMybodyComponent} from './components/button-edit-many-test-mybody.component';
import {ButtonCreateManyTestMybodyComponent} from './components/button-create-many-test-mybody.component';
import {NgLetModule} from '@core/directive/ng-let.directive';
import {ToolbarModule} from 'primeng/toolbar';

@NgModule({
  declarations: [
    MybodyEditComponent,
    MybodyMainComponent,
    MybodyListComponent,
    ButtonNewMybodyComponent,
    ButtonDeleteMybodyComponent,
    ButtonEditManyTestMybodyComponent,
    ButtonCreateManyTestMybodyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MybodyRoutingModule,
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
export class MybodyModule {
}
