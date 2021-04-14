import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [{path: '', redirectTo: 'home', pathMatch: 'full'}, {path: 'home', loadChildren: () => import('./main/views/home/home.module').then(m => m.HomeModule)}, {path: 'ibm', loadChildren: () => import('./main/views/ibm/ibm.module').then(m => m.IbmModule)}, {path: 'login', loadChildren: () => import('./main/views/login/login.module').then(m => m.LoginModule)}, {path: 'counter', loadChildren: () => import('./main/views/counter/counter.module').then(m => m.CounterModule)}, {path: 'person', loadChildren: () => import('./main/views/person/person.module').then(m => m.PersonModule)}, {path: 'car', loadChildren: () => import('./main/views/car/car.module').then(m => m.CarModule)}, {path: 'structure', loadChildren: () => import('./main/views/structure/structure.module').then(m => m.StructureModule)}, {path: 'calculator', loadChildren: () => import('./main/views/calculator/calculator.module').then(m => m.CalculatorModule)},];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
