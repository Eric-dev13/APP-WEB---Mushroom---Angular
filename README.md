# Angular - Royaume des champignons



## Installation

Installer `Node Js` pour bénéficier du gestionnaire de package`npm`

`ng new nom-du-projet --style=scss --skip-tests=true`



## Demarrage du serveur

````
localhost:4200
````



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

## Bootstrap

### Installation

````
 npm i bootstrap
````

### Utilisation

**Ajouter les liens vers les fichiers CSS et JS**

![image-20230722232411952](.\assets.readme\image-20230722232411952.png)



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
Environnement
ng generate environments




## RFS (redimensionnement auto des polices)

RFS est un moteur de redimensionnement d'unité qui a été initialement développé pour redimensionner les tailles de police (d'où son abréviation pour Responsive Font Sizes). De nos jours, RFS est capable de redimensionner pratiquement toutes les valeurs de n'importe quelle propriété CSS avec des unités, telles que margin, padding, border-radius ou même box-shadow.

```
npm install rfs
```

Usage:

```
// scss/main.scss

@import "../node_modules/rfs/scss";
```



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
                            <img class="listMushrooms__card__eat__img" [src]="'assets/images/edibility/' + mushroom.edibilityEntity.path" alt="?">
                            <p class="text-light">{{ mushroom.edibilityEntity.name }}</p>
                        </div>
                    </div>
                    <div class="listMushrooms__card__bloc-img">
                        <div class="listMushrooms__card__bloc-img__opacity"></div>
                        <img class="listMushrooms__card__bloc-img__image" *ngIf="mushroom.mediaEntities.length > 0; else default" [src]="'upload/mushrooms/' + mushroom.mediaEntities[0].path" alt="{{mushroom.commonname}}">
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

Externe

Interne

````
import { Router, ActivatedRoute } from '@angular/router';

...
constructor(private router: Router, private route: ActivatedRoute) { }
...
this.router.navigate(['admin/champignons/Liste-des-champignons']);
````







HTTP Angular

app.module.ts importer **httpClientModule**

Dans le composant pour les requete vers l’api

import **httpClient , onInit**

implementer  **onInit** sur la classe

Déclarer dans la classe les variables string qui pointe vers l’url de l’api

mushroom : string = url-api

dans constructeur injecte http

constructor( private http:HttpClient){ }

dans méthode ngOnInit(){





```
# RESTE A FAIRE

Activer l'authentification avec gestion des roles.
- Afficher masquer liens de navbar
- Afficher masquer liens de footer
- Parcourir les pages avec la console du navigateur pour corriger les erreurs.
- Construire une page avec un slide bar latérale pour le menu administration ()


ACTION SUR LE CRUD ADMIN
- regler l'envoi des medias (ajoute les enregistrements vides)
- Gèrer l'upload front envoi l'image vers l'api qui la recupère la renomme (random) et la stocke dans dossier upload
- La methode put OU patch non fonctionnelle.
- G
```
