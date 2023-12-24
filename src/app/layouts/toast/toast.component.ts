import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {

  title: string = '...';
  message: string = '...';
  delai: string = '5000';
  active:string = '';

}
