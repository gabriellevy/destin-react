import {Lieu} from "./lieux/Lieu.ts";
import {Statut} from "./Statut.ts";
import {Carriere, metiersEnum} from "./metiers/metiers.ts";
import {Dieu} from "./Dieu.ts";
import {Carac} from "./caracs/Caracs.ts";
import {talents} from "../donnees/talents.ts";
import {Race} from "../donnees/races/Races.ts";

export type Perso = {
    nom: string;
    sexe: Sexe;
    dateNaissance: number;
    date: number, // en nombre de jours depuis l'an 0 du calendrier impérial
    lieu: Lieu,
    race: Race,
    // aide à la programmation mais pas à afficher directement :
    mois?: string, // déduit de date mais pratique pour optimiser les calculs de conditions en masse
    jourDuMois: number, // déduit de date mais pratique pour optimiser les calculs de conditions en masse
    statut: Statut;
    carrieres: Map<metiersEnum, Carriere>,
    // surtout utile si affilié à un temple (ou très très croyant en un dieu particulier)
    dieu: Dieu,
    caracs: Map<string, Carac>,
    talents: talents[],
    evtsProgrammes: Map<number, (perso: Perso)=>string>
};

export enum Sexe {
    male = 'Mâle',
    femelle = 'Femelle',
}
