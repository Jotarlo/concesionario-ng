import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { BrandModel } from 'src/app/models/parameters/brand.model';
import { BrandService } from 'src/app/services/parameters/brand.service';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-remove-brand',
  templateUrl: './remove-brand.component.html',
  styleUrls: ['./remove-brand.component.css']
})
export class RemoveBrandComponent implements OnInit {
  id: number = 0;
  name: string = "";

  constructor(
    private router: Router,
    private service: BrandService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord() {
    let id = this.route.snapshot.params["id"];
    this.service.SearchRecord(id).subscribe({
      next: (data: BrandModel) => {
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
        this.router.navigate(["/parameters/brand-list"]);
      }
    });
  }

}
