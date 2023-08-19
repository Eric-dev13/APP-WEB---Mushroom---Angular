import {LocalnameInterface} from 'src/app/admin/localname/localname-interface';
import {EdibilityInterface} from 'src/app/admin/edibility/edibility-interface';
import {LamellatypeInterface} from 'src/app/admin/lamellatype/lamellatype-interface';
import {MediaInterface} from 'src/app/admin/media/media-interface';

export interface MushroomInterface {
    id?: number;
    commonname?: string;
    latinname?: string;
    flesh?: string;
    hat?: string;
    lamella?: string;
    foot?: string;
    habitat?: string;
    comment?: string;
    edibility?: EdibilityInterface; // Représente un objet et peux être vide
    lamellatype?: LamellatypeInterface; // Représente un objet et peux être vide
    localnames?: LocalnameInterface[]; // tableau d'objets peux être vide
    medias?: MediaInterface[]; // tableau d'objets
}
