# DOCUMENTATION AUGULAR



## Installation

Installer `Node Js` pour bénéficier du gestionnaire de package`npm`

`ng new nom-du-projet --style=scss --skip-tests=true --routing`



## Version d'angular

````
ng v
````



## Démarrage du serveur

localhost:4200

````
ng serve --open
OU
nmp start
````



## Génère et/ou modifie des fichiers

https://angular.io/cli/generate#interface-command

````
ng generate component [name] // ng generate c [name]

// Mettre a disposition de méthode pour les traitements
// Exemple :CRUD
ng generate service [name] // ng generate s [name]

// Data Acces Object - Mapping des objects
ng generate interface [name] [type] // ng generate i [name] [type]

ng generate enum [name] // ng generate e [name]
  
ng generate environments

ng generate guard [name] // ng generate g [name]

ng generate interceptor [name]
     
ng generate class [name]

ng generate module [name]
````



## Création d'une interface

````
ng generate interface [name] [type]

// ex: ng g i user interface
````



## Variables d' environnement

`ng generate environments` 

L'utilisation de constantes pour stocker les URL de base et les URL spécifiques dans un fichier de configuration comme `config.ts` présente plusieurs avantages :

1. **Facilité de maintenance :** En regroupant toutes les URL en un seul endroit, il est plus facile de les gérer et de les mettre à jour en cas de besoin. Cela réduit le risque d'erreurs dues à des URL incorrectes ou mal orthographiées dans différentes parties de votre application.

2. **Réutilisabilité :** En stockant les URL en tant que constantes, vous pouvez les réutiliser dans tout le code de votre application. Cela permet de garantir la cohérence des URL utilisées dans différentes parties de votre application, ce qui facilite la maintenance et la compréhension du code.

3. **Clarté et lisibilité :** L'utilisation de noms de constantes significatifs pour les URL rend votre code plus lisible et compréhensible. Plutôt que d'avoir des URL directement dans le code, les noms de constantes fournissent une description concise de ce que chaque URL représente.

4. **Gestion centralisée des changements :** Si vous devez changer une URL, vous n'avez qu'à la modifier dans le fichier de configuration `config.ts`, plutôt que de rechercher toutes les occurrences de cette URL dans le code. Cela simplifie la gestion des changements et réduit les risques d'erreurs.

5. **Sécurité :** En utilisant des constantes pour stocker les URL, vous évitez d'exposer directement les URL sensibles ou spécifiques à l'application dans le code source distribué. Cela peut contribuer à la sécurité de votre application.

En résumé, l'utilisation de constantes pour gérer les URL dans un fichier de configuration centralisé améliore la cohérence, la maintenance, la lisibilité et la sécurité de votre code. C'est une pratique recommandée pour la gestion des URL dans les applications Web.

````
// config.ts
export const API_BASE_URL = 'http://localhost:9000/api/v1/';

export const API_ADMIN_BASE_URL =  API_BASE_URL +'admin/';

export const API_URL_AUTH = API_BASE_URL + 'auth/';

// Serveur de fichiers, peux être sécurisé.
export const API_URL_GET_FILE_MUSHROOM = API_BASE_URL + 'upload/mushrooms/';
export const API_URL_GET_FILE_EDIBILITY = API_BASE_URL + 'upload/edibility/';
export const API_URL_GET_FILE_LAMELLATYPE = API_BASE_URL + 'upload/lamellatype/';
export const API_URL_GET_FILE_USER = API_BASE_URL + 'upload/users/';

// Acces publique
export const PUBLIC_BASE_URL = 'http://localhost:9000/upload/';
export const PUBLIC_URL_GET_FILE_MUSHROOM = PUBLIC_BASE_URL + 'mushrooms/';
export const PUBLIC_URL_GET_FILE_EDIBILITY = PUBLIC_BASE_URL + 'edibility/';
export const PUBLIC_URL_GET_FILE_LAMELLATYPE = PUBLIC_BASE_URL + 'lamellatype/';
export const PUBLIC_URL_GET_FILE_USER = PUBLIC_BASE_URL + 'users/';
````



