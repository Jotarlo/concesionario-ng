import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { BrandModel } from 'src/app/models/parameters/brand.model';
import { BrandService } from 'src/app/services/parameters/brand.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-brand-creation',
  templateUrl: './brand-creation.component.html',
  styleUrls: ['./brand-creation.component.css']
})
export class BrandCreationComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: BrandService
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding() {
    this.dataForm = this.fb.group({
      name: ["", [Validators.required]],
    });
  }

  
  get GetDF() {
    return this.dataForm.controls;
  }

  SaveRecord(){
    let model = new BrandModel();
    model.nombre = this.GetDF["name"].value;
    this.service.SaveRecord(model).subscribe({
      next: (data: BrandModel) => {
        ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE)
        this.router.navigate(["/parameters/brand-list"]);
      }
    });
  }

}
