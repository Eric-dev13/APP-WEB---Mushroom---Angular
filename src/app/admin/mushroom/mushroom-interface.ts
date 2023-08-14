import {LocalnameInterface} from 'src/app/admin/localname/localname-interface';
import {EdibilityInterface} from 'src/app/admin/edibility/edibility-interface';
import {LamellatypeInterface} from 'src/app/admin/lamellatype/lamellatype-interface';
import {MediaInterface} from 'src/app/admin/media/media-interface';

export interface MushroomInterface {
    id: number;
    commonname: string;
    latinname: string | null;
    flesh: string | null;
    hat: string | null;
    lamella: string | null;
    foot: string | null;
    habitat: string | null;
    comment: string | null;
    edibility: EdibilityInterface | null; // Représente un objet et peux être vide
    lamellatype: LamellatypeInterface | null; // Représente un objet et peux être vide
    localnames: LocalnameInterface[]; // tableau d'objets peux être vide
    medias: MediaInterface[]; // tableau d'objets
}
