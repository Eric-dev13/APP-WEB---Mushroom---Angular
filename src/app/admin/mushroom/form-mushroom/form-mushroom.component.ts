import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { API_ADMIN_BASE_URL, PUBLIC_URL_GET_FILE_MUSHROOM } from 'src/environments/config';
import { faEdit, faTrash, faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { EdibilityInterface } from 'src/app/admin/edibility/edibility-interface';
import { MushroomInterface } from '../mushroom-interface';
import { LamellatypeInterface } from 'src/app/admin/lamellatype/lamellatype-interface';
import { MediaInterface } from '../../media/media-interface';




@Component({
  selector: 'app-form-mushroom',
  templateUrl: './form-mushroom.component.html',
  styleUrls: ['./form-mushroom.component.scss']
})
export class FormMushroomComponent implements OnInit {

  // POST
  // Déclaration de constantes
  readonly API_ADMIN_BASE_URL: string = API_ADMIN_BASE_URL;
  readonly PUBLIC_URL_GET_FILE_MUSHROOM: string = PUBLIC_URL_GET_FILE_MUSHROOM;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  faEdit = faEdit;
  faTrash = faTrash;
  faRotateLeft = faRotateLeft;

  // edibilities!: EdibilityInterface[];  // listes a charger dans les selectBox
  edibilities: any;
  lamellaTypes: any; // listes a charger dans les selectBox

  // Image a afficher lors de l'ajout d'un média.
  selectedImage: Array<String> = [];


  id_mushroom: any; // id de l'enregistrement (mushroom) transmis dans l'URL.

  // Représente la table principal (mushroom) dont la structure est représenté dans une interface.
  mushroom: MushroomInterface = {
    id: 0,
    commonname: "",
    latinname: "",
    flesh: "",
    hat: "",
    lamella: "",
    foot: "",
    habitat: "",
    comment: "",
    // lamellatype: { id: 0 }, 
    edibility: { id: 0 }, // Definit une valeur par defaut id: 0, si aucun choix dans le select alors on id:0 et on renvoie edibility: null a l'api sinon on renvoi edibility: {id: id_selected}
    localnames: [],
    medias: []
  }

  // Represente un tableau de medias.
  medias: MediaInterface[] = [];


  load() {
    // GET : findAll edibilityEntity
    this.http.get(this.API_ADMIN_BASE_URL + "edibility").subscribe({
      next: (data) => {
        console.log(data);
        this.edibilities = data;
      },
      error: (err) => console.log('Observer got an error: ' + err),
      complete: () => console.log('Actualiser')
    });

    // GET : findAll LamellatypeEntity
    this.http.get(this.API_ADMIN_BASE_URL + "lamellaType").subscribe((res) => {
      this.lamellaTypes = res;
    });

    // POST ou PUT : Si un paramètre 'id' est présent dans l'URL nous sommes en mode mise à jour (PUT) sinon ajouter (POST)
    // GET : Find By ID - le nom des propriétés de l'interface mushroom doivent correspondreavec les cles du JSON
    // 
    this.id_mushroom = this.route.snapshot.paramMap.get('id');
    if (this.id_mushroom) {
      this.http.get(this.API_ADMIN_BASE_URL + "mushroom/" + this.id_mushroom).subscribe((res) => {
        this.mushroom = res;
        console.log('update mushroom: ', this.mushroom)
      });
    }
  }

  ngOnInit(): void {
    this.load();
  }

  // Ajouter des noms - Form Emitter
  addLocalname(event: any) {
    this.mushroom?.localnames?.push({
      name: event.name
    })
  }

  // Ajouter des photos - Form Emitter
  addMedia(event: any) {
    // stocke le chemin d'acces au fichier pour l'afficher dans le front.
    this.selectedImage[this.medias.length] = URL.createObjectURL(event.file);
    // Conserve dans un tableau les infos saisies dans le formulaire.
    this.medias.push(
      {
        name: event.name,
        file: event.file,
        filename: event.filename
      });
    // puis on vide le formulaire
  }
  
  deleteMediaExistant(id: any) {
    this.http.delete(this.API_ADMIN_BASE_URL + 'media/' + id).subscribe({
      next: () => {
        console.log('Champignon supprimée: ');
        // Actualise le composant
        this.load();
      },
      error: (err) => console.log('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification')
    })
  }

  deleteNewMedia(id: any){
    this.medias.splice(id,1)
    console.log("delete media: ", id)
  }


  send(form: NgForm) {
    // Validation du formulaire
    if (form?.invalid) {
      console.log('Le formulaire est invalide.');
      return;
    }

    // si la propriété "edibility" n'est pas renseignée elles doit renvoyées NULL sinon un objet pour renseigner la cle étrangere corespondant à l'ID edibility.
    if (form.value.edibility.id === 0) {
      form.value.edibility = null;
    } else {
      form.value.edibility = { id: form.value.edibility };
    }

    // si la propriété "lamellatype" n'est pas renseignée elles doit renvoyées NULL sinon un objet pour renseigner la cle étrangere corespondant à l'ID lamellatype.
    // if (form.value.lamellatype.id === 0) {
    //   form.value.lamellatype = null;
    // } else {
    //   form.value.lamellatype = {id: form.value.lamellatype};
    // }

    // si la propriété mushroom.localnames contient des objets (collection de nom) je les transfert dans l'objet form.
    if (this.mushroom?.localnames) {
      form.value.localnames = this.mushroom?.localnames;
    }

    // si la propriété mushroom.medias contient des objets (collection de nom) je les transfert dans l'objet form.
    // if (this.mushroom?.medias) {
    //   form.value.medias = this.mushroom?.medias;
    // }

    // console.table("Form:", form.value)
    // console.log("Form Mushroom:", this.mushroom);
    // console.log("medias", this.medias);


    if (this.mushroom.id != 0) {

      // PATCH - Modification de l'enregistrement 
      this.http.patch(this.API_ADMIN_BASE_URL + 'mushroom/', form.value,).subscribe({
        next: (data) => {
          console.log('Champignon modifié: ', data);
          // Ajoute les medias via une deuxieme requete

          // redirige vers la liste
          this.router.navigate(["admin/champignon/Liste-des-champignons"]);
        },
        error: (err) => console.log('Observer got an error: ' + err),
        complete: () => console.log('Enregistrement modifié!')
      });

    } else {

      // Crée une instance de FormData pour préparer la requête multipart
      const formData: FormData = new FormData();
      
      // Parcourt chaque élément dans la liste des médias
      for (const media of this.medias) {
        // Ajoute le fichier média à FormData avec la clé 'mediasFiles'
        formData.append('mediasFiles', media.file!);
        // Ajoute le nom du média à FormData avec la clé 'mediasNames'
        formData.append('mediasNames', media.name!);
      }

      // POST - Ajoute le nouvel enregistrement sans les images via un structure JSON
      // définir le type de reponse dans la méthode http ici avec l'opérateur diamant <MushroomInterface> pour accèder aux propriétés de l 'objet renvoyé
      this.http.post<MushroomInterface>(this.API_ADMIN_BASE_URL + 'mushroom/', form.value).subscribe({
        next: (data) => {
          // Envoie une deuxième requête POST pour ajouter les médias associés 
          if (this.medias.length > 0) {
            this.http.post(this.API_ADMIN_BASE_URL + 'media/' + data.id, formData).subscribe({
              next: (data) => console.log('Medias: ', data),
              error: (err) => console.log('Observer got an error: ' + err),
              complete: () => console.log('Medias ajoutés!')
            });
          }

          // Redirige l'utilisateur vers la liste des champignons après l'ajout
          this.router.navigate(["admin/champignon/Liste-des-champignons"])
        },
        error: (err) => console.log('Observer got an error: ' + err),
        complete: () => console.log('Champignon ajouté!')
      });
    }
  }


}
