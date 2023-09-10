import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserInterface } from './user-interface';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root' // Le service est disponible dans toute l'application
})
export class AuthenticationService {

  // Injection du service Router via le constructeur
  constructor(private router: Router) { }


  // Méthode pour vérifier si un utilisateur est authentifié
  public isAuth(): boolean {
    const token = this.getToken();
    // Si le token est présent, l'utilisateur est authentifié, sinon il ne l'est pas
    return token !== null ? true : false;
  }

  public isAdmin(): boolean {
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

  public getHeaderToken(): any {
    const token = this.getToken();
    if(token) {
      return {
        headers: new HttpHeaders({
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        })
      }
    }
    return undefined;
  }

  // Après une inscription ou authentification réussi
  public doLogged(data: any): void {
    this.setToken(data.token)
    this.setUser(data.user)
    this.router.navigate([""]);
  }

  // Méthode pour effectuer la déconnexion de l'utilisateur
  public doLogout(): void {
    // Suppression du token d'accès de la session de stockage
    let removeToken: void = sessionStorage.removeItem('access_token');
    // Si la suppression est réussie, on redirige vers la page d'accueil
    if (removeToken == null) {
      this.router.navigate([""]);
    }
  }

  public getToken(): String | null {
    return sessionStorage.getItem('access_token');
  }

  private setToken(token: string) {
    sessionStorage.setItem("access_token", token);
  }

  public getUser(): UserInterface | null {
    // Récupérez la chaîne JSON du sessionStorage
    const userJSON = sessionStorage.getItem('user');
    if (userJSON) {
      // Désérialisez la chaîne JSON en un objet JavaScript
      return JSON.parse(userJSON);
    }
    return null;
  }

  public setUser(user: any): void {
    // Sérialisez l'objet utilisateur en JSON
    const userJSON = JSON.stringify(user);
    // Stockez la chaîne JSON dans le sessionStorage
    sessionStorage.setItem("user", userJSON);
  }

}
