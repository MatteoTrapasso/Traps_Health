import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CalculatorMainComponent} from './calculator-main/calculator-main.component';
import {CalculatorEditComponent} from './calculator-edit/calculator-edit.component';

const routes: Routes = [
  {
    path: 'main',
    component: CalculatorMainComponent,
    pathMatch: 'full'
  },
  {
    path: 'edit',
    component: CalculatorEditComponent,
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
export class CalculatorRoutingModule {
}
