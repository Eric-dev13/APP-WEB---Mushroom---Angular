import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL, API_URL_GET_FILE_MUSHROOM, API_URL_GET_FILE, URL_AUTH} from '../../../environments/config';
import { NgForm } from '@angular/forms';

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


  constructor(private http: HttpClient) { }

  userRegistration:any = {
  "pseudo": "ronaldo",
  "firstname": "ronaldo",
  "lastname": "laronaldonza2",
  "email":"ronaldo@gmail.com",
  "password": "1234",
  "avatar": "asssets/ronaldo.jpg"
}

userAuthentication: any ={
  "pseudo": "ricou",
  "email":"lanzae32@gmail.com",
  "password": "1234"
}

userDetail:any;

  ngOnInit(): void {
    
  }

  authentication(formAuth:NgForm)
  {
    // POST :  Si l'utilisateur est enregistrer dans la base de données le serveur lui renverra un token
    // a chaque fois que l'on souhaite acceder a une route privée on dois envoyer le token
    // le serveur decode le token verifie la validité de la signature puis renvoie les infos demandées
    this.http.post(this.URL_AUTH + "authenticate",formAuth.value).subscribe((res) => {
      this.userDetail = res;
      console.log(this.userDetail);
    });
  }

  registration(formRegister:NgForm)
  {
    // POST :  findAll
    this.http.post(this.URL_AUTH + "register",formRegister.value).subscribe((res) => {
      this.userDetail = res;
      console.log(this.userDetail);
    });
  }

}
