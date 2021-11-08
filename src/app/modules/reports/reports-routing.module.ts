import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesByMonthComponent } from './sales/sales-by-month/sales-by-month.component';
import { SalesByYearComponent } from './sales/sales-by-year/sales-by-year.component';
import { VehicleByBrandComponent } from './vehicle/vehicle-by-brand/vehicle-by-brand.component';
import { VehicleByCategoryComponent } from './vehicle/vehicle-by-category/vehicle-by-category.component';

const routes: Routes = [
  {
    path: "vehicle-by-brand-report",
    component: VehicleByBrandComponent
  },
  {
    path: "vehicle-by-category-report",
    component: VehicleByCategoryComponent
  },
  {
    path: "sales-by-year-report",
    component: SalesByYearComponent
  },
  {
    path: "sales-by-month-report",
    component: SalesByMonthComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
