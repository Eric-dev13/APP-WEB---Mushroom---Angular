import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root' // Le service est disponible dans toute l'application
})
export class AuthenticationService {


  // Injection du service Router via le constructeur
  constructor(private router: Router) {}


  // Méthode pour vérifier si un utilisateur est authentifié
  isAuth(): boolean {
    // Si le token est présent, l'utilisateur est authentifié, sinon il ne l'est pas
    return this.getToken() !== null ? true : false;
  }

  doLogged(token: string) {
    this.setToken(token);
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

  // Méthode pour obtenir le token d'accès
  getToken(): String | null {
    return sessionStorage.getItem('access_token');
  }

  setToken(token: string) {
    try {
      sessionStorage.setItem("access_token", token);
      return true;
    } catch (error) {
      return false;
    }
  }

  /*
  Création d'un Service d'Authentification : Commencez par créer un service dédié à l'authentification.
    - gérer les requêtes d'inscription
    - gérer les requêtes de connexion et de déconnexion vers l'API
    - stocker et gérer le token.
  Déconnexion de l'Utilisateur : Lorsque l'utilisateur choisit de se déconnecter, vous devez supprimer le token du stockage local.
  Gestion des Erreurs : Gérez les erreurs d'authentification, comme les informations d'identification incorrectes, les expirations de token, etc. Affichez des messages d'erreur appropriés pour informer l'utilisateur de ce qui s'est passé.
  
  is_auth : je suis connecté
  is_admin : j'ai le role admin
  is_user : j'ai le role user
  */



}
