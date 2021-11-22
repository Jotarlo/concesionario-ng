import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { UploadedFile } from 'src/app/models/parameters/uploaded.file.model';
import { VehicleModel } from 'src/app/models/parameters/vehicle.model';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  url: string = ConfigurationData.BUSSINESS_MS_URL;
  tk: string = "";
  filter: string = `?filter={"include":[{"relation": "marca"}, {"relation": "categorias"}]}`;
  constructor(private http: HttpClient,
    private localStorageService: LocalStorageService) {
    this.tk = this.localStorageService.GetToken();
  }

  GetRecordList(): Observable<VehicleModel[]> {
    return this.http.get<VehicleModel[]>(`${this.url}/vehiculos${this.filter}`);
  }

  SearchRecord(id: number): Observable<VehicleModel> {
    return this.http.get<VehicleModel>(`${this.url}/vehiculos/${id}`);
  }

  SaveRecord(data: VehicleModel): Observable<VehicleModel> {
    return this.http.post<VehicleModel>(`${this.url}/vehiculos`,
      {
        color: data.color,
        modelo: data.modelo,
        serie_chasis: data.serie_chasis,
        serie_motor: data.serie_motor,
        precio: data.precio,
        descuento: data.descuento,
        estado: data.estado,
        id_marca: data.id_marca,
        id_proveedor: data.id_proveedor,
        categorias: data.categorias,
        foto_principal: data.foto_principal
      },
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.tk}`
        })
      });
  }

  EditRecord(data: VehicleModel): Observable<VehicleModel> {
    return this.http.put<VehicleModel>(`${this.url}/vehiculos/${data.id}`,
      {
        id: data.id,
        color: data.color,
        modelo: data.modelo,
        serie_chasis: data.serie_chasis,
        serie_motor: data.serie_motor,
        precio: data.precio,
        descuento: data.descuento,
        estado: data.estado,
        id_marca: data.id_marca,
        id_proveedor: data.id_proveedor
      },
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.tk}`
        })
      });
  }


  RemoveRecord(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/vehiculos/${id}`,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.tk}`
        })
      });
  }

  UploadMainPhoto(form: FormData): Observable<UploadedFile> {
    return this.http.post<UploadedFile>(
      `${this.url}/CargarImagenPrincipalVehiculo`,
      form,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.tk}`
        })
      });
  }
}
