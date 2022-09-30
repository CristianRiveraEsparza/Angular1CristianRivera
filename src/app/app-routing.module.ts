import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SumaComponent } from './calculos/suma/suma.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { TablaComponent } from './calculos/tabla/tabla.component';
import { CineComponent } from './calculos/cine/cine.component';

const routes: Routes = [
  {path:'', component: ProductListComponent},
  {path:'suma', component: SumaComponent},
  {path:'tabla', component: TablaComponent},
  {path:'cine', component: CineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
