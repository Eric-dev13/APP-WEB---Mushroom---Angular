import { Component, Input } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Commentary } from 'src/app/interfaces/commentary.interface';
// import { PUBLIC_URL_GET_FILE_USER } from 'src/environments/config';
import { environment } from 'src/environments/environment.development';
import { faComments, faMessage, faTrashArrowUp, faPencil, faFloppyDisk, faCaretDown, faPencilAlt, faXmark, faPenToSquare } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-commentary',
  templateUrl: './commentary.component.html',
  styleUrls: ['./commentary.component.scss']
})
export class CommentaryComponent {

  @Input() commentary!: Commentary;

  public Editor = ClassicEditor;

  readonly PUBLIC_URL_GET_FILE_USER: string = environment.PUBLIC_URL_GET_FILE_USER;

  faComments = faComments;
  faMessage = faMessage;
  faTrashArrowUp = faTrashArrowUp;
  faFloppyDisk = faFloppyDisk;
  faCaretDown = faCaretDown;
  faPencilAlt = faPencilAlt;
  faPencil = faPencil;
  faXmark = faXmark;
  faPenToSquare = faPenToSquare;

  /* ******************************************** */
  /*             GESTION DES COMMENTAIRES         */
  /* ******************************************** */

  // Affiche le commentaire en mode editeur
  isYouWantUpdateCommentary: boolean = false;
  wantUpdateCommentary = () => {
    // affiche le ckeditor en mode editeur
    this.isYouWantUpdateCommentary = !this.isYouWantUpdateCommentary;
  }

  // Conserve les changements effectué dans l'editeur
  commentaryTextChanged: string = '';
  saveChangesToCommentInMemory = (commentaryTextChanged: string) => {
    this.commentaryTextChanged = commentaryTextChanged;
  }

  // Afficher / masquer les commentaires
  isShowCommentary: boolean[] = [];
  toggleShowCommentary(index: number): void {
    this.isShowCommentary[index] = !this.isShowCommentary[index];
  }

  // Affiche le bouton Modifier au survol de la souris sur un commentaire redigé par l'utilisateur authentifié
  IsShowEditorButtonCommentary: boolean[] = [];
  showEditorButtonCommentary(index: number, userEmailAuth: string | undefined, userEmailByCommentary: string) {
    if (userEmailAuth == userEmailByCommentary) {
      this.IsShowEditorButtonCommentary[index] = true;
    }
  }

  // Masquer le bouton Modifier au survol de la souris sur un commentaire redigé par l'utilisateur authentifié
  hideEditorButtonCommentary(index: number, userEmailAuth: string | undefined, userEmailByCommentary: string) {
    if (userEmailAuth == userEmailByCommentary) {
      this.IsShowEditorButtonCommentary[index] = false;
    }
  }

}
