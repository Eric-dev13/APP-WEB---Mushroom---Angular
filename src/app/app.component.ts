import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {

    // Mettre à jour le titre de la page de la balise <head>
    this.titleService.setTitle("Le royaume des champignons");

    // Mettre à jour l'icône (favicon)
    // const favIconUrl = "/assets/images/icones/mushromLogo.png";
    // this.metaService.updateTag({ name: 'icon', content: favIconUrl });
     
  }

}
