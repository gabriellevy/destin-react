import {Race} from "../races/Races.ts";
import {anneesToJours} from "../../types/Date.ts";
import {enVoyageAUbersreik, lieuAltdorf, lieuParDefaut} from "../../types/lieux/Lieu.ts";
import {MetalStatut} from "../../types/Statut.ts";
import {Perso, Sexe} from "../../types/Perso.ts";
import {caracsDeBase} from "../../types/caracs/Caracs.ts";
import {evts_programmes} from "../evts/evts_programmes.ts";
import {Carriere, metiersEnum} from "../../types/metiers/metiers.ts";

export const enfant: Perso = {
    nom: "Wilhelm Hinderten",
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
    carrieres: new Map<metiersEnum, Carriere>,
    caracs: caracsDeBase(Race.humain),
    talents: [],
    dieu: {id: "panthéon de l'empire"},
    evtsProgrammes: evts_programmes,
};

// époque du carnaval
export const bourgeoisDAltdorf: Perso = {
    nom: "Wilhelm Hinderten",
    sexe: Sexe.male,
    race: Race.humain,
    dateNaissance: anneesToJours(2488),
    date: anneesToJours(2513), // début du pouvoir derrière le trône 3ème volume
    jourDuMois: -1,
    lieu: lieuAltdorf,
    statut: {rang: 1, metalStatut: MetalStatut.argent},
    carrieres: new Map<metiersEnum, Carriere>,
    caracs: caracsDeBase(Race.humain),
    talents: [],
    dieu: {id: "panthéon de l'empire"},
    evtsProgrammes: evts_programmes,
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
    carrieres: new Map<metiersEnum, Carriere>,
    caracs: caracsDeBase(Race.nain),
    talents: [],
    dieu: {id: "panthéon nain"},
    evtsProgrammes: evts_programmes,
};
