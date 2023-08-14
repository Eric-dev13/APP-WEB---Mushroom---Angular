import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { API_BASE_URL, API_URL_GET_FILE_MUSHROOM, API_URL_GET_FILE, URL_AUTH} from '../../../environments/config';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, map, Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.scss']
})
export class AuthenticateComponent {

  // Déclaration de constantes
  readonly URL_AUTH:string = URL_AUTH;
  readonly API_BASE_URL:string = API_BASE_URL;
  readonly API_URL_GET_FILE:string = API_URL_GET_FILE + 'mushrooms/'
  readonly API_URL_GET_FILE_MUSHROOM:string = API_URL_GET_FILE_MUSHROOM;


  constructor(private http: HttpClient, 
              private router: Router, 
              private route: ActivatedRoute, ) { }

  
  currentUser = {};

  access_token!:any;

  is_auth!:boolean;

  userDetail:any;

  userRegistration:any = {
  "pseudo": "Luke",
  "firstname": "Luke",
  "lastname": "Skywalker",
  "email":"skywalker@gmail.com",
  "password": "1234",
  "avatar": "asssets/ronaldo.jpg"
}

userAuthentication: any ={
  "pseudo": "ricou",
  "email":"lanzae32@gmail.com",
  "password": "1234"
}


  ngOnInit(): void { }

  authentication(formAuth:NgForm)
  {
    // POST :  Si l'utilisateur est enregistrer dans la base de données le serveur lui renverra un token
    // a chaque fois que l'on souhaite acceder a une route privée on dois envoyer le token
    // le serveur decode le token verifie la validité de la signature puis renvoie les infos demandées
    if(formAuth.valid){
          this.http.post(this.URL_AUTH + "authenticate",formAuth.value).subscribe((res) => {
      this.access_token = res;
      sessionStorage.setItem("access_token", this.access_token.token);
      console.log(sessionStorage.getItem("access_token"));
      // redirect vers page d'accueil
      this.router.navigate(["/"]);
    });
    }
  }

  registration(formRegister:NgForm)
  {
    // POST :  findAll
    this.http.post(this.URL_AUTH + "register",formRegister.value).subscribe((res) => {
      this.access_token = res;
      sessionStorage.setItem("access_token", this.access_token);
      console.log(this.access_token.token);
      // redirect vers page d'accueil
      this.router.navigate(["/"]);
    });
  }

  getToken() {
    return sessionStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = sessionStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }

  doLogout() {
    let removeToken = sessionStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['log-in']);
    }
  }

  // Error
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => msg);
  }  

  public deconnecter(){
    localStorage.removeItem('access_token');
  }

}
