import { Component, EventEmitter, Output } from '@angular/core';
import { MediaInterface } from '../media-interface';
import { Media, MediaFileToUpload } from 'src/app/interfaces/media.interface';

@Component({
  selector: 'app-add-media',
  templateUrl: './add-media.component.html',
  styleUrls: ['./add-media.component.scss']
})
export class AddMediaComponent {
  selectedFile!: File;
  selectedImage: any;


  media: MediaInterface={};

  @Output() mediaEvent: EventEmitter<any> = new EventEmitter<any>();

  onFileSelected(event: any) {
    // Accéder au fichier sélectionné à partir de l'événement
    this.selectedFile = event.target.files[0];

    // Afficher un aperçu ou une prévisualisation d'un fichier image 
    this.selectedImage = URL.createObjectURL(this.selectedFile);
  }

  addMedia(name: string) {
    this.media.name = name; // Nom du fichier optionnel
    this.media.file = this.selectedFile; // Stocke le fichier pour l'envoyer au back
    this.media.filename = this.selectedFile.name; // afficher le nom du fichier dans le formulaire

    // Émettre l'événement vers le composant parent
    this.mediaEvent.emit(this.media);
  }



}
