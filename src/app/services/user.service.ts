import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL } from 'src/environments/config';
import { NgForm } from '@angular/forms';

export interface User {
  createdAt: Date;
  updatedAt?: Date;
  pseudo: string;
  authorities: [];
  lastname?: string;
  firstname?: string;
  email: string;
  password?: string
  filename?: string;
  // isVerified: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // Déclaration de constantes
  readonly API_BASE_URL: string = API_BASE_URL;

  user!: User;

  constructor(private http: HttpClient) {}

  getProfilCurrentUser = (): Observable<any> => {
    return this.http.get<User>(API_BASE_URL +"current-user");
  }

  updateProfilCurrentUser = (formData: FormData): Observable<any> => {
    return this.http.put<any>(API_BASE_URL + "current-user",formData);
  }

  // updateProfilCurrentUser = (form: NgForm): Observable<boolean> => {
  //   return this.http.put<boolean>(API_BASE_URL + "user",form.value);
  // }


}