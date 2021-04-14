import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MybodyMainComponent} from './mybody-main/mybody-main.component';
import {MybodyEditComponent} from '@views/mybody/mybody-edit/mybody-edit.component';

const routes: Routes = [
  {
    path: 'main',
    component: MybodyMainComponent,
    pathMatch: 'full'
  },
  {
    path: 'edit',
    component: MybodyEditComponent,
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
export class MybodyRoutingModule {
}
