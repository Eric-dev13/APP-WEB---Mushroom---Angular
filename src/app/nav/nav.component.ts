import { Component, OnInit, Input } from '@angular/core';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';
import { AuthenticationService } from '../security/authentication.service';
import { PUBLIC_URL_GET_FILE_USER } from '../../environments/config';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(protected authenticated: AuthenticationService) { }

  readonly PUBLIC_URL_GET_FILE_USER = PUBLIC_URL_GET_FILE_USER; //constante d'environnement
  faAlignJustify = faAlignJustify; // icon Font Awesome

  ngOnInit(): void {
    
  }

  // Deconnexion
  logout(){
    this.authenticated.doLogout();
  }

}
