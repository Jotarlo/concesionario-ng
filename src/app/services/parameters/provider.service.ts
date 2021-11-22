import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ProviderModel } from 'src/app/models/parameters/provider.model';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  url: string = ConfigurationData.BUSSINESS_MS_URL;
  tk: string = "";
  constructor(private http: HttpClient,
    private localStorageService: LocalStorageService) {
    this.tk = this.localStorageService.GetToken();
  }

  GetRecordList(): Observable<ProviderModel[]> {
    return this.http.get<ProviderModel[]>(`${this.url}/proveedors`);
  }

  SearchRecord(id: number): Observable<ProviderModel> {
    return this.http.get<ProviderModel>(`${this.url}/proveedors/${id}`);
  }

  SaveRecord(data: ProviderModel): Observable<ProviderModel> {
    return this.http.post<ProviderModel>(`${this.url}/proveedors`,
      {
        razon_social: data.razon_social,
        direccion: data.direccion,
        correo: data.correo,
        telefono: data.telefono
      },
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.tk}`
        })
      });
  }

  EditRecord(data: ProviderModel): Observable<ProviderModel> {
    return this.http.put<ProviderModel>(`${this.url}/proveedors/${data.id}`,
      {
        id: data.id,
        razon_social: data.razon_social,
        direccion: data.direccion,
        correo: data.correo,
        telefono: data.telefono
      },
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.tk}`
        })
      });
  }
  

  RemoveRecord(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/proveedors/${id}`,
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }

}