## BOOTSTRAP

### Installation Bootstrap widgets - angular

https://ng-bootstrap.github.io/#/getting-started

````
ng add @ng-bootstrap/ng-bootstrap
````

### Installation classique Bootstrap

````
 npm i bootstrap
````

#### Paramètrage

**Ajouter dans le fichier `angular.json` les liens vers les fichiers CSS et JS**

````
...
"options": {
    "outputPath": "dist/mushroom-angular",
    "index": "src/index.html",
    "main": "src/main.ts",
    "polyfills": [
      "zone.js"
    ],
    "tsConfig": "tsconfig.app.json",
    "inlineStyleLanguage": "scss",
    "assets": [
      "src/favicon.ico",
      "src/assets/images/icones/mushromLogo.ico",
      "src/assets"
    ],
    "styles": [
      "src/styles.scss",
      "node_modules/bootstrap/dist/css/bootstrap.min.css"
    ],
    "scripts": ["node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"]
  },
  ...
````

![image-20230722232411952](.\assets.readme\image-20230722232411952.png)

#### Ou bien importer Bootstrap dans le fichier `styles.scss`

````
// styles.scss

/* Importing Bootstrap SCSS file. */
@import 'bootstrap/scss/bootstrap';
````



## Material Angular 

```bash
ng add @angular/material
```

```ts
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule ({
  imports: [
    MatSlideToggleModule,
  ]
})
class AppModule {}
```

````
ng serve
````

​      

## SASS

**Importation de Fichiers SCSS Globaux** : Pour importer des fichiers SCSS globaux dans toute l'application, vous pouvez le faire à partir du fichier `styles.scss` situé dans le répertoire `src` de votre projet. Tous les fichiers SCSS que vous importez dans `styles.scss` seront disponibles dans l'ensemble de votre application.

**Utilisation de SCSS dans les Composants** : Lorsque vous créez des styles pour un composant spécifique, vous pouvez  utiliser les fonctionnalités avancées de SCSS telles que les variables,  les mixins, les fonctions, etc. directement dans le fichier `my-component.component.scss`.

**Importer le Fichier SCSS** : Dans votre fichier principal SCSS (par exemple, `styles.scss`), vous pouvez importer le fichier SCSS de la dépendance en utilisant la directive `@import`.

Le préfixe `~` est utilisé pour indiquer à Angular de rechercher la dépendance dans le dossier `node_modules`.



## FONTAWESOME

### Installation

```
$ npm install @fortawesome/fontawesome-svg-core
$ npm install @fortawesome/free-solid-svg-icons
# See Compatibility table below to choose a correct version
$ npm i @fortawesome/angular-fontawesome
```

### Utilisation

Ajouter `FontAwesomeModule` aux `imports` dans `src/app/app.module.ts`:

````
// src/app/app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
++ import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    BrowserModule,
    ++ FontAwesomeModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
````

````
// src/app/nav/nav.component.ts

import { Component } from '@angular/core';
++ import { faCoffee } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  ++ faCoffee = faCoffee;
}
````



## Rafraichissement d'un composant de la page

Pour actualiser une page sans devoir la recharger  il suffit de modifier les données et angular regénère le bloc incriminé



## SYMBOLES

En Angular, **le symbole `?`** est utilisé pour définir une variable en option (déclarer une propriété facultative) dans des modèles de liaison (templates) lorsque vous traitez avec des propriétés potentiellement nulles ou indéfinies. Cette fonctionnalité est appelée le "safe navigation operator" ou "Elvis operator". Il vous permet d'accéder à une propriété d'un objet tout en évitant des erreurs si l'objet lui-même ou la propriété que vous essayez d'accéder est nul(le) ou indéfini(e).

En Angular, **le symbole `!`** est utilisé pour indiquer au compilateur TypeScript qu'une variable est garantie de ne pas être nulle (non-nullable). Cela permet d'éviter les erreurs de compilation potentielles liées aux valeurs nulles ou indéfinies.



## Directives **Structurales** 

