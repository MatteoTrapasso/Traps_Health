import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IbmMainComponent} from './ibm-main/ibm-main.component';
import {IbmEditComponent} from '@views/ibm/ibm-edit/ibm-edit.component';

const routes: Routes = [
  {
    path: 'main',
    component: IbmMainComponent,
    pathMatch: 'full'
  },
  {
    path: 'edit',
    component: IbmEditComponent,
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
export class IbmRoutingModule {
}
