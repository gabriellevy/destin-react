import {enVoyageAUbersreik, Lieu, lieuParDefaut} from "./lieux/Lieu.ts";
import {anneesToJours} from "./Date.ts";
import {MetalStatut, Statut} from "./Statut.ts";
import {Carriere, metiersEnum} from "./metiers/metiers.ts";
import {Dieu} from "./Dieu.ts";
import {caracDeDepartAleatoire} from "./caracs/Caracs.ts";
import {talents} from "../donnees/talents.ts";

export type Perso = {
    nom: string;
    sexe: Sexe;
    dateNaissance: number;
    date: number, // en nombre de jours depuis l'an 0 du calendrier impérial
    lieu: Lieu,
    // aide à la programmation mais aps à afficher directement :
    mois?: string, // déduit de date mais pratique pour optimiser les calculs de conditions en masse
    jourDuMois: number, // déduit de date mais pratique pour optimiser les calculs de conditions en masse
    statut: Statut;
    carriere: Carriere[],
    dieu: Dieu, // surtout utile si affilié à un temple (ou très très croyant en un dieu particulier)
    cc: number,
    ct: number,
    f: number,
    e: number,
    i: number,
    ag: number,
    dex: number,
    int: number,
    fm: number,
    soc: number,
    talents: talents[],
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
    perso.carriere.forEach(carriere => {
        if (carriere.metier.nom === metier && carriere.duree >= duree) {
            trouve = true;
        }
    });
    return trouve;
}

export enum Sexe {
    male = 'Mâle',
    femelle = 'Femelle',
}

export const enfant: Perso = {
    nom: "Wilhelm Hinderten",
    sexe: Sexe.male,
    dateNaissance: anneesToJours(2492), // entre 2482 et 2502 comme ça le perso a entre 10 et 30 ans quand l'ennemi intérieur démarre
    date: anneesToJours(2502)-2, // pas laisser trop de liberté au joueur là dessus
    jourDuMois: -1,
    lieu: lieuParDefaut,
    statut: {rang: 4, metalStatut: MetalStatut.bronze},
    carriere: [],
    cc: caracDeDepartAleatoire(),
    ct: caracDeDepartAleatoire(),
    f: caracDeDepartAleatoire(),
    e: caracDeDepartAleatoire(),
    i: caracDeDepartAleatoire(),
    ag: caracDeDepartAleatoire(),
    dex: caracDeDepartAleatoire(),
    int: caracDeDepartAleatoire(),
    fm: caracDeDepartAleatoire(),
    soc: caracDeDepartAleatoire(),
    talents: [],
    dieu: {id: "panthéon de l'empire"}
};

export const jeuneHommeEnVoyageAUbersreik: Perso = {
    nom: "Wilhelm Hinderten",
    sexe: Sexe.male,
    dateNaissance: anneesToJours(2482), // entre 2482 et 2502 comme ça le perso a entre 10 et 30 ans quand l'ennemi intérieur démarre
    date: anneesToJours(2502), // pas laisser trop de liberté au joueur là dessus
    jourDuMois: -1,
    lieu: enVoyageAUbersreik,
    statut: {rang: 2, metalStatut: MetalStatut.argent},
    carriere: [],
    cc: caracDeDepartAleatoire(),
    ct: caracDeDepartAleatoire(),
    f: caracDeDepartAleatoire(),
    e: caracDeDepartAleatoire(),
    i: caracDeDepartAleatoire(),
    ag: caracDeDepartAleatoire(),
    dex: caracDeDepartAleatoire(),
    int: caracDeDepartAleatoire(),
    fm: caracDeDepartAleatoire(),
    soc: caracDeDepartAleatoire(),
    talents: [],
    dieu: {id: "panthéon de l'empire"}
};