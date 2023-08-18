import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { faEdit, faTrash, faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { Router, ActivatedRoute } from '@angular/router';
import { EdibilityInterface } from '../edibility-interface';
import { API_ADMIN_BASE_URL, API_URL_GET_FILE_EDIBILITY } from 'src/environments/config';

@Component({
  selector: 'app-form-edibility',
  templateUrl: './form-edibility.component.html',
  styleUrls: ['./form-edibility.component.scss']
})
export class FormEdibilityComponent implements OnInit {

  // // Déclaration de constantes
  readonly API_ADMIN_BASE_URL:string = API_ADMIN_BASE_URL;
  readonly API_URL_GET_FILE_EDIBILITY:string = API_URL_GET_FILE_EDIBILITY;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  edibility: EdibilityInterface = {
    id:0,
    name:'',
    path:''
  }; 

  id_edibility: any;

  selectedFile!: File ;
  selectedImage: string | null |undefined ;


  faEdit = faEdit;
  faTrash = faTrash;
  faRotateLeft = faRotateLeft;

  ngOnInit(): void {
    this.load();
  }

  load() {
    // Si on veux mettre à jour l'enregistrement
    this.id_edibility = this.route.snapshot.paramMap.get('id');
    if (this.id_edibility) {
      // GET : Find By ID
      this.http.get(this.API_ADMIN_BASE_URL + "edibility/" + this.id_edibility).subscribe(
        {
          next: (data) => {
            this.edibility = data;
            console.log('update mushroom: ', this.edibility)
          },
          error: (err) => console.log('Observer got an error: ' + err),
          complete: () => console.log('Observer got a complete notification')
        }
      );
    }
  }

  send(form: NgForm) {
    // Validation du formulaire
    if (form?.invalid) {
      console.log('Le formulaire est invalide.');
      return;
    }

    console.log(form.value);
    console.log(this.edibility);

    if (this.selectedFile) {
      form.value.path = this.selectedFile;
      const formData = new FormData();
      formData.append('file', form.value.path);
      console.log("formData: ", formData)
      this.http.post<any>("http://localhost:9000/api/v1/file/upload/upload/", form.value.path).subscribe(
        {
          next: (response) => console.log('Réponse : ', response),     
          error: (err) => console.error('Erreur lors du téléchargement du fichier.', err),
          complete: () => console.log('Fichier téléchargé avec succès.')
      });
    }


  //   if (this.edibility.id != 0) {
  //     // PATCH - Modification de l'enregistrement 
  //     this.http.patch(this.API_ADMIN_BASE_URL + 'edibility/', form.value).subscribe({
  //       next: (data) => {
  //         console.log('Enregistrement modifié: ', data);
  //         // redirige vers la liste
  //         this.router.navigate(["admin/edibility/liste"]);
  //       },
  //       error: (err) => console.log('Observer got an error: ' + err),
  //       complete: () => console.log('Observer got a complete notification')
  //     });
  //   } else {
  //     // POST - Ajoute le nouvel enregistrement
  //     this.http.post(this.API_ADMIN_BASE_URL + 'edibility/', form.value).subscribe({
  //       next: (data) => {
  //         console.log('Enregistrement ajouté: ', data);
  //         // redirige vers la liste
  //         this.router.navigate(["admin/edibility/liste"]);
  //       },
  //       error: (err) => console.log('Observer got an error: ' + err),
  //       complete: () => console.log('Observer got a complete notification')
  //     });
  //   }
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.selectedImage = URL.createObjectURL(this.selectedFile); // Crée l'URL pour l'image sélectionnée
    console.log("fichier sélectionné: ",this.selectedFile);
  }

}
