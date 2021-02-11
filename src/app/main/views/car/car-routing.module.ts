import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarMainComponent} from './car-main/car-main.component';
import {CarEditComponent} from '@views/car/car-edit/car-edit.component';

const routes: Routes = [
  {
    path: 'main',
    component: CarMainComponent,
    pathMatch: 'full'
  },
  {
    path: 'edit',
    component: CarEditComponent,
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
export class CarRoutingModule {
}