1. `*ngIf`: Rendu conditionnel.
2. `*ngFor`: Répétition d'éléments pour chaque élément d'une liste.
3. `*ngSwitch`: Sélection de modèles en fonction d'une expression.

### ngIf

La directive `ngIf` en Angular permet de conditionner l'affichage d'éléments HTML en fonction d'une expression. Si l'expression est vraie, l'élément est rendu dans le DOM ; sinon, il est retiré.

Exemple :

```
html
<div *ngIf="isUserLoggedIn">
  Contenu visible uniquement si l'utilisateur est connecté.
</div>
```

Dans cet exemple, la `<div>` est affichée seulement si la variable `isUserLoggedIn` est évaluée à `true`.

### ngFor

`*ngIf` est une directive Angular permettant de conditionner l'affichage d'éléments HTML. Si l'expression fournie est vraie, l'élément est affiché ; sinon, il est masqué.

Exemple :

```
html
<p *ngIf="isLoggedIn">Bienvenue!</p>
```

Dans cet exemple, le paragraphe est affiché uniquement si la variable `isLoggedIn` est évaluée à `true`.



L’élément <ng-template> d’Angular définit un modèle qui n’est pas rendu par défaut.
Notez que si vous encapsulez du contenu dans un <ng-template> sans demander à Angular de le rendre, ce contenu n’apparaîtra pas sur une page.



## Directives d'Attributs 

1. `[ngClass]`: Application dynamique de classes CSS.
2. `[ngStyle]`: Application dynamique de styles CSS.
3. `[attr.attribute-name]`: Définition dynamique d'attributs HTML.



## Directives pour les Formulaires 

1. `[(ngModel)]`: Liaison bidirectionnelle pour les éléments de formulaire.
2. `[formControl]`: Liaison à un objet `FormControl`.
3. `[formGroup]`: Liaison à un objet `FormGroup`.





## ROUTAGE

### Naviguer entre les URLs

````
// src\app\app-routing.module.ts

const routes: Routes = [
  { path: "", component: HomeComponent }, // Ex route par défaut (page d'accueil),
  ...
]
````

En configurant l'intégralité du `Routing` de l'application dans le module `AppRoutingModule`, on serait amené à **importer tous les modules de l'application avant son démarrage**. A titre d'exemple, plus l'application sera riche, plus la page d'accueil sera lente à charger par effet de bord.

### Déléguer la gestion du "Routing" à module.

Le module de "Routing" `AppRoutingModule` peut **déléguer la gestion du "Routing" d'une partie de l'application à un autre module**. Ce module "Lazy Loaded" sera donc **chargé de façon asynchrone à la visite des "routes" dont il est en charge**.

````
ng generate module nom_module --route url_dans_app-routing_parent --module app.module
````

````
// src\app\app-routing.module.ts

const routes: Routes = [
	// ROUTES PUBLIQUES
      ...
      { path: "", loadChildren: () => import('./pages/mushroom/mushroom.module').then(m => m.MushroomModule) },
     ...
````

![image-20230910140216071](.\assets.readme\image-20230910140216071.png)

````
// src\app\pages\mushroom\mushroom.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MushroomRoutingModule } from './mushroom-routing.module';
import { MushromComponent } from './mushroom/mushroom.component';
import { MushroomsComponent } from './mushrooms/mushrooms.component';

@NgModule({
  declarations: [
    MushromComponent,
    MushroomsComponent
  ],
  imports: [
    CommonModule,
    MushroomRoutingModule
  ]
})
export class MushroomModule { 

}
````

````
// src\app\pages\mushroom\mushroom-routing.module.ts


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MushroomsComponent } from './mushrooms/mushrooms.component';
import { MushromComponent } from './mushroom/mushroom.component';

const mushroomRoute: Routes = [
  { path: "guide-des-champignons", component: MushroomsComponent },
  { path: "champignon/:id", component: MushromComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(mushroomRoute)],
  exports: [RouterModule],
})
export class MushroomRoutingModule { }
````

### Redirection

