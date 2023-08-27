import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { API_ADMIN_BASE_URL, PUBLIC_URL_GET_FILE_MUSHROOM } from 'src/environments/config';
import { faEdit, faTrash, faRotateLeft, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { EdibilityInterface } from 'src/app/admin/edibility/edibility-interface';
import { MushroomInterface } from '../mushroom-interface';
import { LamellatypeInterface } from 'src/app/admin/lamellatype/lamellatype-interface';
import { MediaInterface } from '../../media/media-interface';
import { LocalnameInterface } from '../../localname/localname-interface';




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
  faSquarePlus=faSquarePlus;

  id_mushroom: any; // id de l'enregistrement (mushroom) transmis dans l'URL.

  edibility: EdibilityInterface = {
    id: 0
  };
  lamellatype!: LamellatypeInterface;

  edibilities: EdibilityInterface[] = []; // Represente la listes des choix (comestible ou pas) a charger dans les selectBox
  lamellaTypes: LamellatypeInterface[] = []; // Represente la listes des choix (type de lamelles) a charger dans les selectBox

  medias: MediaInterface[] = []; // Represente un tableau de medias a ajouter et lier avec le nouvel enregistrement de la table principal

  selectedImage: Array<String> = [];  // Image a afficher sur la page web lors de la selection du fichier via le formulaire

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
    //lamellatype: { id: 0 }, 
    edibility: { id: 0 }, // Definit une valeur par defaut id: 0, si aucun choix dans le select alors on id:0 et on renvoie edibility: null a l'api sinon on renvoi edibility: {id: id_selected}
    localnames: [],
    medias: []
  }


  load() {
    // GET []: Retourne un tableau edibilityEntity
    this.http.get<EdibilityInterface[]>(this.API_ADMIN_BASE_URL + "edibility").subscribe({
      next: (data) => {
        this.edibilities = data;
        console.log(data);
      },
      error: (err) => console.log('Observer got an error: ' + err),
      complete: () => console.log('Actualiser')
    });

    // GET []: Retourne un tableau  LamellatypeEntity
    this.http.get<LamellatypeInterface[]>(this.API_ADMIN_BASE_URL + "lamellaType").subscribe({
      next: (data) => {
        this.lamellaTypes = data;
        console.log(data);
      },
      error: (err) => console.log('Observer got an error: ' + err),
      complete: () => console.log('Actualiser')
    });

    // POST ou PUT : Si un paramètre 'id' est présent dans l'URL nous sommes en mode mise à jour (PUT) sinon ajouter (POST)
    this.id_mushroom = this.route.snapshot.paramMap.get('id');
    if (this.id_mushroom) {
      // GET : Find By ID - le nom des propriétés de l'interface mushroom doivent correspondre avec les cles du JSON renvoyé par l'API
      this.http.get<MushroomInterface>(this.API_ADMIN_BASE_URL + "mushroom/" + this.id_mushroom).subscribe({
        next: (data) => {
          /* 
          Pour eviter que TS remonte des erreurs (les champs ne peuvent etre vide) lors de la liaison avec les champs de formulaire (ngModel) 
          Si il n'y a pas d'enregistrement associée (propriété edibility ==null) on renvoie un objet edibility = {id:0}
          */
          if(!data.edibility) { 
            data.edibility = {id:0};
          }
          this.mushroom = data;
          console.log('put mushroom: ', this.mushroom)
        },
        error: (err) => console.log('Observer got an error: ' + err),
        complete: () => console.log('fiche n° ' + this.id_mushroom + ' chargée!')
      });
    }
  }

  ngOnInit(): void {
    this.load();
  }

  // Ajouter des noms - Form Emitter
  addLocalname(localname: LocalnameInterface) {
    if(localname.name){
          this.mushroom?.localnames?.push({
      name: localname.name
    })
    }
  }

  // Ajouter des photos - Form Emitter
  addMedia(media: MediaInterface) {
    if(media.file) {
          // stocke le chemin d'acces au fichier pour l'afficher dans le front.
    this.selectedImage[this.medias.length] = URL.createObjectURL(media.file!);
    // Conserve dans un tableau les infos saisies dans le formulaire.
    this.medias.push(
      {
        name: media.name,
        file: media.file,
        filename: media.filename
      });
    // puis on vide le formulaire
    }

  }

  send(form: NgForm) {
    // Validation du formulaire
    if (form?.invalid) {
      console.log('Le formulaire est invalide.');
      return;
    }

    // CREE UNE INSTANCE DE FORM DATA POUR PREPARER LA REQUETE MULTIPART
    const formData: FormData = new FormData();
    // Parcours chaque élémentS dans la liste des médias ajoutés à partir du formulaire
    for (const media of this.medias) {
      // Ajoute le fichier média à FormData avec la clé 'mediasFiles'
      formData.append('mediasFiles', media.file!);
      // Ajoute le nom du média à FormData avec la clé 'mediasNames'
      formData.append('mediasNames', media.name!);
    }

    /* Si la propriété "edibility" n'est pas renseignée (option choisir... du select) elles doit renvoyées NULL (cle etrangere dans mushroom), 
        Si la référence existe on doit renvoyer un objet pour renseigner la cle étrangere corespondant à la cle primaire edibility. */
    if (form.value.edibility === 0) {
      form.value.edibility = null;
    } else {
      form.value.edibility = {id: form.value.edibility};
    }

    // si la propriété "lamellatype" n'est pas renseignée elles doit renvoyées NULL sinon un objet pour renseigner la cle étrangere corespondant à l'ID lamellatype.
    // if (form.value.lamellatype.id === 0) {
    //   form.value.lamellatype = null;
    // } else {
    //   form.value.lamellatype = {id: form.value.lamellatype};
    // }

    // si la propriété mushroom.localnames contient des objets (collection de nom) je les transfert dans l'objet form.
    if (this.mushroom!.localnames) {
      form.value.localnames = this.mushroom!.localnames;
    }

    // PATCH - MODE UPDATE (modifier un enregistrement existant )
    if (this.mushroom!.id != 0) {
      this.http.patch<MushroomInterface>(this.API_ADMIN_BASE_URL + 'mushroom/' + this.id_mushroom, form.value).subscribe({
        next: (data) => {
          console.log('Champignon modifié: ', data);
          // Envoie une deuxième requête POST avec l'ID de l'enregistrement champignon correspondant pour ajouter les médias associés 
          if (this.medias.length > 0) {
            this.http.post(this.API_ADMIN_BASE_URL + 'media/' + this.id_mushroom, formData).subscribe({
              next: (data) => console.log('Medias: ', data),
              error: (err) => console.log('Observer got an error: ' + err),
              complete: () => console.log('Medias ajoutés!')
            });
          }

          // redirige vers la liste
          this.router.navigate(["admin/champignon/Liste-des-champignons"]);
        },
        error: (err) => console.log('Observer got an error: ' + err),
        complete: () => console.log('Enregistrement modifié!')
      });

    } else {

      // POST - MODE CREATE (ajouter un enregistrement en 2 étapes ) 
      // 1 - requete pour ajouter une entrée dans la table principal et les tables satellites, données transmises en JSON dans le corps de la requete.
      // 2 - requete pour table media avec form data pour l'envoi des fichiers images.


      // définir le type de reponse dans la méthode http ici avec l'opérateur diamant <MushroomInterface> pour accèder aux propriétés de l 'objet renvoyé
      this.http.post<MushroomInterface>(this.API_ADMIN_BASE_URL + 'mushroom/', form.value).subscribe({
        next: (data) => {
          // Envoie une deuxième requête POST avec l'ID de l'enregistrement champignon correspondant pour ajouter les médias associés 
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

  deleteNewMedia(id: any) {
    console.log("Va supprimer le media: ", id, this.medias[id]);
    // supprime 1 élément à partir de l'index défini par l'id
    this.medias.splice(id, 1);

  }

}
