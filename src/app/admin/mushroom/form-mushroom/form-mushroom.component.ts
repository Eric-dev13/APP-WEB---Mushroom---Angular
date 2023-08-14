import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { API_ADMIN_BASE_URL } from 'src/environments/config';
import { EdibilityInterface } from 'src/app/admin/edibility/edibility-interface';
import { MushroomInterface } from '../mushroom-interface';




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


  edibilities: any;  // listes a charger dans les selectBox
  lamellaTypes: any; // listes a charger dans les selectBox


  id_mushroom: any;

  // Représente la table principal (mushroom) dont la structure est représenté dans une interface.
  // mushroom: MushroomInterface = {
  mushroom: any = {
    id: 0,
    commonname: "",
    latinname: "",
    flesh: "",
    hat: "",
    lamella: "",
    foot: "",
    habitat: "",
    comment: "",
    lamellatype: {id:0},
    edibility: {id:0},
    localnames: [],
    medias: []
  }


  reaload() {
    // Requete vers api pour recupèrer edibility et afficher dans un select box 
    // GET : findAll edibilityEntity
    this.http.get(this.API_ADMIN_BASE_URL + "edibility").subscribe((res) => {
      this.edibilities = res;
    });

    // GET : findAll LamellatypeEntity
    this.http.get(this.API_ADMIN_BASE_URL + "lamellaType").subscribe((res) => {
      this.lamellaTypes = res;
    });

    // POST ou PUT : Si un paramètre 'id' est présent dans l'URL nous sommes en mode mise à jour (PUT) sinon ajouter (POST)
    this.id_mushroom = this.route.snapshot.paramMap.get('id');
    // console.log('id_mushroom: ',this.id_mushroom)
    if (this.id_mushroom) {
      // GET : Find By ID
      this.http.get(this.API_ADMIN_BASE_URL + "mushroom/" + this.id_mushroom).subscribe((res) => {
        this.mushroom = res;
        // console.log('update mushroom: ',this.mushroom)
      });
    }
  }


  ngOnInit(): void {
    this.reaload();
  }

  // Ajouter des noms - Form Emitter
  addLocalname(event: any) {
    this.mushroom.localnames?.push({
      name: event.name
    })
  }

  // Ajouter des photos - Form Emitter
  
  addMedia(event: any) {
    this.mushroom.medias?.push({
      name: event.name,
      path: event.path
    })
  }


  send(form: NgForm) {
    // Validation du formulaire
    if (form.invalid) {
      console.log('Le formulaire est invalide.');
      return;
    }

    // si la propriété "edibility" n'est pas renseignée elles doit renvoyées NULL sinon un objet pour renseigner la cle étrangere corespondant à l'ID edibility.
    if (this.mushroom.edibility?.id === 0){ 
      form.value.edibility = null;
    } else {
      form.value.edibility = {id:form.value.edibility};
    }
    // si la propriété "lamellatype" n'est pas renseignée elles doit renvoyées NULL sinon un objet pour renseigner la cle étrangere corespondant à l'ID lamellatype.
    if (this.mushroom.lamellatype?.id === 0) {
      form.value.lamellatype = null;
    } else {
      form.value.lamellatype =  {id:form.value.lamellatype};
    }

    // si la propriété mushroom.localnames contient des objets (collection de nom) je les transfert dans l'objet form.
    if (this.mushroom.localnames.length > 0) {
      form.value.localnames = this.mushroom.localnames;
    }

    // si la propriété mushroom.medias contient des objets (collection de nom) je les transfert dans l'objet form.
    if (this.mushroom.medias.length > 0) {
      form.value.medias = this.mushroom.medias;
    }

    console.table("Form:", form.value)
    console.table("Form Mushroom:", this.mushroom);

    if (this.mushroom.id != 0) {
      // PATCH - Modification de l'enregistrement 
      this.http.patch(this.API_ADMIN_BASE_URL + 'mushroom/', form.value).subscribe({
        next: (data) => {
          console.log('Champignon modifié: ', data);
          this.router.navigate(["admin/champignon/Liste-des-champignons"]);
        },
        error: (err) => console.log('Observer got an error: ' + err),
        complete: () => console.log('Observer got a complete notification')
      });
    } else {
      // POST - Ajoute le nouvel enregistrement
      this.http.post(this.API_ADMIN_BASE_URL + 'mushroom/', form.value).subscribe({
        next: (data) => {
          console.log('Champignon ajouté: ', data);
          //this.router.navigate(["admin/champignon/Liste-des-champignons"]);
        },
        error: (err) => console.log('Observer got an error: ' + err),
        complete: () => console.log('Observer got a complete notification')
      });
    }
  }


}
