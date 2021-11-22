import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametersRoutingModule } from './parameters-routing.module';
import { BrandCreationComponent } from './brand/brand-creation/brand-creation.component';
import { BrandEditionComponent } from './brand/brand-edition/brand-edition.component';
import { BrandListComponent } from './brand/brand-list/brand-list.component';
import { RemoveBrandComponent } from './brand/remove-brand/remove-brand.component';
import { CategoryCreationComponent } from './category/category-creation/category-creation.component';
import { CategoryEditionComponent } from './category/category-edition/category-edition.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { RemoveCategoryComponent } from './category/remove-category/remove-category.component';
import { ProviderCreationComponent } from './provider/provider-creation/provider-creation.component';
import { ProviderEditionComponent } from './provider/provider-edition/provider-edition.component';
import { ProviderListComponent } from './provider/provider-list/provider-list.component';
import { RemoveProviderComponent } from './provider/remove-provider/remove-provider.component';
import { VehicleCreationComponent } from './vehicle/vehicle-creation/vehicle-creation.component';
import { VehicleEditionComponent } from './vehicle/vehicle-edition/vehicle-edition.component';
import { VehicleListComponent } from './vehicle/vehicle-list/vehicle-list.component';
import { RemoveVehicleComponent } from './vehicle/remove-vehicle/remove-vehicle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    BrandCreationComponent,
    BrandEditionComponent,
    BrandListComponent,
    RemoveBrandComponent,
    CategoryCreationComponent,
    CategoryEditionComponent,
    CategoryListComponent,
    RemoveCategoryComponent,
    ProviderCreationComponent,
    ProviderEditionComponent,
    ProviderListComponent,
    RemoveProviderComponent,
    VehicleCreationComponent,
    VehicleEditionComponent,
    VehicleListComponent,
    RemoveVehicleComponent
  ],
  imports: [
    CommonModule,
    ParametersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class ParametersModule { }
