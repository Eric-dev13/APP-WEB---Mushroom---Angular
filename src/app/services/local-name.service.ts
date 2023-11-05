import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, empty } from 'rxjs';
import { API_ADMIN_BASE_URL } from 'src/environments/config';
import { LocalName } from '../interfaces/local-name.interface';

@Injectable({
  providedIn: 'root'
})
export class LocalNameAdminService {

  // Déclaration de constantes
  readonly API_ADMIN_BASE_URL: string = API_ADMIN_BASE_URL;
  
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
