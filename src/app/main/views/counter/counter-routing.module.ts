import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CounterMainComponent} from './counter-main/counter-main.component';
import {CounterEditComponent} from './counter-edit/counter-edit.component';

const routes: Routes = [
  {
    path: 'main',
    component: CounterMainComponent,
    pathMatch: 'full'
  },
  {
    path: 'edit',
    component: CounterEditComponent,
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
export class CounterRoutingModule {
}