````
import { Router, ActivatedRoute } from '@angular/router';
...
constructor(private router: Router, private route: ActivatedRoute) { }
...
this.router.navigate(['admin/champignons/Liste-des-champignons']);
````



## CYCLE DE VIE des composants

1. Elle sera déclenchée une seule fois.
2. `ngOnInit()`: déclenchée après l’exécution du constructeur. Elle permet d’initialiser le composant avec le 1er affichage des données de la vue ayant un *binding* avec des propriétés de la classe du composant. Cette *callback* est déclenchée une seule fois à l’initialisation du composant même si `ngOnChanges()` n’est pas déclenchée.
3. `ngDoCheck()` permet d’indiquer des changements si Angular ne les a pas détecté.
4. `ngAfterContentInit()` est déclenchée à l’initialisation après [la projection de contenu](https://cdiese.fr/angular-child-component/#angular_child_component-content_projection). Elle est déclenchée même s’il n’y a pas de contenu à projeter.
5. `ngAfterContentChecked()`: déclenchée après la détection de changement dans [le contenu projeté](https://cdiese.fr/angular-child-component/#angular_child_component-content_projection). Cette *callback* est déclenchée même s’il n’y a pas de projection de contenu.
6. `ngAfterViewInit()`: déclenchée après l’initialisation de la vue du composant et après l’initialisation de la vue des composants enfant.
7. `ngAfterViewChecked()` est déclenchée après détection d’un changement dans la vue du composant et dans la vue des composants enfant.
8. `ngOnDestroy()` est déclenchée avant la destruction du composant.

A chaque détection de changements, les *callbacks* déclanchées sont, dans l’ordre:

1. `ngOnChanges()` si les paramètres en entrée du composant sont modifiés.
2. `ngDoCheck()`
3. `ngAfterContentChecked()` est déclenchée même s’il n’y a pas de contenu projeté.
4. `ngAfterViewChecked()`.



## FORMULAIRE ( ngForm ) - REQUETE HTTP

Exporte les fournisseurs et directives requis pour les formulaires  pilotés par modèle, les rendant disponibles pour l’importation par les  NgModules qui importent ce module.

````
// src\app\app.module.ts

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Gestion de formulaire lié a ngModel
````

### HttpClient - Envoi / réception de requêtes http

Declare `HttpClientModule` dans `src\app\app.module.ts`

````
// src\app\app.module.ts

...
//Request vers l'api
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
````

### FormData - Uploadé des fichiers

````
// Crée une instance de FormData pour préparer la requête multipart
      const formData: FormData = new FormData();
      // Parcourt chaque élément dans la liste des médias
      for (const media of this.medias) {
        // Ajoute le fichier média à FormData avec la clé 'mediasFiles'
        formData.append('mediasFiles', media.file!);
        // Ajoute le nom du média à FormData avec la clé 'mediasNames'
        formData.append('mediasNames', media.name!);
      }
````

### JSON - envoyer des données au format texte

#### Exemple avec le composant `register`

#####  Création d'un formulaire puis envoi de la requête vers l'api et traitement de la réponse

Le formulaire écoute l'évènement `ngSubmit` et le bouton de soumission du formulaire doit être de `type "submit"`.

les Input doivent avoir la directive `ngModel` pour binder (lier les données entre le fichier ts et le fichier html du composant) et posséder un attribut `name`.

HTML

````
<form #formRegister="ngForm" (ngSubmit)="registration(formRegister)">
    <div class="mb-3">
        <label for="pseudo" class="form-label">Pseudo</label>
        <input ngModel name="pseudo" type="text" placeholder="Entrez votre pseudo">
    </div>

    <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input ngModel name="email" type="email" placeholder="Entrez votre email">
    </div>
    <small class="text-danger" *ngIf="errors['email']">{{ errors['email'] }}</small>

    <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input ngModel name="password" type="password" placeholder="Entrez votre mot de passe">
    </div>
    <small class="text-danger" *ngIf="errors['password']">{{ errors['password'] }}</small>

    <div class="mb-3">
        <input type="submit" value="M'inscrire">
    </div>
</form>
````

Lors de la soumission du formulaire une méthode est exécutée.

TS

````
...
registration = (formRegister: NgForm) => {
    // POST :  findAll
    console.log(formRegister.value);
    if (formRegister.valid) {
      this.authenticationService.registration(formRegister).subscribe({
        next: (data) => {
          this.toastService.showExpiredSessionToast(
            "INSCRIPTION",
            `Bienvenue ${formRegister.value.email} !`,
            TypeAlert.SUCCESS,
            2000
          );
          // console.log('Utilisateur: ', data.user);
          // console.log('token: ', data.token);
          // Enregistre le token et redirige vers la page d'acceuil
          this.authenticationService.doLogged(data);
        },
        error: (errors: Error) => {
          //console.log('Observer got an error: ', errors);
          this.checkDataConstraints(errors);
        },
        complete: () => console.log('Observer got a complete notification')
      });
    }
  }

  checkDataConstraints = (err: any) => {
    this.emptyErrors();
    if (err.error) {
      for (const fieldName in err.error) {
        if (err.error.hasOwnProperty(fieldName)) {
          // Mise à jour de la structure de données "errors" avec les messages d'erreur
          // errors: { [key: string]: string } = {};
          this.errors[fieldName] = err.error[fieldName];
        }
      }
    }
  }
  ...
````

SERVICE

````
...
  // REGISTER
  public registration = (formRegister: NgForm) => {
    return this.http.post<any>(this.API_URL_AUTH + "register", formRegister.value);
  }
  
    // Après une inscription ou authentification réussi
  public doLogged = (data: any): void => {
    this.setToken(data.token)
    this.setUser(data.user)
    this.router.navigate(["/"]);
  }

...
````

#### VALIDATEUR DE CHAMP COTE FRONT DANS LES FORMULAIRES

HTML

````
<!-- HTML -->
<form #formRegister="ngForm" (ngSubmit)="registration(formRegister)">
<div class="mb-3">
  <label for="email" class="form-label">Email</label>
  <input type="email" [(ngModel)]="..." class="form-control" id="email" name="email" placeholder="name@example.com">
</div>
<div class="mb-3">
  <label for="password" class="form-label">password</label>
  <textarea class="form-control" id="password" name="password" rows="3"></textarea>
</div>
````

TS

````
@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.scss']
})
export class AuthenticateComponent implements OnInit  {

