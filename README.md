# DOCUMENTATION AUGULAR



## Royaume des champignons



## Installation

Installer `Node Js` pour bénéficier du gestionnaire de package`npm`

`ng new nom-du-projet --style=scss --skip-tests=true --routing`



## Version d'angular

````
ng v
````



## Demarrage du serveur

localhost:4200

````
ng serve --open
````


## Génère et/ou modifie des fichiers

https://angular.io/cli/generate#interface-command


## Création composant (controller)

````
ng generate component nom-du-composant
OU
ng g c nom-du-composant
````


## Création service

````
ng g service nom-du-service
````

Mettre a disposition de méthode pour les traitements

Exemple :CRUD

## Création d'une interface

````
ng generate interface [name] [type]

// ex: ng g i user interface
````



## Bootstrap

### Installation Bootstrap widgets - angular

https://ng-bootstrap.github.io/#/getting-started

````
ng add @ng-bootstrap/ng-bootstrap
````



### Installation classic bootstrap

````
 npm i bootstrap
````

### Utilisation

**Ajouter dans le fichier `angular.json` les liens vers les fichiers CSS et JS**

![image-20230722232411952](.\assets.readme\image-20230722232411952.png)

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
````

### Ou bien importer Bootstrap dans le fichier `styles.scss`

````
// styles.scss

/* Importing Bootstrap SCSS file. */
@import 'bootstrap/scss/bootstrap';
````





## SASS - Fichier SCSS 

**Importation de Fichiers SCSS Globaux** : Pour importer des fichiers SCSS globaux dans toute l'application, vous pouvez le faire à partir du fichier `styles.scss` situé dans le répertoire `src` de votre projet. Tous les fichiers SCSS que vous importez dans `styles.scss` seront disponibles dans l'ensemble de votre application.

**Utilisation de SCSS dans les Composants** : Lorsque vous créez des styles pour un composant spécifique, vous pouvez  utiliser les fonctionnalités avancées de SCSS telles que les variables,  les mixins, les fonctions, etc. directement dans le fichier `my-component.component.scss`.

**Importer le Fichier SCSS** : Dans votre fichier principal SCSS (par exemple, `styles.scss`), vous pouvez importer le fichier SCSS de la dépendance en utilisant la directive `@import`.

Le préfixe `~` est utilisé pour indiquer à Angular de rechercher la dépendance dans le dossier `node_modules`.

## Fontawesome

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



## Système de routage - naviguer entre les URLs

````
// src\app\app-routing.module.ts

const routes: Routes = [
  { path: "", component: HomeComponent }, // Ex route par défaut (page d'accueil),
  ...
  ]
````



En configurant l'intégralité du `Routing` de l'application dans le module `AppRoutingModule`, on serait amené à **importer tous les modules de l'application avant son démarrage**. A titre d'exemple, plus l'application sera riche, plus la page d'accueil sera lente à charger par effet de bord.

### Configuration du Lazy Loading

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



## Cycle de vie des composants

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



## Rafraichissement d'un composant de la page

Pour actualiser une page sans devoir la recharger  il suffit de modifier les données et angular regénère le bloc incriminé.



## Requête vers l'API

### Formulaire

Exporte les fournisseurs et directives requis pour les formulaires  pilotés par modèle, les rendant disponibles pour l’importation par les  NgModules qui importent ce module.

````
// src\app\app.module.ts

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Gestion de formulaire lié a ngModel
````





#### Bibliothèque  HttpClient

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



##### Requête GET (controller)

````
// src\app\mushrooms\mushrooms.component.ts

import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mushrooms',
  templateUrl: './mushrooms.component.html',
  styleUrls: ['./mushrooms.component.scss']
})
export class MushroomsComponent implements OnInit{

  mushroomsApi:string = "http://localhost:9000/api/v1/admin/mushroom";
  mushrooms: any;

 constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.http.get(this.mushroomsApi).subscribe((res)=>{
      this.mushrooms = res; 
      console.log(this.mushrooms);
    });
  }
}
````

HTML

````
<!-- src\app\mushrooms\mushrooms.component.html -->

