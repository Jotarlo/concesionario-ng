import { Component, OnInit } from '@angular/core';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { VehicleModel } from 'src/app/models/parameters/vehicle.model';
import { VehicleService } from 'src/app/services/parameters/vehicle.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  vehicleList: VehicleModel[] = [];
url: string = ConfigurationData.BUSSINESS_MS_URL;
  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.GetVehicleList()
  }

  GetVehicleList() {
    this.vehicleService.GetRecordList().subscribe({
      next: (data: VehicleModel[]) => {
        this.vehicleList = data;
      },
      error: (err) => {
        console.log(err)
      }
    });
  }


}
