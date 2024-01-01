import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL, API_ADMIN_BASE_URL } from 'src/environments/config';
import { ForumSubject } from 'src/app/interfaces/forumSubject.interface';
import { ForumSubjectsPaginator } from 'src/app/interfaces/forum-subjects-paginator.interface';
import { ForumCategory } from 'src/app/interfaces/forum-category.interface';
import { ForumSubjectAdd } from 'src/app/interfaces/forum-subject-add.interface';


@Injectable({
  providedIn: 'root'
})
export class ForumService {

  // Déclaration de constantes
  readonly API_BASE_URL: string = API_BASE_URL;
  readonly API_ADMIN_BASE_URL: string = API_ADMIN_BASE_URL;

  constructor(private http: HttpClient) { }

  public findAllPaginate = (limit?: number, offset?: number, category?: number): Observable<ForumSubjectsPaginator> => {
    if (category != null && limit != null && offset != null) {
      // Si oui, récupère les entités paginées avec filtre par catégorie
      return this.http.get<ForumSubjectsPaginator>(this.API_BASE_URL + `forum?limit=${limit}&offset=${offset}&category=${category}`);
    } else if (limit != null && offset != null) {
      // Si seulement limit et offset sont fournis, récupère les entités paginées sans filtre de catégorie
      return this.http.get<ForumSubjectsPaginator>(this.API_BASE_URL + `forum?limit=${limit}&offset=${offset}`);
    } else {
      return this.http.get<ForumSubjectsPaginator>(this.API_BASE_URL + "forum");
    }
  }

  public findById = (id: number): Observable<ForumSubject> => {
    return this.http.get<ForumSubject>(this.API_BASE_URL + "forum/" + id);
  }

  public add = (form: NgForm): Observable<ForumSubjectAdd> => {
    // console.log("form", form.value);
    return this.http.post<ForumSubjectAdd>(this.API_BASE_URL + "forum", form.value);
  }

  public addCommentary = (commentary: any): Observable<boolean> => {
    return this.http.post<boolean>(this.API_BASE_URL + "forum/commentary", commentary);
  }

  public putCommentary = (commentaryId: number, commentary: any): Observable<boolean> => {
    return this.http.put<boolean>(this.API_BASE_URL + `forum/commentary/${commentaryId}`, commentary);
  }

  public findAllCategories = (): Observable<ForumCategory[]> => {
    return this.http.get<ForumCategory[]>(this.API_BASE_URL + "forum/category");
  }


}
