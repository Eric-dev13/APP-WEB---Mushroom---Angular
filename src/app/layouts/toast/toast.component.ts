import { Component, Input } from '@angular/core';
import { TypeAlert } from 'src/app/enum/type-alert';
import { Toast } from 'src/app/interfaces/toast.interface';


@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {


  toast: Toast = {
    showStateToast: 'hide',
    title: '',
    message: '',
    typeAlert: undefined,
    delay: '5000'
  }


  // Affiche / masque  le composant toast
  showStateAndTypeAlertToast = (): string => {
    return this.toast.typeAlert + ' ' + this.toast.showStateToast;
  }

}
