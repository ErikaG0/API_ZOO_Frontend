import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
//recuperar los datos en las consultas api
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class AnimalService {


  //url api
  apiUri = '/api/animals/all';
  //opciones http
  httpOptions = new HttpHeaders().set('Content-type', 'application/json');

  constructor(private http: HttpClient) {}


  getAllAnimalsData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUri);
  }
  
}
