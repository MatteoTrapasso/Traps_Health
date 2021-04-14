import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MyprogressMainComponent} from './myprogress-main/myprogress-main.component';
import {MyprogressEditComponent} from '@views/myprogress/myprogress-edit/myprogress-edit.component';

const routes: Routes = [
  {
    path: 'main',
    component: MyprogressMainComponent,
    pathMatch: 'full'
  },
  {
    path: 'edit',
    component: MyprogressEditComponent,
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
export class MyprogressRoutingModule {
}
