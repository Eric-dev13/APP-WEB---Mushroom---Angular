import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NgForm } from '@angular/forms';
import { ForumService } from 'src/app/services/forum.service';
import { PUBLIC_URL_GET_FILE_USER } from 'src/environments/config';
import { ForumSubjectsPaginator } from 'src/app/interfaces/forum-subjects-paginator.interface';
import { Paginator } from 'src/app/interfaces/paginator.interface';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { PaginatorComponent } from 'src/app/layouts/paginator/paginator.component';
import { ForumCategory } from 'src/app/interfaces/forum-category.interface';
import { ForumSubjectAdd } from 'src/app/interfaces/forum-subject-add.interface';
import { faComments,faMessage,faTrashArrowUp,faPencil, faFloppyDisk } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  constructor(
    protected auth: AuthenticationService,
    private forumService: ForumService
  ) { }

  readonly PUBLIC_URL_GET_FILE_USER: string = PUBLIC_URL_GET_FILE_USER;

  faComments = faComments; 
  faMessage = faMessage;
  faTrashArrowUp=faTrashArrowUp;
  faPencil=faPencil;
  faFloppyDisk=faFloppyDisk;

  // Nombre d'élément par page
  itemsPerPage: number = 5;

  // Accéder aux propriétés du composant enfant 
  @ViewChild(PaginatorComponent) childPaginator!: PaginatorComponent;

  // Objet pour stocker les données paginées
  forumSubjectPaginate: ForumSubjectsPaginator = { forumSubjects: [], forumSubjectLength: 0 }

  public Editor = ClassicEditor;

  // Object lié à ckEditor 
  forumSubjectAdd: ForumSubjectAdd = {
    title: '',
    description: '',
    forumCategories: []
  };

  // forumCommentaryAdd: ForumCommentary = { commentary: "" };
  commentarySend: string = "";
  

  // Affiche la liste des catégories dans les options du select input 
  categories: ForumCategory[] = [];
  // binder la propriété filterCategoryId avec le choix du select input
  filterCategoryId: number | undefined;

  errors: { [key: string]: string } = {};

  // tableau de 
  isShowCommentary: boolean[] = [];
  toggleShowCommentary(index: number): void {
    this.isShowCommentary[index] = !this.isShowCommentary[index];
  }

  isShowIcon:boolean[] = []; // Modifier ou supprimer un commentaire ajouté par l'utilsateur authentifé
  toggleShowIconCommentary(index: number): void {
    this.isShowIcon[index] = !this.isShowIcon[index];
  }

  ngOnInit(): void {
    // console.log(this.auth.getUser());
    // Charger les données initiales
    this.findAllCategories();
    this.findAll(this.itemsPerPage, 0);
  }

  // Ecoute les changements du paginator (si click sur le btn next ou previous)
  handlePaginationEvent = (paginator: Paginator) => {
    this.findAll(paginator.itemsPerPage, paginator.offset);
  }

  addSubject = (form: NgForm) => {
    let isAddSubject: boolean = false;

    if (form.value.titre != '' && form.value.description != '') { }
    this.forumService.add(form).subscribe({
      next: (data: ForumSubjectAdd) => {
        if (data) {
          // Si le sujet a été ajouté dans la BDD on rafraichi la page.
          this.findAll(this.childPaginator.paginator.itemsPerPage, this.childPaginator.paginator.offset);
          // Vide l'editeur
          this.forumSubjectAdd.title = "";
          this.forumSubjectAdd.description = "";
          this.forumSubjectAdd.forumCategories = [] ;
        }
      },
      error: (err: Error) => console.log()       
    });
  }

  addCommentary = (sujet_id?: number) => {
    const commentary: any = {
      commentary: this.commentarySend,
      user: {id: this.auth.getUser()?.id},
      forumSubject: {id: sujet_id}
    }
    this.forumService.addCommentary(commentary).subscribe({
      next: (data: boolean) => {
        // Si le commentaire a été ajouté dans la BDD on rafraichi la page.
        if(data) {
          this.commentarySend = '';
          this.findAll(this.childPaginator.paginator.itemsPerPage, this.childPaginator.paginator.offset);
        }
      },
      error: (err: Error) => console.log()

    })
  }

  onCategoryChange = (categoryId: number | undefined) => {
    // this.filterCategoryId = categoryId;
    this.findAll(this.itemsPerPage, 0);
    // Lorsque l'on change de catégorie on retourne  sur la page n°1
    this.childPaginator.paginator.currentPage = 1;
  }

  findAllCategories = () => {
    this.forumService.findAllCategories().subscribe({
      next: (data: ForumCategory[]) => {
        this.categories = data;
        // console.log("Categories", data);
      },
      error: (err: Error) => console.log()

    })
  }

  // Méthode pour récupérer les données paginées
  findAll(limit?: number, offset?: number) {
    this.forumService.findAllPaginate(limit, offset, this.filterCategoryId).subscribe({
      next: (data: ForumSubjectsPaginator) => {
        console.log("findAll", data),
          // Retourne la liste et le nombre total d'enregistrements.
          this.forumSubjectPaginate = data;
        console.log(data.forumSubjects.length + " sujet(s) sur un total de " + data.forumSubjectLength);
      },
      error: (err: Error) => {
        console.log("erreur");
        this.checkDataConstraints(err);
      },
    })
  }

  checkDataConstraints = (err: any) => {
    this.emptyErrors();
    if (err.error) {
      for (const fieldName in err.error) {
        if (err.error.hasOwnProperty(fieldName)) {
          // Mise à jour de la structure de données "errors" avec les messages d'erreur
          console.log("errors", this.errors);

          this.errors[fieldName] = err.error[fieldName];
        }
      }
    }
  }

  emptyErrors = (): void => {
    this.errors = {};
  }


}