<section class="col d-flex justify-content-center" *ngFor="let mushroom of mushrooms">
            <div class="listMushrooms__card box-shadow-down">
                <a [routerLink]="['/champignon', mushroom.id]">
                    <div class="listMushrooms__card__eat d-flex justify-content-center align-items-center" *ngIf="mushroom.edibilityEntity != null">
                        <div class="text-center">
                            <img class="listMushrooms__card__eat__img" [src]="'assets/images/edibility/' + mushroom.edibilityEntity.filename" alt="?">
                            <p class="text-light">{{ mushroom.edibilityEntity.name }}</p>
                        </div>
                    </div>
                    <div class="listMushrooms__card__bloc-img">
                        <div class="listMushrooms__card__bloc-img__opacity"></div>
                        <img class="listMushrooms__card__bloc-img__image" *ngIf="mushroom.mediaEntities.length > 0; else default" [src]="'upload/mushrooms/' + mushroom.mediaEntities[0].filename" alt="{{mushroom.commonname}}">
                        <ng-template #default>
                             <img class="listMushrooms__card__bloc-img__image" src="assets/images/icones/default.png" alt="{{mushroom.commonname}}">
                        </ng-template>
                    </div>
                    <div class="listMushrooms__card__titre d-flex flex-row justify-content-center align-items-center">
                        <h5 class="text-greenDark txtShadow--white text-center">{{mushroom.commonname}}</h5>
                    </div>
                </a>
            </div>
        </section>
````



Pour lier un asset dans un composant, vous pouvez utiliser la balise HTML <img> pour une image, ou <link> et <script> pour les fichiers CSS et JavaScript. 

```
<!-- Dans un composant -->
<img src="assets/images/logo.png" alt="Logo de l'application">

<!-- Dans le fichier HTML global (index.html) pour un fichier CSS -->
<link rel="stylesheet" type="text/css" href="assets/css/style.css">

<!-- Dans le fichier HTML global (index.html) pour un fichier JavaScript -->
<script src="assets/js/script.js"></script>
```

L’élément <ng-template> d’Angular définit un modèle qui n’est pas rendu par défaut.
Notez que si vous encapsulez du contenu dans un <ng-template> sans demander à Angular de le rendre, ce contenu n’apparaîtra pas sur une page.





Notre objectif est de vous aider à identifier facilement les champignons que vous croisez lors de vos balades en forêt. Grâce à notre système de recherche avancée, vous pouvez filtrer les espèces par couleur, forme, habitat et bien plus encore. Que vous soyez un débutant enthousiaste ou un mycologue chevronné, Le Royaume des Champignons est là pour enrichir vos connaissances et votre passion.

Mais ce n'est pas tout ! Nous croyons en la force de la communauté. C'est pourquoi nous avons créé un forum interactif où vous pourrez échanger vos découvertes, poser vos questions, partager vos photos et discuter avec d'autres amateurs de champignons. Notre communauté bienveillante est prête à vous accueillir et à vous aider dans votre aventure mycologique.

Alors, rejoignez-nous dès aujourd'hui et partons ensemble à la découverte du merveilleux royaume des champignons de Provence. Faisons de cette passion commune une source d'apprentissage, de partage et d'émerveillement !

Prêt à plonger dans ce monde mystérieux et fascinant ? Rejoignez-nous au Royaume des Champignons !



## Routage

````
import { Router, ActivatedRoute } from '@angular/router';

...
constructor(private router: Router, private route: ActivatedRoute) { }
...
this.router.navigate(['admin/champignons/Liste-des-champignons']);
````



## DIRECTIVE

### ngIf

````
 <ng-template [ngIf]="mushroom?.localnames" [ngIfElse]="message" *ngFor="let localname of mushroom.localnames; index as i;">
	{{ localname.name }} <span *ngIf="i < mushroom.localnames.length - 1">, </span>
</ng-template>
<ng-template #message>Aucun nom n'a été renseigné!</ng-template>
````



## INTERCEPTOR

