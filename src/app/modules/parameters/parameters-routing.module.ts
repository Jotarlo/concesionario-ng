import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { RemoveVehicleComponent } from './vehicle/remove-vehicle/remove-vehicle.component';
import { VehicleCreationComponent } from './vehicle/vehicle-creation/vehicle-creation.component';
import { VehicleEditionComponent } from './vehicle/vehicle-edition/vehicle-edition.component';
import { VehicleListComponent } from './vehicle/vehicle-list/vehicle-list.component';

const routes: Routes = [
  {
    path: "brand-creation",
    component: BrandCreationComponent
  },
  {
    path: "brand-edition/:id",
    component: BrandEditionComponent
  },
  {
    path: "brand-list",
    component: BrandListComponent
  },
  {
    path: "remove-brand/:id",
    component: RemoveBrandComponent
  },
  {
    path: "category-creation",
    component: CategoryCreationComponent
  },
  {
    path: "category-edition/:id",
    component: CategoryEditionComponent
  },
  {
    path: "category-list",
    component: CategoryListComponent
  },
  {
    path: "remove-category/:id",
    component: RemoveCategoryComponent
  },
  {
    path: "provider-creation",
    component: ProviderCreationComponent
  },
  {
    path: "provider-edition",
    component: ProviderEditionComponent
  },
  {
    path: "provider-list",
    component: ProviderListComponent
  },
  {
    path: "remove-provider",
    component: RemoveProviderComponent
  },
  {
    path: "vehicle-creation",
    component: VehicleCreationComponent
  },
  {
    path: "vehicle-edition",
    component: VehicleEditionComponent
  },
  {
    path: "vehicle-list",
    component: VehicleListComponent
  },
  {
    path: "remove-vehicle",
    component: RemoveVehicleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametersRoutingModule { }
