import { Component } from '@angular/core';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  faAlignJustify = faAlignJustify;

  is_auth!: boolean;
  hasRole_admin!: boolean;
  hasRole_user!: boolean;
  userDetail!: {avatarFilename: string, pseudo: string, username:string };
   

  ngOnInit(){
    this.is_auth = true;
    this.hasRole_admin = true ;
    this.hasRole_user = false ;
    this.userDetail =  {
      avatarFilename: './../../assets/images/icones/connexion.png',
      pseudo: 'Eric',
      username: 'eric'
    }
  }

}
