import {enVoyageAUbersreik, Lieu, lieuParDefaut} from "./lieux/Lieu.ts";
import {anneesToJours} from "./Date.ts";
import {MetalStatut, Statut} from "./Statut.ts";
import {Carriere} from "./metiers/metiers.ts";

export type Perso = {
    nom: string;
    sexe: Sexe;
    dateNaissance: number;
    date: number, // en nombre de jours depuis l'an 0 du calendrier impérial
    lieu: Lieu,
    // aide à la programmation mais aps à afficher directement :
    mois?: string, // déduit de date mais pratique pour optimiser les calculs de conditions en masse
    jourDuMois?: number, // déduit de date mais pratique pour optimiser les calculs de conditions en masse
    statut: Statut;
    carriere?: Carriere,
};

export enum Sexe {
    male = 'Mâle',
    femelle = 'Femelle',
}

export const enfant: Perso = {
    nom: "Wilhelm Hinderten",
    sexe: Sexe.male,
    dateNaissance: anneesToJours(2492), // entre 2482 et 2502 comme ça le perso a entre 10 et 30 ans quand l'ennemi intérieur démarre
    date: anneesToJours(2502)-2, // pas laisser trop de liberté au joueur là dessus
    lieu: lieuParDefaut,
    statut: {rang: 4, metalStatut: MetalStatut.bronze}
};

export const jeuneHommeEnVoyageAUbersreik: Perso = {
    nom: "Wilhelm Hinderten",
    sexe: Sexe.male,
    dateNaissance: anneesToJours(2482), // entre 2482 et 2502 comme ça le perso a entre 10 et 30 ans quand l'ennemi intérieur démarre
    date: anneesToJours(2502), // pas laisser trop de liberté au joueur là dessus
    lieu: enVoyageAUbersreik,
    statut: {rang: 2, metalStatut: MetalStatut.argent}
};