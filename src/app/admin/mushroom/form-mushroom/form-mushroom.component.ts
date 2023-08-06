import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { API_ADMIN_BASE_URL } from 'src/environments/config';


@Component({
  selector: 'app-form-mushroom',
  templateUrl: './form-mushroom.component.html',
  styleUrls: ['./form-mushroom.component.scss']
})
export class FormMushroomComponent implements OnInit {

  // POST
  // Déclaration de constantes
  readonly API_ADMIN_BASE_URL: string = API_ADMIN_BASE_URL;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  edibilities: any;

  lamellaTypes: any;

  sending: any;


  // Représente la table principal
  mushroom = {
    "id": 0,
    "commonname": '',
    "latinname": '',
    "flesh": '',
    "hat": '',
    "lamella": '',
    "lamellatype": { 'id': '' },
    "foot": '',
    "habitat": '',
    "comment": '',
    "edibility": { 'id': '' },
    "medias": [{'name':'','path':''}]
  }

  // Table des noms courants regionaux 
  localnames = {
    "name": ''
  }

  // Ajouter des photos -Form Emitter
  // medias: Array<any> = []

  // addMedia(event: any) {
  //   this.medias.push({
  //     name: event.name,
  //     path: event.path
  //   })
  // }
  addMedia(event: any) {
    this.mushroom.medias.push({
      name: event.name,
      path: event.path
    })
  }


  ngOnInit(): void {
    // Requete vers api pour recupèrer edibility et afficher dans un select box 
    // GET : findAll edibilityEntity
    this.http.get(this.API_ADMIN_BASE_URL + "edibility").subscribe((res) => {
      this.edibilities = res;
      console.log(this.edibilities);
    });

    // GET : findAll LamellatypeEntity
    this.http.get(this.API_ADMIN_BASE_URL + "lamellaType").subscribe((res) => {
      this.lamellaTypes = res;
      console.log(this.lamellaTypes);
    });
  }


  send(form: NgForm) {
    if (form.value.id != 0) {
      // UPDATE 
      this.http.put(this.API_ADMIN_BASE_URL + 'mushroom/', form.value).subscribe((res) => {
        console.log('Nouveau champignon ajouté');
      });
    } else {
      // POST : Exemple de requete qui doit être envoyer vers l'api a partir du formulaire.
      // this.sending = {
      //   "commonname": 'nom commun,
      //   "latinname": 'nom latin',
      //   "flesh": 'description de la chair',
      //   "hat": 'description du chapeau',
      //   "lamella": 'description des lamelles',
      //   "lamellatype": { 'id': '5' },
      //   "foot": 'description du pied',
      //   "habitat": 'habitat',
      //   "comment": 'Quelques commentaires',
      //   "edibility": { 'id': '4' },
      //   "medias": [
      //     {
      //         "name": "essai-2",
      //         "path": "619ebf981691a506289049.jpg"
      //     }
      //   ],
      //   "localnames": [
      //      {
      //         "name": "essai-2",
      //      }
      //    ],
      // }

      console.log('mushroom: ', this.mushroom);
      console.log('formulaire: ', form.value);

      this.http.post(this.API_ADMIN_BASE_URL + 'mushroom/', this.mushroom).subscribe({
        next: (data) => console.log('Nouveau champignon ajouté'),
        error: (err) => console.log('Observer got an error: ' + err),
        complete: () => console.log('Observer got a complete notification')
      });

    }
  }
}
