import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { BrandModel } from 'src/app/models/parameters/brand.model';
import { CategoryModel } from 'src/app/models/parameters/category.model';
import { ProviderModel } from 'src/app/models/parameters/provider.model';
import { UploadedFile } from 'src/app/models/parameters/uploaded.file.model';
import { VehicleModel } from 'src/app/models/parameters/vehicle.model';
import { BrandService } from 'src/app/services/parameters/brand.service';
import { CategoryService } from 'src/app/services/parameters/category.service';
import { ProviderService } from 'src/app/services/parameters/provider.service';
import { VehicleService } from 'src/app/services/parameters/vehicle.service';

declare const ShowGeneralMessage: any;
declare const InitSelect: any;
@Component({
  selector: 'app-vehicle-creation',
  templateUrl: './vehicle-creation.component.html',
  styleUrls: ['./vehicle-creation.component.css']
})
export class VehicleCreationComponent implements OnInit {
  uploadedPhoto: boolean = false;
  dataForm: FormGroup = new FormGroup({});
  mainPhotoForm: FormGroup = new FormGroup({});
  brandList: BrandModel[] = [];
  categoryList: CategoryModel[] = [];
  providerList: ProviderModel[] = [];
  uploadedFilename?: string = "";
  url_server: string = ConfigurationData.BUSSINESS_MS_URL;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: VehicleService,
    private brandService: BrandService,
    private categoryService: CategoryService,
    private providerService: ProviderService
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
    this.FormMainPhoto();
    this.GetDataForSelects();
  }

  GetDataForSelects() {
    this.brandService.GetRecordList().subscribe({
      next: (data: BrandModel[]) => {
        this.brandList = data;
        setTimeout(() => {
          InitSelect("selBrand");
        }, 100);
      }
    });
    this.categoryService.GetRecordList().subscribe({
      next: (data: CategoryModel[]) => {
        this.categoryList = data;
        setTimeout(() => {
          InitSelect("selCategories");
        }, 100);
      }
    });
    this.providerService.GetRecordList().subscribe({
      next: (data: ProviderModel[]) => {
        this.providerList = data;
        setTimeout(() => {
          InitSelect("selProvider");
        }, 100);
      }
    });
  }

  FormMainPhoto() {
    this.mainPhotoForm = this.fb.group({
      file: ["", []]
    });
  }

  FormBuilding() {
    this.dataForm = this.fb.group({
      chasis_number: ["", [Validators.required]],
      engine_number: ["", [Validators.required]],
      color: ["", [Validators.required]],
      year: ["", [Validators.required]],
      price: ["", [Validators.required]],
      discount: ["", [Validators.required]],
      status: ["", [Validators.required]],
      brand_id: ["", [Validators.required]],
      categories: ["", [Validators.required]],
      provider_id: ["", [Validators.required]],
      foto_principal: ["", [Validators.required]]
    });
  }

  get GetDF() {
    return this.dataForm.controls;
  }

  SaveRecord() {
    let model = new VehicleModel();
    model.serie_chasis = this.GetDF["chasis_number"].value;
    model.serie_motor = this.GetDF["engine_number"].value;
    model.color = this.GetDF["color"].value;
    model.modelo = this.GetDF["year"].value;
    model.precio = this.GetDF["price"].value;
    model.descuento = this.GetDF["discount"].value;
    model.estado = this.GetDF["status"].value;
    model.id_marca = this.GetDF["brand_id"].value;
    model.categorias = this.GetDF["categories"].value;
    model.id_proveedor = this.GetDF["provider_id"].value;
    model.foto_principal = this.GetDF["foto_principal"].value;
    this.service.SaveRecord(model).subscribe({
      next: (data: VehicleModel) => {
        ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE)
        this.router.navigate(["/parameters/vehicle-list"]);
      }
    });
  }

  // Carga de archivo

  UploadPhoto(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.mainPhotoForm.controls["file"].setValue(file);
    }
  }

  SubmitFileToServer() {
    const form = new FormData();
    form.append("file", this.mainPhotoForm.controls["file"].value)
    this.service.UploadMainPhoto(form).subscribe({
      next: (data: UploadedFile) => {
        this.dataForm.controls["foto_principal"].setValue(data.filename);
        this.uploadedPhoto = true;
        this.uploadedFilename = data.filename
      }
    });
  }

}
