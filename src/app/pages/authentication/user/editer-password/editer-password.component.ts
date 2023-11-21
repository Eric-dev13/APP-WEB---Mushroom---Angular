import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-editer-password',
  templateUrl: './editer-password.component.html',
  styleUrls: ['./editer-password.component.scss']
})
export class EditerPasswordComponent {
  
  faEye= faEye;

  togglePasswordVisibility = () => {
    const passwordInput = document.getElementById("password");

    if (passwordInput) {
      const currentType = passwordInput.getAttribute("type");
      const newType = currentType === "password" ? "text" : "password";
      passwordInput.setAttribute("type", newType);
    }
  }

  send = (form:Form) => {

  }
}
