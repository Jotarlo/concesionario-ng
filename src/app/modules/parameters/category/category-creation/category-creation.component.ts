import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { CategoryModel } from 'src/app/models/parameters/category.model';
import { CategoryService } from 'src/app/services/parameters/category.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-category-creation',
  templateUrl: './category-creation.component.html',
  styleUrls: ['./category-creation.component.css']
})
export class CategoryCreationComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: CategoryService
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
    let model = new CategoryModel();
    model.nombre = this.GetDF["name"].value;
    this.service.SaveRecord(model).subscribe({
      next: (data: CategoryModel) => {
        ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE)
        this.router.navigate(["/parameters/category-list"]);
      }
    });
  }

}
