import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm, FormBuilder, FormGroup } from '@angular/forms';
import { faEdit, faTrash, faRotateLeft, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { Router, ActivatedRoute } from '@angular/router';
import { EdibilityInterface } from '../edibility-interface';
import { API_ADMIN_BASE_URL, API_URL_GET_FILE_EDIBILITY, API_BASE_URL, PUBLIC_URL_GET_FILE_EDIBILITY } from 'src/environments/config';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-form-edibility',
  templateUrl: './form-edibility.component.html',
  styleUrls: ['./form-edibility.component.scss']
})
export class FormEdibilityComponent implements OnInit {

  // Déclaration de constantes
  readonly API_ADMIN_BASE_URL: string = API_ADMIN_BASE_URL;
  readonly API_URL_GET_FILE_EDIBILITY: string = API_URL_GET_FILE_EDIBILITY;
  readonly API_BASE_URL: string = API_BASE_URL;
  readonly PUBLIC_URL_GET_FILE_EDIBILITY: string = PUBLIC_URL_GET_FILE_EDIBILITY;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authentication: AuthenticationService
  ) { }


  edibility: EdibilityInterface = {
    id: 0,
    name: '',
    filename: ''
  };

  id_edibility: any;

  selectedFile!: File;
  selectedImage: string | null | undefined;


  faEdit=faEdit;
  faTrash=faTrash;
  faRotateLeft=faRotateLeft;
  faSquarePlus=faSquarePlus;

  
  ngOnInit(): void {
    this.load();
  }

  load() {
    // Si on veux mettre à jour l'enregistrement
    this.id_edibility = this.route.snapshot.paramMap.get('id');
    if (this.id_edibility) {
      // GET : Find By ID
      this.http.get<EdibilityInterface>(this.API_ADMIN_BASE_URL + "edibility/" + this.id_edibility, { 
        headers: new HttpHeaders({
          'Authorization': `Bearer ${this.authentication.getToken()}`,
          'Content-Type': 'application/json'
        })
      }).subscribe(
        {
          next: (data) => {
            this.edibility = data;
            console.log('Rafraichissement composant: ', this.edibility)
          },
          error: (err) => console.log('Observer got an error: ' + err),
          complete: () => console.log('Observer got a complete notification')
        }
      );
    }
  }


  send(form: NgForm) {
    // Validation du formulaire
    // if (form?.invalid) {
    //   console.log('Le formulaire est invalide.');
    //   return;
    // }

    if (this.edibility.id != 0) {
      // PATCH - Modification de l'enregistrement 
      const formData = new FormData();
      formData.append('file', this.selectedFile);
      formData.append('name', form.value.name);

      this.http.patch(this.API_ADMIN_BASE_URL + 'edibility/' + this.id_edibility, formData, { 
        headers: new HttpHeaders({
          'Authorization': `Bearer ${this.authentication.getToken()}`,
          'Content-Type': 'application/json'
        })
      }).subscribe({
        next: (response) => {
          console.log('message: ', response);
          // redirige vers la liste
          this.router.navigate(["admin/comestibilite/liste"]);
        },
        error: (err) => console.log('Observer got an error: ' + err),
        complete: () => console.log('Observer got a complete notification')
      });
    } else {
      // POST - Ajoute un nouvel enregistrement 
      if (this.selectedFile) {
        const formData = new FormData();
        formData.append('file', this.selectedFile);
        formData.append('name', form.value.name);

        console.log("formData: ", formData)

        this.http.post(this.API_ADMIN_BASE_URL + "edibility/", formData, { 
          headers: new HttpHeaders({
            'Authorization': `Bearer ${this.authentication.getToken()}`,
            'Content-Type': 'application/json'
          })
        }).subscribe(
          {
            next: (response) => {
              console.log('message: ', response);
              // redirige vers la liste
              this.router.navigate(["admin/comestibilite/liste"]);
            },
            error: (err) => console.error('Erreur lors du téléchargement du fichier.', err),
            complete: () => console.log('Fichier téléchargé avec succès.')
          });
      } else {
        console.log('Le formulaire est invalide.');
      }
    }
  }

  onFileSelected(event: any) {
    // Mettre le contenu de l'image dans le composant
    // "uploadForm" (pour afficher le nom du fichier)
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
      this.selectedImage = URL.createObjectURL(this.selectedFile); // Crée l'URL pour l'image sélectionnée
      console.log("fichier sélectionné: ", this.selectedFile);
    }
  }


}
