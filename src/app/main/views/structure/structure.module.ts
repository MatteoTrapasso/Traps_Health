import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StructureEditComponent} from './structure-edit/structure-edit.component';
import {StructureMainComponent} from './structure-main/structure-main.component';
import {StructureListComponent} from './structure-list/structure-list.component';
import {StructureRoutingModule} from './structure-routing.module';
import {ButtonNewStructureComponent} from './components/button-new-structure.component';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {SearchModule} from '@components/search/search.module';
import {PipesModule} from '@core/pipe/pipes.module';
import {ButtonDeleteStructureComponent} from './components/button-delete-structure.component';
import {ButtonEditManyTestStructureComponent} from './components/button-edit-many-test-structure.component';
import {ButtonCreateManyTestStructureComponent} from './components/button-create-many-test-structure.component';
import {NgLetModule} from '@core/directive/ng-let.directive';
import {ToolbarModule} from 'primeng/toolbar';

@NgModule({
  declarations: [
    StructureEditComponent,
    StructureMainComponent,
    StructureListComponent,
    ButtonNewStructureComponent,
    ButtonDeleteStructureComponent,
    ButtonEditManyTestStructureComponent,
    ButtonCreateManyTestStructureComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StructureRoutingModule,
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
export class StructureModule {
}
