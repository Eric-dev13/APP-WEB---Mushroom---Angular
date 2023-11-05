import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_ADMIN_BASE_URL } from 'src/environments/config';
import { LamellaType } from '../interfaces/lamella-type.interface';

@Injectable({
  providedIn: 'root'
})
export class LamellaTypeService {

  // Déclaration de constantes
  readonly API_ADMIN_BASE_URL: string = API_ADMIN_BASE_URL;
  
    constructor(private http: HttpClient) {}

    findAll = ():Observable<LamellaType[]> => {
      return this.http.get<LamellaType[]>(this.API_ADMIN_BASE_URL + "lamellaType");
    }
  
    // findById = (id: any):Observable<LamellaType> => {
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
