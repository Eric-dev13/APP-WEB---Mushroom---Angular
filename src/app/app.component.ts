import { AfterViewInit, Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ToastComponent } from './layouts/toast/toast.component';
import { ToastService } from './services/toast-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private toastService: ToastService
  ) { }


  ngOnInit(): void {
    // Mettre à jour le titre de la page de la balise <head>
    this.titleService.setTitle("Le royaume des champignons");
    // Mettre à jour l'icône (favicon)
    // const favIconUrl = "/assets/images/icones/mushromLogo.png";
    // this.metaService.updateTag({ name: 'icon', content: favIconUrl });
  }



  // Permet au composant parent d'accèder au propriétés et méthode de l'enfant 
  @ViewChild('toastComponent') toast!: ToastComponent;

  ngAfterViewInit(): void {
    this.toastService.setToastComponent(this.toast);
  }

}
