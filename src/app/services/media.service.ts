import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_ADMIN_BASE_URL } from 'src/environments/config';

import { Mushroom } from '../interfaces/mushroom.interface';
import { Media } from '../interfaces/media.interface';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(private http: HttpClient) { }

  public findAll = (): Observable<Media[]> => {
    return this.http.get<Media[]>(this.API_ADMIN_BASE_URL + "media");
  }

  public findById = (id: number): Observable<Media> => {
    return this.http.get<Media>(this.API_ADMIN_BASE_URL + "media/" + id);
  }

  // Déclaration de constantes
  readonly API_ADMIN_BASE_URL: string = API_ADMIN_BASE_URL;

  public add = (mushroom_id: number, formData: FormData): Observable<Media[]> => {
    return this.http.post<Media[]>(this.API_ADMIN_BASE_URL + 'media/upload/' + mushroom_id, formData);
  }

  // DELETE
  public delete = (id: any): Observable<boolean> => {
    return this.http.delete<boolean>(this.API_ADMIN_BASE_URL + 'media/' + id);
  }


}
