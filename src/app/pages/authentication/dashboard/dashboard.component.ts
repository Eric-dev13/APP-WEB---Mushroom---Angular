import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  isSidebarActive: boolean = false;

  toggleSidebar() {
    console.log(this.isSidebarActive);
    this.isSidebarActive = !this.isSidebarActive;
  }
}
