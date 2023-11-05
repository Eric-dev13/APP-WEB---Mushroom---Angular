import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL, API_ADMIN_BASE_URL } from 'src/environments/config';
import { ForumSubject } from '../interfaces/forumSubject.interface';


@Injectable({
  providedIn: 'root'
})
export class ForumService {

   // Déclaration de constantes
   readonly API_BASE_URL:string = API_BASE_URL;
   readonly API_ADMIN_BASE_URL:string = API_ADMIN_BASE_URL;
 
   constructor(private http: HttpClient) { }

   public findAll = (): Observable<ForumSubject[]> => {
    return this.http.get<ForumSubject[]>(this.API_BASE_URL + "forum");
  }

  public findById = (id: number): Observable<ForumSubject> => {
    return this.http.get<ForumSubject>(this.API_BASE_URL + "forum/" + id);
  }


}
