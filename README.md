# Royaume des champignons



## Front end



### Installation angular

`ng new nom-du-projet --style=scss --skip-tests=true`

### Création composant Home
Page d'acceuil

### Création composant nav
Barre de navigation

### Création composant Mushrooms
Affiche la collection des vignettes.

### Création composant card
Permets d'afficher une vignette comprenant une images, le nom commun, la comestibilité.

### Installation de bootstrap

````
 npm i bootstrap
````



![image-20230722232411952](.\assets.readme\image-20230722232411952.png)



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





# MushroomAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## RFS

RFS est un moteur de redimensionnement d'unité qui a été initialement développé pour redimensionner les tailles de police (d'où son abréviation pour Responsive Font Sizes). De nos jours, RFS est capable de redimensionner pratiquement toutes les valeurs de n'importe quelle propriété CSS avec des unités, telles que margin, padding, border-radius ou même box-shadow.

```
npm install rfs
```

Usage:

```
// scss/main.scss

@import "../node_modules/rfs/scss";
```

Pour lier un asset dans un composant, vous pouvez utiliser la balise HTML <img> pour une image, ou <link> et <script> pour les fichiers CSS et JavaScript. 

```
<!-- Dans un composant -->
<img src="assets/images/logo.png" alt="Logo de l'application">

<!-- Dans le fichier HTML global (index.html) pour un fichier CSS -->
<link rel="stylesheet" type="text/css" href="assets/css/style.css">

<!-- Dans le fichier HTML global (index.html) pour un fichier JavaScript -->
<script src="assets/js/script.js"></script>
```

