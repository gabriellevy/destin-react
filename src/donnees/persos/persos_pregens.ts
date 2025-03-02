import {Race} from "../races/Races.ts";
import {anneesToJours} from "../../types/Date.ts";
import {enVoyageAUbersreik, lieuAltdorf, lieuParDefaut} from "../../types/lieux/Lieu.ts";
import {MetalStatut} from "../../types/Statut.ts";
import {Perso, Sexe} from "../../types/Perso.ts";
import {caracsDeBase} from "../../types/caracs/Caracs.ts";
import {evts_programmes} from "../evts/evts_programmes.ts";
import {Carriere, metiersEnum, metierTest} from "../../types/metiers/metiers.ts";
import {unAnAvantDebutCampagne} from "../dates/ennemi_interieur.ts";

export const persoVide: Perso = {
    prenom: "Wilhelm",
    nom: "Kaburghen",
    carrieres: new Map<metiersEnum, Carriere>,
    caracs: caracsDeBase(Race.humain),
    date: 0,
    dateNaissance: 0,
    dieu: {id: "panthéon de l'empire"},
    evtsProgrammes: evts_programmes,
    jourDuMois: 0,
    lieu: lieuParDefaut,
    race: Race.humain,
    sexe: Sexe.male,
    statut: {rang: 4, metalStatut: MetalStatut.bronze},
    talents: [],
    vitesseExecution: 5000,
    corruption: 0,
}

export const enfant: Perso = {
    prenom: "Wilhelm",
    nom: "Kaburghen",
    sexe: Sexe.male,
    race: Race.humain,
    dateNaissance: anneesToJours(2492), // entre 2482 et 2502 comme ça le perso a entre 10 et 30 ans quand l'ennemi intérieur démarre
    date: anneesToJours(2502)-2, // pas laisser trop de liberté au joueur là dessus
    jourDuMois: -1,
    lieu: lieuParDefaut,
    statut: {rang: 4, metalStatut: MetalStatut.bronze},
    carrieres: new Map<metiersEnum, Carriere>,
    caracs: caracsDeBase(Race.humain),
    talents: [],
    dieu: {id: "panthéon de l'empire"},
    evtsProgrammes: evts_programmes,
    vitesseExecution: 5000,
    corruption: 0,
};

export const jeuneHommeEnVoyageAUbersreik: Perso = {
    prenom: "Wilhelm",
    nom: "Kaburghen",
    sexe: Sexe.male,
    race: Race.humain,
    dateNaissance: anneesToJours(2482), // entre 2482 et 2502 comme ça le perso a entre 10 et 30 ans quand l'ennemi intérieur démarre
    date: anneesToJours(2502), // pas laisser trop de liberté au joueur là dessus
    jourDuMois: -1,
    lieu: enVoyageAUbersreik,
    statut: {rang: 2, metalStatut: MetalStatut.argent},
    carrieres: new Map<metiersEnum, Carriere>,
    caracs: caracsDeBase(Race.humain),
    talents: [],
    dieu: {id: "panthéon de l'empire"},
    evtsProgrammes: evts_programmes,
    vitesseExecution: 5000,
    corruption: 0,
};

// époque du carnaval
export const bourgeoisDAltdorf: Perso = {
    prenom: "Wilhelm",
    nom: "Kaburghen",
    sexe: Sexe.male,
    race: Race.humain,
    dateNaissance: anneesToJours(2491),
    date: unAnAvantDebutCampagne, // début du pouvoir derrière le trône 3ème volume
    anneeDeDepart: 2511,
    age: 16,
    jourDuMois: -1,
    lieu: lieuAltdorf,
    statut: {rang: 1, metalStatut: MetalStatut.argent},
    carrieres: new Map<metiersEnum, Carriere>([[metiersEnum.bourgmestre, metierTest]]),
    caracs: caracsDeBase(Race.humain),
    talents: [],
    dieu: {id: "panthéon de l'empire"},
    evtsProgrammes: evts_programmes,
    vitesseExecution: 5000,
    corruption: 0,
};

export const nainEnVoyageAUbersreik: Perso = {
    prenom: "Hurfin",
    nom: "Surmarteau",
    sexe: Sexe.male,
    race: Race.nain,
    dateNaissance: anneesToJours(2018),
    date: anneesToJours(2502),
    jourDuMois: -1,
    lieu: enVoyageAUbersreik,
    statut: {rang: 2, metalStatut: MetalStatut.argent},
    carrieres: new Map<metiersEnum, Carriere>,
    caracs: caracsDeBase(Race.nain),
    talents: [],
    dieu: {id: "panthéon nain"},
    evtsProgrammes: evts_programmes,
    vitesseExecution: 5000,
    corruption: 0,
};
