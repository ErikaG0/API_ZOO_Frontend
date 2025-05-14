import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
//recuperar los datos en las consultas api
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class AnimalService {


  //url api
  apiUri = '/api/animals';
  //opciones http
  httpOptions = new HttpHeaders().set('Content-type', 'application/json');

  constructor(private http: HttpClient) { }

  // Angular service:
  getAllAnimalsData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUri + "/all");
  }

  newAnimal(data: any): Observable<any> {
    console.log("ingresaa service");
    return this.http.post<any>(this.apiUri + "/creation", data, {
      headers: this.httpOptions,
    });
  }

  updateAnimal(id: any, data: any): Observable<any> {
  
    return this.http.put<any>(`${this.apiUri}/update/${id}`, data,{
    headers: this.httpOptions,
    
  });
    
  }


  getOneAnimal(id: any): Observable<any> {
  return this.http.get<any>(`${this.apiUri}/search/${id}`, {
    headers: this.httpOptions,
  });
}



}
