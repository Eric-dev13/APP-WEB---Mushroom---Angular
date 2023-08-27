import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-slide-bar',
  templateUrl: './nav-slide-bar.component.html',
  styleUrls: ['./nav-slide-bar.component.scss']
})
export class NavSlideBarComponent {

  isSidebarActive: boolean = false;

    toggleSidebar() {
      console.log(this.isSidebarActive);
      this.isSidebarActive = !this.isSidebarActive;
    }
}
