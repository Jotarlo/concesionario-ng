import { Component, OnInit } from '@angular/core';
import { CategoryModel } from 'src/app/models/parameters/category.model';
import { CategoryService } from 'src/app/services/parameters/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  recordList: CategoryModel[] = [];

  constructor(
    private service: CategoryService
  ) { }

  ngOnInit(): void {
    this.ShowRecordList();
  }

  ShowRecordList(){
    this.service.GetRecordList().subscribe({
      next: (data: CategoryModel[]) => {
        this.recordList = data;
      }
    });
  }

}