	registration = (formRegister: NgForm) => {
        // POST :  findAll
        console.log(formRegister.value);
        if (formRegister.valid) {
       	 ...
    	}
    }
   ...
}
````

````
<!-- HTML -->

<input [(ngModel)]="edibility.filename" 
	placeholder="Nom français utilisé pour identifier l'espèce."
    type="file" 
    class="form-control" 
    id="path" 
    name="path" 
    (change)="onFileSelected($event)"
    required
>
````



## DECODE TOKEN

```
npm install jwt-decode
```

Créer un service pour gerer le token par exemple : `jwt-token.service.ts`

````
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
// import * as jwt_decode from 'jwt-decode';

export interface  DecodeToken {
  sub: string,
  iat: number,
  exp: number
 
}

@Injectable({
  providedIn: 'root'
})
export class JwtTokenService {

  jwtToken!: string;
  decodedToken!:DecodeToken
  // decodedToken!: { [key: string]: string };

  constructor() {
  }

  setToken(token: string): void {
    if (token) {
      this.jwtToken = token;
    }
  }

  decodeToken() {
    if (this.jwtToken) {
    this.decodedToken = jwtDecode(this.jwtToken);
    }
  }

  getDecodeToken() {
    return jwtDecode(this.jwtToken);
  }

  getUser(): string|null {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken.sub : null;
  }

  // getEmailId() {
  //   this.decodeToken();
  //   return this.decodedToken ? this.decodedToken.email : null;
  // }

  getExpiryTime() {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken.exp : null;
  }

  isTokenExpired(): boolean {
    const expiryTime: number|null = this.getExpiryTime();
    if (expiryTime) {
      return ((1000 * expiryTime) - (new Date()).getTime()) < 5000;
    } else {
      return false;
    }
  }
}

