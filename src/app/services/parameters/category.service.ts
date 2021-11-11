import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { CategoryModel } from 'src/app/models/parameters/category.model';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url: string = ConfigurationData.BUSSINESS_MS_URL;
  tk: string = "";
  constructor(private http: HttpClient,
    private localStorageService: LocalStorageService) {
    this.tk = this.localStorageService.GetToken();
  }

  GetRecordList(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>(`${this.url}/categorias`);
  }

  SearchRecord(id: number): Observable<CategoryModel> {
    return this.http.get<CategoryModel>(`${this.url}/categorias/${id}`);
  }

  SaveRecord(data: CategoryModel): Observable<CategoryModel> {
    return this.http.post<CategoryModel>(`${this.url}/categorias`,
      {
        nombre: data.nombre
      },
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.tk}`
        })
      });
  }

  EditRecord(data: CategoryModel): Observable<CategoryModel> {
    return this.http.put<CategoryModel>(`${this.url}/categorias/${data.id}`,
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
    return this.http.delete<any>(`${this.url}/categorias/${id}`,
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.tk}`
      })
    });
  }
}
