import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedGuard } from 'src/app/guards/authenticated.guard';
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
    component: BrandCreationComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "brand-edition/:id",
    component: BrandEditionComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "brand-list",
    component: BrandListComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "remove-brand/:id",
    component: RemoveBrandComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "category-creation",
    component: CategoryCreationComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "category-edition/:id",
    component: CategoryEditionComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "category-list",
    component: CategoryListComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "remove-category/:id",
    component: RemoveCategoryComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "provider-creation",
    component: ProviderCreationComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "provider-edition",
    component: ProviderEditionComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "provider-list",
    component: ProviderListComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "remove-provider",
    component: RemoveProviderComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "vehicle-creation",
    component: VehicleCreationComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "vehicle-edition",
    component: VehicleEditionComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "vehicle-list",
    component: VehicleListComponent,
    canActivate: [AuthenticatedGuard]
  },
  {
    path: "remove-vehicle",
    component: RemoveVehicleComponent,
    canActivate: [AuthenticatedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametersRoutingModule { }
