import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL, API_ADMIN_BASE_URL } from 'src/environments/config';
import { Edibility } from '../interfaces/edibility.interface';

@Injectable({
  providedIn: 'root'
})
export class EdibilityService {

  // Déclaration de constantes
  readonly API_ADMIN_BASE_URL:string = API_ADMIN_BASE_URL;
  readonly API_BASE_URL:string = API_BASE_URL;

  constructor(private http: HttpClient) { }

  findAll = ():Observable<Edibility[]> => {
    return this.http.get<Edibility[]>(this.API_ADMIN_BASE_URL + "edibility")
  }

  // findById = (id: any):Observable<Edibility> => {
  //   return;
  // }

  // add = ():Observable<boolean> => {
  //   return
  // }

  // put = ():Observable<boolean> => {
  //   return
  // }

  // delete = (id:number):Observable<any> => {
  //   return 
  // }
}
