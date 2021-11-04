import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { SaleCreationComponent } from './sale/sale-creation/sale-creation.component';
import { SaleEditionComponent } from './sale/sale-edition/sale-edition.component';
import { SaleListComponent } from './sale/sale-list/sale-list.component';
import { RemoveSaleComponent } from './sale/remove-sale/remove-sale.component';
import { InvoiceSearchComponent } from './invoice/invoice-search/invoice-search.component';
import { InvoiceEditionComponent } from './invoice/invoice-edition/invoice-edition.component';
import { InvoicePrintComponent } from './invoice/invoice-print/invoice-print.component';


@NgModule({
  declarations: [
    SaleCreationComponent,
    SaleEditionComponent,
    SaleListComponent,
    RemoveSaleComponent,
    InvoiceSearchComponent,
    InvoiceEditionComponent,
    InvoicePrintComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule
  ]
})
export class SalesModule { }
