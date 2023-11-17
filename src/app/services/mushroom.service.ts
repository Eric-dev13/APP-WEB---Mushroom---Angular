import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL, API_ADMIN_BASE_URL } from 'src/environments/config';
import { Mushroom } from 'src/app/interfaces/mushroom.interface';
import { Mushrooms } from '../interfaces/mushrooms.interface';



/* -----------------------------------------------------*----- */
/*  ACCES PUBLIC -  LISTE ET DETAIL DES FICHES DESCRIPTIVES.   */
/* -----------------------------------------------*----------- */
@Injectable({
  providedIn: 'root'
})
export class MushroomService {
  // Déclaration de constantes
  readonly API_BASE_URL: string = API_BASE_URL;

  constructor(private http: HttpClient) { }

  /* ----------------------------------------------------------
      ACCES PUBLIQUE LISTE ET DETAIL DES FICHES DESCRIPTIVES.
   ---------------------------------------------------------- */
  findAll = (): Observable<Mushroom[]> => {
    return this.http.get<Mushroom[]>(this.API_BASE_URL + "mushroom");
  }

  findAllFilter = (limit?: number, offset?: number): Observable<Mushrooms> => {
   
    if (limit == null || limit < 0  || offset  == null || offset < 0  ) {
      return this.http.get<Mushrooms>(this.API_BASE_URL + "mushroom");
    }
    return this.http.get<Mushrooms>(this.API_BASE_URL + `mushroom?limit=${limit}&offset=${offset}`);
    
  }

  findById = (id: number): Observable<Mushroom> => {
    return this.http.get<Mushroom>(this.API_BASE_URL + "mushroom/" + id);
  }
}


/* ---------------------------------------------------------- */
/*                  ACCES SECURISE - CRUD                     */
/* ---------------------------------------------------------- */
@Injectable({
  providedIn: 'root'
})
export class MushroomAdminService {
  // Déclaration de constantes
  readonly API_ADMIN_BASE_URL: string = API_ADMIN_BASE_URL;

  constructor(private http: HttpClient) { }

  public findAll = (): Observable<Mushroom[]> => {
    return this.http.get<Mushroom[]>(this.API_ADMIN_BASE_URL + "mushroom");
  }

  public findById = (id: number): Observable<Mushroom> => {
    return this.http.get<Mushroom>(this.API_ADMIN_BASE_URL + "mushroom/" + id);
  }

  public add = (form: NgForm): Observable<Mushroom> => {
    return this.http.post<Mushroom>(this.API_ADMIN_BASE_URL + 'mushroom', form.value);
  }

  public update = (id: number, form: NgForm): Observable<Mushroom> => {
    return this.http.put<Mushroom>(this.API_ADMIN_BASE_URL + 'mushroom/' + id, form.value)
  }

  // DELETE
  public delete = (id: any): Observable<boolean> => {
    return this.http.delete<boolean>(this.API_ADMIN_BASE_URL + 'mushroom/' + id);
  }

  // Inverser la valeur de mushroom.visibility
  public invertVisibility = (id: any): Observable<boolean> => {
    return this.http.put<boolean>(this.API_ADMIN_BASE_URL + 'mushroom/publier/' + id, {});
  }

}

