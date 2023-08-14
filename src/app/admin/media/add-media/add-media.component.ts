import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-media',
  templateUrl: './add-media.component.html',
  styleUrls: ['./add-media.component.scss']
})
export class AddMediaComponent {
  media:any = {};
  @Output() mediaEvent: EventEmitter<any> = new EventEmitter<any>();

  addMedia(name: string, path: string) {
    this.media.name = name;
    this.media.path = path;
    this.mediaEvent.emit(this.media);

  }
}
