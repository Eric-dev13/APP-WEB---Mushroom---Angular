import { Component, EventEmitter, Output } from '@angular/core';
import { MediaInterface } from '../media-interface';

@Component({
  selector: 'app-add-media',
  templateUrl: './add-media.component.html',
  styleUrls: ['./add-media.component.scss']
})
export class AddMediaComponent {
  selectedFile!: File;
  selectedImage: any;

  media: MediaInterface = {};
  @Output() mediaEvent: EventEmitter<any> = new EventEmitter<any>();

  addMedia(name: string) {
    this.media.name = name;
    this.media.file = this.selectedFile;
    this.media.filename = this.selectedFile.name;

    // Émettre l'événement vers le composant parent
    this.mediaEvent.emit(this.media);
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.selectedImage = URL.createObjectURL(this.selectedFile); // Crée l'URL pour l'image sélectionnée
  }



}
