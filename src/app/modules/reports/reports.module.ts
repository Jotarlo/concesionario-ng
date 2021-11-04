import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { VehicleByBrandComponent } from './vehicle/vehicle-by-brand/vehicle-by-brand.component';
import { VehicleByCategoryComponent } from './vehicle/vehicle-by-category/vehicle-by-category.component';
import { SalesByYearComponent } from './sales/sales-by-year/sales-by-year.component';
import { SalesByMonthComponent } from './sales/sales-by-month/sales-by-month.component';


@NgModule({
  declarations: [
    VehicleByBrandComponent,
    VehicleByCategoryComponent,
    SalesByYearComponent,
    SalesByMonthComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
