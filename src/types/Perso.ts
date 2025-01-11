import {Lieu} from "./lieux/Lieu.ts";
import {Statut} from "./Statut.ts";
import {Carriere, metiersEnum} from "./metiers/metiers.ts";
import {Dieu} from "./Dieu.ts";
import {Carac} from "./caracs/Caracs.ts";
import {talents} from "../donnees/talents.ts";
import {Race} from "../donnees/races/Races.ts";
import {Evt} from "./Evt.ts";

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
    carriere: Carriere[],
    // surtout utile si affilié à un temple (ou très très croyant en un dieu particulier)
    dieu: Dieu,
    caracs: Map<string, Carac>,
    talents: talents[],
    evtsProgrammes?: Map<number, (perso: Perso)=>Evt>
};

export function aUneCarriere(perso: Perso): boolean {
    return perso.carriere.length > 0;
}
export function suitUneCarriereDe(perso: Perso, metier: metiersEnum): boolean {
    let trouve: boolean = false;
    perso.carriere.forEach(carriere => {
        if (carriere.metier.nom === metier) {
            trouve = true;
        }
    });
    return trouve;
}
export function neSuitPasUneCarriereDe(perso: Perso, metier: metiersEnum): boolean {
    let trouve: boolean = false;
    perso.carriere.forEach(carriere => {
        if (carriere.metier.nom === metier) {
            trouve = true;
        }
    });
    return !trouve;
}
export function suitUneCarriereDepuis(perso: Perso, metier: metiersEnum, duree: number): boolean {
    let trouve: boolean = false;
    if (perso.carriere) {
        perso.carriere.forEach(carriere => {
            if (carriere.metier.nom === metier && carriere.duree >= duree) {
                trouve = true;
            }
        });
    }
    return trouve;
}

export enum Sexe {
    male = 'Mâle',
    femelle = 'Femelle',
}