Les intercepteurs HTTP sont des outils très utiles dans les applications Angular qui permettent de traiter les requêtes et les réponses HTTP  avant qu'elles ne soient envoyées ou reçues par le serveur. Ils peuvent  être utilisés pour ajouter, modifier ou supprimer des données dans les  entêtes de la requête ou de la réponse, pour ajouter un message de  chargement ou pour effectuer une action spécifique en cas d'erreur.

- Ajout d'un token d'authentification dans les entêtes de la requête, comme dans l'exemple précédent.

- Ajout d'un message de chargement lors de l'envoi d'une requête et de son masquage lors de la réception de la réponse.

- Gestion des erreurs en cas d'échec de la requête, par exemple en affichant un  message d'erreur ou en redirigeant l'utilisateur vers une page d'erreur.

- Modification des données de la requête avant qu'elles ne soient envoyées, par  exemple en ajoutant un préfixe à l'URL ou en convertissant les données  en format JSON.

  ### Ajouter  le token d'authentification dans l'entête de la requete et gérer le code d'erreur retourné.

Dans votre module principal, importez `HTTP_INTERCEPTORS` et `HttpClientModule`.

````
// app.module.js

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
````

1. En utilisant `HTTP_INTERCEPTORS` dans la liste des  fournisseurs de votre module principal, vous indiquez à Angular que vous souhaitez utiliser un ou plusieurs intercepteurs pour traiter les  requêtes et les réponses HTTP de votre application.

2. Créez un nouveau service, un fichier `auth-interceptor.service.ts` dans votre répertoire de services.

   ![image-20230911234031084](C:\Users\Utilisateur\AppData\Roaming\Typora\typora-user-images\image-20230911234031084.png)

   

   ````
   ng g interceptor services\auth-interceptor
   ````

   

   ````
   // src\app\services\auth-interceptor.service.ts
   
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
       // Récupérez l'URL actuelle
       const currentUrl: string = this.router.url;
   
       // Vérifiez si l'URL contient le segment "back-office"
       if (currentUrl.includes('back-office')) {
       // Récupération du token d'authentification
       const token: string|null = this.auth.getToken();
         // Ajout du token dans les entêtes de la requête
         request = request.clone({
           headers: new HttpHeaders({
             'Authorization': `Bearer ${token}`,
             'Content-Type': 'application/json'
           })
         });
       }
         // Envoi de la requête avec les nouvelles entêtes
         return next.handle(request).pipe(
           catchError((error: HttpErrorResponse) => {
             const errorCode = error.status; // Récupérer le code d'erreur HTTP
     
             // Gestion du code d'erreur
             console.log(`Code d'erreur HTTP : ${errorCode}`);
     
             // 
             if(errorCode === 403 ) {
               this.router.navigate(["/login"]);
             }
     
             // Vous pouvez également propager l'erreur pour qu'elle soit gérée ailleurs dans l'application
             return  throwError(() => error);
           })
         );
     }
   }
   ````

Lorsque vous appelez la méthode `intercept` de votre intercepteur, vous pouvez effectuer des modifications sur la requête en utilisant l'objet `HttpRequest` passé en paramètre;

````
// src\app\app.module.ts

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth-interceptor.service';

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class AppModule { }
````

Votre intercepteur est maintenant configuré et ajoutera le token  d'authentification dans les entêtes de toutes les requêtes HTTP  effectuées par votre application Angular.



## VALIDATEUR

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

````
// Type Script - Validation du formulaire

if (form?.invalid) {
    console.log('Le formulaire est invalide.');
    return;
}
````



## Gérer le token

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





# A FAIRE

```
# RESTE A FAIRE

Activer l'authentification avec gestion des roles.
- Afficher masquer liens de navbar
- Afficher masquer liens de footer
- Parcourir les pages avec la console du navigateur pour corriger les erreurs.
- Construire une page avec un slide bar latérale pour le menu administration ()


ACTION SUR LE CRUD  ADMIN : MUSHROOM, EDIBILITY, LAMELLATYPE 
- Gèrer pour MUSHROOM, EDIBILITY, LAMELLATYPE  l'ajout d'un nouvel enregistrement avec envoi des fichiers images renommage avec nom unique.
- Gèrer pour MUSHROOM, EDIBILITY, LAMELLATYPE la mise à jour, gestion des images


```



