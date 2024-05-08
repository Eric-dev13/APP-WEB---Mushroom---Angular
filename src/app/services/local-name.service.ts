import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { API_ADMIN_BASE_URL } from 'src/environments/config';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LocalNameAdminService {

  // Déclaration de constantes
  readonly API_ADMIN_BASE_URL: string = environment.API_ADMIN_BASE_URL;
  
    constructor(private http: HttpClient) {}

    // findAll = ():Observable<LocalName[]> => {
    //   return ;
    // }
  
    // findById = (id: any):Observable<LocalName> => {
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
