import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-localname',
  templateUrl: './add-localname.component.html',
  styleUrls: ['./add-localname.component.scss']
})
export class AddLocalnameComponent {
  localname:any = {};
  @Output() localnameEvent: EventEmitter<any> = new EventEmitter<any>();

  addLocalname(name: string) {
    this.localname.name = name;
    this.localnameEvent.emit(this.localname);
  }
}