En Angular, le symbole `?` est utilisé pour définir une variable en option (déclarer une propriété facultative) dans des modèles de liaison (templates) lorsque vous traitez avec des propriétés potentiellement nulles ou indéfinies. Cette fonctionnalité est appelée le "safe navigation operator" ou "Elvis operator". Il vous permet d'accéder à une propriété d'un objet tout en évitant des erreurs si l'objet lui-même ou la propriété que vous essayez d'accéder est nul(le) ou indéfini(e).



En Angular, le symbole `!` est utilisé pour indiquer au compilateur TypeScript qu'une variable est garantie de ne pas être nulle (non-nullable). Cela permet d'éviter les erreurs de compilation potentielles liées aux valeurs nulles ou indéfinies.

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



## Gestion de liaison model et formulaire

````
HTML

<div class="h4 fw-semibold pb-2 mb-4 border-bottom border-secondary">
    <label for="edibility" class="form-label">Comestibilité</label>
    <select class="form-select border-2 border-start-0 border-top-0 border-end-0"
        [(ngModel)]="mushroom!.edibility!.id" name="edibility" id="edibility">
        <option [value]="0" selected>Choisir....</option>
        <option *ngFor="let edibility of edibilities" [value]="edibility.id">{{ edibility.name }}</option>
    </select>
</div>
````

````
TYPESCRIPT

...
ngOnInit(){
	...
	/* POST ou PUT : Si un paramètre 'id' est présent dans l'URL nous sommes en mode mise à jour (PUT) 
		sinon ajouter (POST) */
    this.id_mushroom = this.route.snapshot.paramMap.get('id');
    if (this.id_mushroom) {
      /* GET : Find By ID - le nom des propriétés de l'interface mushroom doivent correspondre avec les cles 			du JSON renvoyé par l'API
      this.http.get<MushroomInterface>(this.API_ADMIN_BASE_URL + "mushroom/" + this.id_mushroom).subscribe({
        next: (data) => {
          /* 
          Pour eviter que TS remonte des erreurs (les champs ne peuvent etre vide) lors de la liaison avec 				les champs de formulaire (ngModel) 
          Si il n'y a pas d'enregistrement associée (propriété edibility ==null) on renvoie un objet 					edibility = {id:0}
          */
          if(!data.edibility) { 
            data.edibility = {id:0};
          }
          this.mushroom = data;
          console.log('put mushroom: ', this.mushroom)
        },
        error: (err) => console.log('Observer got an error: ' + err),
        complete: () => console.log('fiche n° ' + this.id_mushroom + ' chargée!')
      });
    }
    ...
}

send(form: NgForm) {
	...
	/* si la propriété "edibility" n'est pas renseignée elles doit renvoyées NULL
	sinon un objet pour renseigner la cle étrangere corespondant à l'ID edibility. */
    if (form.value.edibility === 0) {
      form.value.edibility = null;
    } else {
      form.value.edibility = {id: form.value.edibility};
    }
    ...
}
...
````



## Gerer l'envoi des token via l'interceptor

Ce composant va écouter les requête sortantes et on l'utilisera pour in jecter notre token vers API

````
ng g interceptor token
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



## toast

 Toast est un module Angular qui permet d'afficher des messages flash sur un site Web. 

Mettre à niveau `@angular/core` vers la version 16.2.0 ou supérieure.

````
npm install @angular/core@16.2.12
````



```
npm install toast
```

```
 // app.module.ts
 
 import { ToastModule } from 'toast';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Une fois que vous avez importé toast, vous pouvez l'utiliser dans votre template Angular

````
// component *.html

<div class="container">
  <h1>Mon application Angular</h1>

  <button (click)="showMessage()">Afficher un message</button>
</div>
````

````

// *.ts

ngOnInit() { }

  showMessage() {
    // Affiche un message de notification
    Toast.info('Voici un message de notification');
    
    // Affiche un message d'information qui s'affichera pendant 5 secondes
    Toast.info('Voici un message d'information', '', {
      duration: 5000
    });
    
    // Affiche un message d'erreur
    Toast.error('Voici un message d'erreur');
  }
````



## Installation de Angular Material  

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
