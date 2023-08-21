import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-media',
  templateUrl: './add-media.component.html',
  styleUrls: ['./add-media.component.scss']
})
export class AddMediaComponent {
  selectedFile: any;
  selectedImage: any;

  media: any = {};
  @Output() mediaEvent: EventEmitter<any> = new EventEmitter<any>();

  addMedia(name: string, path: string) {
    this.media.name = name;
    this.media.filename = path;
    this.mediaEvent.emit(this.media);
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.selectedImage = URL.createObjectURL(this.selectedFile); // Crée l'URL pour l'image sélectionnée
  }


}
