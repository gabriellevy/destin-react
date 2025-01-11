import {Race} from "../races/Races.ts";
import {anneesToJours} from "../../types/Date.ts";
import {enVoyageAUbersreik, lieuParDefaut} from "../../types/lieux/Lieu.ts";
import {MetalStatut} from "../../types/Statut.ts";
import {Perso, Sexe} from "../../types/Perso.ts";
import {caracsDeBase} from "../../types/caracs/Caracs.ts";


export const enfant: Perso = {
    nom: "Wilhelm Hinderten",
    sexe: Sexe.male,
    race: Race.humain,
    dateNaissance: anneesToJours(2492), // entre 2482 et 2502 comme ça le perso a entre 10 et 30 ans quand l'ennemi intérieur démarre
    date: anneesToJours(2502)-2, // pas laisser trop de liberté au joueur là dessus
    jourDuMois: -1,
    lieu: lieuParDefaut,
    statut: {rang: 4, metalStatut: MetalStatut.bronze},
    carriere: [],
    caracs: caracsDeBase(Race.humain),
    talents: [],
    dieu: {id: "panthéon de l'empire"}
};

export const jeuneHommeEnVoyageAUbersreik: Perso = {
    nom: "Wilhelm Hinderten",
    sexe: Sexe.male,
    race: Race.humain,
    dateNaissance: anneesToJours(2482), // entre 2482 et 2502 comme ça le perso a entre 10 et 30 ans quand l'ennemi intérieur démarre
    date: anneesToJours(2502), // pas laisser trop de liberté au joueur là dessus
    jourDuMois: -1,
    lieu: enVoyageAUbersreik,
    statut: {rang: 2, metalStatut: MetalStatut.argent},
    carriere: [],
    caracs: caracsDeBase(Race.humain),
    talents: [],
    dieu: {id: "panthéon de l'empire"}
};

export const nainEnVoyageAUbersreik: Perso = {
    nom: "Hurfin Surmarteau",
    sexe: Sexe.male,
    race: Race.nain,
    dateNaissance: anneesToJours(2018),
    date: anneesToJours(2502),
    jourDuMois: -1,
    lieu: enVoyageAUbersreik,
    statut: {rang: 2, metalStatut: MetalStatut.argent},
    carriere: [],
    caracs: caracsDeBase(Race.nain),
    talents: [],
    dieu: {id: "panthéon nain"}
};
