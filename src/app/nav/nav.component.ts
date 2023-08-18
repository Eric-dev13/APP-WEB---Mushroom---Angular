import { Component } from '@angular/core';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  faAlignJustify = faAlignJustify;

  access_token!:string|null ;
  is_auth!:boolean;
  is_valid!:boolean;
  hasRole_admin!: boolean;
  hasRole_user!: boolean;
  userDetail!: {avatarFilename: string, pseudo: string, username:string };
   

  ngOnInit(){

    // Si le token existe
    this.access_token = sessionStorage.getItem("access_token");
    if (sessionStorage.getItem("access_token")){
      // je recupere le profil utilisateur
      this.is_auth = true;
    }
    
    this.is_auth = true;
    this.hasRole_admin = true ;
    this.hasRole_user = true ;
    this.userDetail =  {
      avatarFilename: './../../assets/images/icones/connexion.png',
      pseudo: 'Eric',
      username: 'eric'
    }
  }


}
