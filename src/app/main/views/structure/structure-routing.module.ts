import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StructureMainComponent} from './structure-main/structure-main.component';
import {StructureEditComponent} from '@views/structure/structure-edit/structure-edit.component';

const routes: Routes = [
  {
    path: 'main',
    component: StructureMainComponent,
    pathMatch: 'full'
  },
  {
    path: 'edit',
    component: StructureEditComponent,
    outlet: 'popUp',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'main',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class StructureRoutingModule {
}
