import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL, API_ADMIN_BASE_URL } from 'src/environments/config';
import { ForumSubject } from '../interfaces/forumSubject.interface';
import { ForumSubjectsPaginator } from '../interfaces/forum-subjects-paginator.interface';


@Injectable({
  providedIn: 'root'
})
export class ForumService {

   // Déclaration de constantes
   readonly API_BASE_URL:string = API_BASE_URL;
   readonly API_ADMIN_BASE_URL:string = API_ADMIN_BASE_URL;
 
   constructor(private http: HttpClient) { }

  //  public findAll = (): Observable<ForumSubject[]> => {
  //   return this.http.get<ForumSubject[]>(this.API_BASE_URL + "forum");
  // }

  public findAllPaginate = (limit?: number, offset?: number): Observable<ForumSubjectsPaginator> => {
    if (limit == null || limit < 0  || offset  == null || offset < 0  ) {
    return this.http.get<ForumSubjectsPaginator>(this.API_BASE_URL + "forum");
    }
    return this.http.get<ForumSubjectsPaginator>(this.API_BASE_URL + `forum?limit=${limit}&offset=${offset}`);
  }

  public findById = (id: number): Observable<ForumSubject> => {
    return this.http.get<ForumSubject>(this.API_BASE_URL + "forum/" + id);
  }

  public add = (form: NgForm): Observable<any> => {
    return this.http.post<any>(this.API_BASE_URL + "forum", form.value);
  }


}