````

Puis dans le service qui gère l'authentification on instancie le service `jwt-token`

````
import { JwtTokenService } from './jwt-token.service';

@Injectable({
  providedIn: 'root' // Le service est disponible dans toute l'application
})
export class AuthenticationService {
...
  // Injection des services dans le constructeur
  constructor(
    private router: Router, 
    private http: HttpClient, 
    private jwtTokenService: JwtTokenService
  ) { }
  
    // Méthode pour vérifier si un utilisateur est authentifié
  public isAuth = ():boolean => {
    // Récupérez le token depuis le stockage
    const token = this.getToken();

    if(token) {
      // Configurez le service de gestion des jetons avec le token récupéré
      this.jwtTokenService.setToken(token)
      
      // Vérifiez si le token est expiré en utilisant le service de gestion des jetons
      //console.log(this.jwtTokenService.isTokenExpired());

      // Retournez true si le token n'est pas expiré, indiquant que l'utilisateur est authentifié
      return !this.jwtTokenService.isTokenExpired();
    }

    // Retournez false si aucun token n'a été trouvé, indiquant que l'utilisateur n'est pas authentifié
    return false;
  }
  
````

## GUARD

Active / désactive les urls du front en fonction de la validité du token.

````
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { inject } from '@angular/core';

export const authenticatedGuard: CanActivateFn = () => {
  console.log("Désolé vous devez vous authentifier !")
  if(inject(AuthenticationService).isAuth()){
    return true;
  }
  inject(Router).navigate(["securite/authentification"]);
  return false;
};
````

Active / désactive les urls en fonction du role de l'utilisateur

````
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { TypeAlert } from '../enum/type-alert';
import { ToastService } from '../services/toast-service';


export const isAdminGuard: CanActivateFn = () => {

  if (inject(AuthenticationService).isAdmin()) {
    return true;
  }
  inject(ToastService).showExpiredSessionToast(
    "Acces refusé",
    "Désolé, vous ne disposez pas des autorisations nécessaires pour accéder à ces informations, role admin attendu !",
    TypeAlert.DANGER,
    5000
    );
  console.log("Désolé, vous ne disposez pas des autorisations nécessaires pour accéder à ces informations, role admin attendu !");
  inject(Router).navigate(["securite/authentification"]);
  return false;
}
````



## INTERCEPTOR

Ce composant va écouter les requête sortantes et on l'utilisera pour in jecter notre token vers API

````
ng g interceptor token
````

````
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthenticationService } from './authentication.service';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private auth: AuthenticationService,
    private router: Router
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    /* 
      Vérifiez si l'URL du Back-end (route dans l'API) contient le segment "api/v1/forum"
      request.url.includes('api/v1/forum')

      Vérifiez si l'URL dans angular (routes interne) contient le segment "back-office"
      this.router.url.includes('back-office')
    */

      const urlInterne = this.router.url;
      const urlDistante = request.url;

    if (urlInterne.includes('back-office') || (urlDistante.includes('api/v1/forum') && request.method === 'POST')) {
      // Récupération du token d'authentification
      const token: string | null = this.auth.getToken();
      // Ajout du token dans les entêtes de la requête
      request = request.clone({
        headers: new HttpHeaders({
          'Authorization': `Bearer ${token}`
        })
      });
    }
    // Envoi de la requête avec les nouvelles entêtes
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        const errorCode = error.status; // Récupérer le code d'erreur HTTP

        // Gestion du code d'erreur
        console.log(`Code d'erreur HTTP : ${errorCode}`);

        if (errorCode === 403) {
          // this.auth.doLogout(); 
          // redirect vers login
          this.router.navigate(["securite/authentification"]);
        }

        if (errorCode === 400) {
          console.log(error.error);
        }

        // Propager l'erreur pour qu'elle soit gérée ailleurs dans l'application
        return throwError(() => error);
      })
    );
  }
}

````



## CK EDITOR

