import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { CategoryModel } from 'src/app/models/parameters/category.model';
import { CategoryService } from 'src/app/services/parameters/category.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-remove-category',
  templateUrl: './remove-category.component.html',
  styleUrls: ['./remove-category.component.css']
})
export class RemoveCategoryComponent implements OnInit {
  id: number = 0;
  name: string = "";

  constructor(
    private router: Router,
    private service: CategoryService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord() {
    let id = this.route.snapshot.params["id"];
    this.service.SearchRecord(id).subscribe({
      next: (data: CategoryModel) => {
        if (data.id && data.nombre) {
          this.id = data.id;
          this.name = data.nombre;
        }
      }
    });
  }

  RemoveRecord() {
    this.service.RemoveRecord(this.id).subscribe({
      next: (data: any) => {
        ShowGeneralMessage(ConfigurationData.REMOVED_MESSAGE)
        this.router.navigate(["/parameters/category-list"]);
      }
    });
  }
}