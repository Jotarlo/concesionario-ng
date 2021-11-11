import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { BrandModel } from 'src/app/models/parameters/brand.model';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  url: string = ConfigurationData.BUSSINESS_MS_URL;
  tk: string = "";
  constructor(private http: HttpClient,
    private localStorageService: LocalStorageService) {
    this.tk = this.localStorageService.GetToken();
  }

  GetRecordList(): Observable<BrandModel[]> {
    return this.http.get<BrandModel[]>(`${this.url}/marcas`);
  }

  SearchRecord(id: number): Observable<BrandModel> {
    return this.http.get<BrandModel>(`${this.url}/marcas/${id}`);
  }

  SaveRecord(data: BrandModel): Observable<BrandModel> {
    return this.http.post<BrandModel>(`${this.url}/marcas`,
      {
        nombre: data.nombre
      },
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.tk}`
        })
      });
  }

  EditRecord(data: BrandModel): Observable<BrandModel> {
    return this.http.put<BrandModel>(`${this.url}/marcas/${data.id}`,
      {
        nombre: data.nombre
      },
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.tk}`
        })
      });
  }
  

  RemoveRecord(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/marcas/${id}`,
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }

}
