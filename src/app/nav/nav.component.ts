import { Component, OnInit } from '@angular/core';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';
import { AuthenticationService } from '../security/authentication.service';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(protected authenticated: AuthenticationService) { }

  faAlignJustify = faAlignJustify;

 
  isAuthenticated!: boolean; // utilisateur authentifié == token dans le session storage
  access_token!: string | null; // Récupère et transmettre le jeton dans l'en tete de la requete pour accèder aux routes sécurisées.

  userDetail!: { avatarFilename: string, pseudo: string, username: string };  // Données personnelles de l'utilisateur connecté.

  /// Détermine le role accordé a l'utilisateur
  isAdmin!: boolean;
  isUser!: boolean;



  ngOnInit() {
    // this.isAuthenticated = this.authentication.isAuth();
  

    if (this.authenticated) {
      console.log("L'utilisateur est authentifié.");
    } else {
      console.log("L'utilisateur n'est pas authentifié.");
    }

    this.isAdmin = true;
    this.isUser = true;
    this.userDetail = {
      avatarFilename: 'http://localhost:9000/upload/users/61c6411de4211620488497.png',
      pseudo: 'Eric',
      username: 'eric'
    }
  }

  // Deconnexion
  logout(){
    this.authenticated.doLogout();
  }


}
