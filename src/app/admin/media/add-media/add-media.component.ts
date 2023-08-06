import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-media',
  templateUrl: './add-media.component.html',
  styleUrls: ['./add-media.component.scss']
})
export class AddMediaComponent {

  object = {
    name: '',
    path: ''
  }

  @Output() mediaEvent = new EventEmitter<any>();

  addMedia(name: string, path: string) {
    this.object.name = name;
    this.object.path = path;

    this.mediaEvent.emit(this.object);
  }
}
