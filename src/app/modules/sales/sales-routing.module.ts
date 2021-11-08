import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceEditionComponent } from './invoice/invoice-edition/invoice-edition.component';
import { InvoicePrintComponent } from './invoice/invoice-print/invoice-print.component';
import { InvoiceSearchComponent } from './invoice/invoice-search/invoice-search.component';
import { RemoveSaleComponent } from './sale/remove-sale/remove-sale.component';
import { SaleCreationComponent } from './sale/sale-creation/sale-creation.component';
import { SaleEditionComponent } from './sale/sale-edition/sale-edition.component';
import { SaleListComponent } from './sale/sale-list/sale-list.component';

const routes: Routes = [
  {
    path: "sale-creation",
    component: SaleCreationComponent
  },
  {
    path: "sale-edition",
    component: SaleEditionComponent
  },
  {
    path: "sales-list",
    component: SaleListComponent
  },
  {
    path: "remove-sale",
    component: RemoveSaleComponent
  },
  {
    path: "invoice-search",
    component: InvoiceSearchComponent
  },
  {
    path: "invoice-edition",
    component: InvoiceEditionComponent
  },
  {
    path: "invoice-print",
    component: InvoicePrintComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
