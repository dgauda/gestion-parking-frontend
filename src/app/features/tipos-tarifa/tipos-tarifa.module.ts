import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TiposTarifaRoutingModule } from './tipos-tarifa-routing.module';
import { TiposTarifaComponent } from './tipos-tarifa.component';
import { CoreModule } from 'src/app/shared/core.module';
import { TableModule } from 'src/app/shared/table/table.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    TiposTarifaRoutingModule,
    CoreModule,
    TableModule
  ],
  declarations: [
    TiposTarifaComponent
  ]
})
export class TiposTarifaModule { }
