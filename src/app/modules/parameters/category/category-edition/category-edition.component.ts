import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { CategoryModel } from 'src/app/models/parameters/category.model';
import { CategoryService } from 'src/app/services/parameters/category.service';
declare const ShowGeneralMessage: any;
@Component({
  selector: 'app-category-edition',
  templateUrl: './category-edition.component.html',
  styleUrls: ['./category-edition.component.css']
})
export class CategoryEditionComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: CategoryService,
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
      next: (data: CategoryModel) => {
        this.GetDF["id"].setValue(data.id);
        this.GetDF["name"].setValue(data.nombre);
      }
    });
  }

  SaveRecord(){
    let model = new CategoryModel();
    model.nombre = this.GetDF["name"].value;
    model.id = this.GetDF["id"].value;
    this.service.EditRecord(model).subscribe({
      next: (data: CategoryModel) => {
        ShowGeneralMessage(ConfigurationData.UPDATED_MESSAGE)
        this.router.navigate(["/parameters/category-list"]);
      }
    });
  }
}
