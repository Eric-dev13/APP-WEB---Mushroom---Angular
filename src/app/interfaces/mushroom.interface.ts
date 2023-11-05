import { Edibility } from "./edibility.interface";
import { LamellaType } from "./lamella-type.interface";
import { LocalName } from "./local-name.interface";
import { Media } from "./media.interface";

export interface Mushroom {
  id?: number;
  createdAt?:Date;
  updatedAt?:Date;
  commonname: string;
  latinname?: string;
  flesh?: string;
  hat?: string;
  lamella?: string;
  foot?: string;
  habitat?: string;
  comment?: string;
  visibility?:boolean;
  slug?:string;
  edibility?: Edibility; // Représente un objet et peux être vide
  lamellatype?: LamellaType; // Représente un objet et peux être vide
  localnames?: LocalName[]; // tableau d'objets peux être vide
  medias: Media[]; // tableau d'objets
}
