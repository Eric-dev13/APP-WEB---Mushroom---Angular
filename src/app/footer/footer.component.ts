import { Component } from '@angular/core';
import { AuthenticationService } from '../security/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(protected authenticated: AuthenticationService) { }

  // Deconnexion
  logout() {
    this.authenticated.doLogout();
  }
}
