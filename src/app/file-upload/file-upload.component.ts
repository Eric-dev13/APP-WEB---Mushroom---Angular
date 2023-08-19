import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm} from '@angular/forms';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  constructor(
    private http: HttpClient,
  ) { }

  selectedFile: File | undefined;

  image: any;

ngOnInit(): void {
  
}

onFileSelected(event: any) {
  if (event.target.files.length > 0) {
    this.selectedFile = event.target.files[0];
    console.log("fichier sélectionné: ", this.selectedFile);
  }
}

  send(form: NgForm) {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      this.http.post("http://localhost:9000/api/v1/upload/fileUpload", formData).subscribe(
        {
          next: (response) => console.log('Réponse : ', response),
          error: (err) => console.error('Erreur lors du téléchargement du fichier.', err),
          complete: () => console.log('Fichier téléchargé avec succès.')
        });
    }
  }

 

}
