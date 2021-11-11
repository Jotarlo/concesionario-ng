import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { BrandModel } from 'src/app/models/parameters/brand.model';
import { BrandService } from 'src/app/services/parameters/brand.service';


declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-brand-edition',
  templateUrl: './brand-edition.component.html',
  styleUrls: ['./brand-edition.component.css']
})
export class BrandEditionComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: BrandService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
    this.SearchRecord();
  }

  FormBuilding() {
    this.dataForm = this.fb.group({
      id: ["", [Validators.required]],
      name: ["", [Validators.required]],
    });
  }

  
  get GetDF() {
    return this.dataForm.controls;
  }

  SearchRecord(){
    let id = this.route.snapshot.params["id"];
    this.service.SearchRecord(id).subscribe({
      next: (data: BrandModel) => {
        this.GetDF["id"].setValue(data.id);
        this.GetDF["name"].setValue(data.nombre);
      }
    });
  }

  SaveRecord(){
    let model = new BrandModel();
    model.nombre = this.GetDF["name"].value;
    model.id = this.GetDF["id"].value;
    this.service.EditRecord(model).subscribe({
      next: (data: BrandModel) => {
        ShowGeneralMessage(ConfigurationData.UPDATED_MESSAGE)
        this.router.navigate(["/parameters/brand-list"]);
      }
    });
  }
}