https://ckeditor.com/docs/ckeditor5/latest/installation/integrations/angular.html

````
npm install --save @ckeditor/ckeditor5-angular

puis une des version prédéfini par exemple :

npm install --save @ckeditor/ckeditor5-build-classic
````



````
// app.module.ts

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
````





## Communiquer entre les composants

Composant enfant TOAST

***HTML** : toast.component.html*

````
<div class="toast-container position-fixed top-50 start-50 translate-middle p-3">
    <div id="messageToast" class="toast" [ngClass]="showStateAndTypeAlertToast()" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
            <img src="assets/images/icones/mushromLogo.png" class="rounded me-2" alt="logo SpitForm" width="20">
            <strong class="me-auto">{{toast.title}}</strong>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="fs-6 toast-body py-4">
          {{toast.message}}
        </div>
    </div>
  </div>
````

***TS** : toast.component.ts*

````
import { Component, Input } from '@angular/core';
import { TypeAlert } from 'src/app/enum/type-alert';

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

````

***SERVICE PARTAGE***: toast-service.ts

````
export class toast-service {

	private toastComponent!: ToastComponent;

	setToastComponent(toast: ToastComponent): void {
		this.toastComponent = toast;
	}

	getToastComponent(): ToastComponent {
		return this.toastComponent;
	}

	showToast = (title: string, message: string, typeAlert: TypeAlert, delay: string) => {
		if (this.toastComponent) {
			this.toastComponent.toast = {
				showStateToast: 'show',
				title: title,
				message: message,
				typeAlert: typeAlert
			}
			// Masquer le toast après un délai
			this.hideToast(delay);
		} else {
			console.error('Le composant de toast n\'est pas correctement initialisé dans le service.');
		}
	}

	hideToast = (delay:string) => {
		// Optionnel : Masquer le toast après un délai
		setTimeout(() => {
			this.toastComponent.toast.showStateToast = 'hide';
		}, parseInt(delay));
	}
}
````



***HTML** : app.component.html*

````
<main class="d-flex flex-column">
  <app-nav></app-nav>
  <div class="flex-grow-1">
    <router-outlet></router-outlet>
  </div>
  <app-footer></app-footer>
</main>

<!-- COMPOSANT TOAST #toastComponent est une référence (id) -->
<app-toast #toastComponent></app-toast>
````

***TS** : app.component.ts*

````
export class AppComponent implements OnInit, AfterViewInit {
	
	// inject ToastService
	constructor(private toastService: ToastService){ }
	
	// Permet au composant parent d'accèder/modifier les propriétés et méthodes de l'enfant 
  	@ViewChild('toastComponent') toast!: ToastComponent;
  	
  	// envoie le composant au service
  	ngAfterViewInit(): void {
    	this.toastService.setToastComponent(this.toast);
  	}
  }
````

On utilise un service partager

   On injecte le service `ToastService`dans le constructeur du composant `app.component.ts` et partage le `toast` avec les composants qui ont besoin  d'afficher des messages.



   On injecte le service `ToastService` dans le constructeur du composant enfant celui qui veux envoyer les infos au Toast

   On injecte le composant taost (celui dans app.component.html) dans le service via un setter

​    \- this.toastService.setToastComponent(this.toast);

   Coté composant enfant qui souhaite envoyer les données au Toast on 

​    \-  messageToast: ToastComponent;

​    constructor (private toastService: ToastService) {

​      this.messageToast = this.toastService.getToastComponent();

​     }

 */

#### composant parent 

````
// @ViewChild(EnfantAComponent) EnfantA!: EnfantAComponent;

// @ViewChild(EnfantBComponent) EnfantB!: EnfantBComponent;

ngAfterViewInit(): void {
	this.EnfantA.titre = "Titre afficher dans le composant enfantB";
	
	this.EnfantB.message = "Message afficher dans le composant enfantB";
  }

````



#### composant enfantA

Propriétés qui peuvent être modifier, méthode qui peuvent être appelé.



#### composant enfantB

Propriétés qui peuvent être modifier, méthode qui peuvent être appelé.
