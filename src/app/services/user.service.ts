import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { API_BASE_URL } from 'src/environments/config';
import { environment } from 'src/environments/environment.development';
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
  // readonly API_BASE_URL: string = environment.API_BASE_URL;

  user!: User;

  constructor(private http: HttpClient) {}

  getProfilCurrentUser = (): Observable<any> => {
    return this.http.get<User>(environment.API_BASE_URL +"current-user");
  }

  updateProfilCurrentUser = (userId: number | undefined, formData: FormData): Observable<any> => {
    return this.http.put<any>(environment.API_BASE_URL + `current-user/${userId}`, formData);
  }

  updatePassword = (form:NgForm): Observable<boolean> => {
    return this.http.put<boolean>(environment.API_BASE_URL + "current-user/password/change",form.value);
  }




}