import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TiposTarifaComponent } from './tipos-tarifa.component';

const routes: Routes = [
  { path: '', component: TiposTarifaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class TiposTarifaRoutingModule { }
