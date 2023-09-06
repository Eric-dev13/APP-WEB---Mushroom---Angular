import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserInterface } from './user-interface';


@Injectable({
  providedIn: 'root' // Le service est disponible dans toute l'application
})
export class AuthenticationService {

  // Injection du service Router via le constructeur
  constructor(private router: Router) { }


  // Méthode pour vérifier si un utilisateur est authentifié
  isAuth(): boolean {
    const token = this.getToken();
    // Si le token est présent, l'utilisateur est authentifié, sinon il ne l'est pas
    return token !== null ? true : false;
  }

  isAdmin(): boolean {
    // Récupère l'objet utilisateur à partir du session storage
    const user = this.getUser();
    // Vérifie si un utilisateur a été récupéré
    if (user) {
      // Utilise Array.some() pour vérifier si au moins un rôle a l'autorité "ADMIN"
      return user.roles.some(role => role.authority === "ADMIN");
    }
    // Si aucun utilisateur n'a été récupéré ou si l'utilisateur n'a pas le rôle "ADMIN", retourne false
    return false;
  }

  // Après une inscription ou authentification réussi
  doLogged(data: any) {
    this.setToken(data.token)
    this.setUser(data.user)
    this.router.navigate([""]);
  }

  // Méthode pour effectuer la déconnexion de l'utilisateur
  doLogout(): void {
    // Suppression du token d'accès de la session de stockage
    let removeToken: void = sessionStorage.removeItem('access_token');

    // Si la suppression est réussie, on redirige vers la page d'accueil
    if (removeToken == null) {
      this.router.navigate([""]);
    }
  }

  getToken(): String | null {
    return sessionStorage.getItem('access_token');
  }

  setToken(token: string) {
    sessionStorage.setItem("access_token", token);
  }

  getUser(): UserInterface | null {
    // Récupérez la chaîne JSON du sessionStorage
    const userJSON = sessionStorage.getItem('user');
    if (userJSON) {
      // Désérialisez la chaîne JSON en un objet JavaScript
      return JSON.parse(userJSON);
    }
    return null;
  }

  setUser(user: any) {
    // Sérialisez l'objet utilisateur en JSON
    const userJSON = JSON.stringify(user);

    // Stockez la chaîne JSON dans le sessionStorage
    sessionStorage.setItem("user", userJSON);
  }

}
