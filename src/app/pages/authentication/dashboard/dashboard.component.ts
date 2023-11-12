import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(protected auth: AuthenticationService) { }

  isSidebarActive: boolean = false;

  toggleSidebar() {
    console.log(this.isSidebarActive);
    this.isSidebarActive = !this.isSidebarActive;
  }
}
