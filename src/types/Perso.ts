import {enVoyageAUbersreik, Lieu, lieuParDefaut} from "./lieux/Lieu.ts";
import {anneesToJours} from "./Date.ts";
import {MetalStatut, Statut} from "./Statut.ts";
import {Carriere, metiersEnum} from "./metiers/metiers.ts";
import {Dieu} from "./Dieu.ts";
import {Carac, caracDeDepartAleatoire, TypeCarac} from "./caracs/Caracs.ts";
import {talents} from "../donnees/talents.ts";
import {Race} from "../donnees/races/Races.ts";

export type Perso = {
    nom: string;
    sexe: Sexe;
    dateNaissance: number;
    date: number, // en nombre de jours depuis l'an 0 du calendrier impérial
    lieu: Lieu,
    race: Race,
    // aide à la programmation mais aps à afficher directement :
    mois?: string, // déduit de date mais pratique pour optimiser les calculs de conditions en masse
    jourDuMois: number, // déduit de date mais pratique pour optimiser les calculs de conditions en masse
    statut: Statut;
    carriere: Carriere[],
    dieu: Dieu, // surtout utile si affilié à un temple (ou très très croyant en un dieu particulier)
    cc: Carac,
    ct: Carac,
    f: Carac,
    e: Carac,
    i: Carac,
    ag: Carac,
    dex: Carac,
    int: Carac,
    fm: Carac,
    soc: Carac,
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
    race: Race.humain,
    dateNaissance: anneesToJours(2492), // entre 2482 et 2502 comme ça le perso a entre 10 et 30 ans quand l'ennemi intérieur démarre
    date: anneesToJours(2502)-2, // pas laisser trop de liberté au joueur là dessus
    jourDuMois: -1,
    lieu: lieuParDefaut,
    statut: {rang: 4, metalStatut: MetalStatut.bronze},
    carriere: [],
    cc: {
        val: caracDeDepartAleatoire(TypeCarac.cc, Race.humain),
        nbDeTestsFaits: 0,
        typeCarac: TypeCarac.cc,
    },
    ct: {
        val: caracDeDepartAleatoire(TypeCarac.ct, Race.humain),
        nbDeTestsFaits: 0,
        typeCarac: TypeCarac.ct,
    },
    f: {
        val: caracDeDepartAleatoire(TypeCarac.f, Race.humain),
        nbDeTestsFaits: 0,
        typeCarac: TypeCarac.f,
    },
    e: {
        val: caracDeDepartAleatoire(TypeCarac.e, Race.humain),
        nbDeTestsFaits: 0,
        typeCarac: TypeCarac.e,
    },
    i: {
        val: caracDeDepartAleatoire(TypeCarac.i, Race.humain),
        nbDeTestsFaits: 0,
        typeCarac: TypeCarac.i,
    },
    ag: {
        val: caracDeDepartAleatoire(TypeCarac.ag, Race.humain),
        nbDeTestsFaits: 0,
        typeCarac: TypeCarac.ag,
    },
    dex: {
        val: caracDeDepartAleatoire(TypeCarac.dex, Race.humain),
        nbDeTestsFaits: 0,
        typeCarac: TypeCarac.dex,
    },
    int: {
        val: caracDeDepartAleatoire(TypeCarac.int, Race.humain),
        nbDeTestsFaits: 0,
        typeCarac: TypeCarac.int,
    },
    fm: {
        val: caracDeDepartAleatoire(TypeCarac.fm, Race.humain),
        nbDeTestsFaits: 0,
        typeCarac: TypeCarac.fm,
    },
    soc: {
        val: caracDeDepartAleatoire(TypeCarac.soc, Race.humain),
        nbDeTestsFaits: 0,
        typeCarac: TypeCarac.soc,
    },
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
    cc: {
        val: caracDeDepartAleatoire(TypeCarac.cc, Race.humain),
        nbDeTestsFaits: 0,
        typeCarac: TypeCarac.cc,
    },
    ct: {
        val: caracDeDepartAleatoire(TypeCarac.ct, Race.humain),
        nbDeTestsFaits: 0,
        typeCarac: TypeCarac.ct,
    },
    f: {
        val: caracDeDepartAleatoire(TypeCarac.f, Race.humain),
        nbDeTestsFaits: 0,
        typeCarac: TypeCarac.f,
    },
    e: {
        val: caracDeDepartAleatoire(TypeCarac.e, Race.humain),
        nbDeTestsFaits: 0,
        typeCarac: TypeCarac.e,
    },
    i: {
        val: caracDeDepartAleatoire(TypeCarac.i, Race.humain),
        nbDeTestsFaits: 0,
        typeCarac: TypeCarac.i,
    },
    ag: {
        val: caracDeDepartAleatoire(TypeCarac.ag, Race.humain),
        nbDeTestsFaits: 0,
        typeCarac: TypeCarac.ag,
    },
    dex: {
        val: caracDeDepartAleatoire(TypeCarac.dex, Race.humain),
        nbDeTestsFaits: 0,
        typeCarac: TypeCarac.dex,
    },
    int: {
        val: caracDeDepartAleatoire(TypeCarac.int, Race.humain),
        nbDeTestsFaits: 0,
        typeCarac: TypeCarac.int,
    },
    fm: {
        val: caracDeDepartAleatoire(TypeCarac.fm, Race.humain),
        nbDeTestsFaits: 0,
        typeCarac: TypeCarac.fm,
    },
    soc: {
        val: caracDeDepartAleatoire(TypeCarac.soc, Race.humain),
        nbDeTestsFaits: 0,
        typeCarac: TypeCarac.soc,
    },
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
    cc: {
        val: caracDeDepartAleatoire(TypeCarac.cc, Race.nain),
        nbDeTestsFaits: 0,
        typeCarac: TypeCarac.cc,
    },
    ct: {
        val: caracDeDepartAleatoire(TypeCarac.ct, Race.nain),
        nbDeTestsFaits: 0,
        typeCarac: TypeCarac.ct,
    },
    f: {
        val: caracDeDepartAleatoire(TypeCarac.f, Race.nain),
        nbDeTestsFaits: 0,
        typeCarac: TypeCarac.f,
    },
    e: {
        val: caracDeDepartAleatoire(TypeCarac.e, Race.nain),
        nbDeTestsFaits: 0,
        typeCarac: TypeCarac.e,
    },
    i: {
        val: caracDeDepartAleatoire(TypeCarac.i, Race.nain),
        nbDeTestsFaits: 0,
        typeCarac: TypeCarac.i,
    },
    ag: {
        val: caracDeDepartAleatoire(TypeCarac.ag, Race.nain),
        nbDeTestsFaits: 0,
        typeCarac: TypeCarac.ag,
    },
    dex: {
        val: caracDeDepartAleatoire(TypeCarac.dex, Race.nain),
        nbDeTestsFaits: 0,
        typeCarac: TypeCarac.dex,
    },
    int: {
        val: caracDeDepartAleatoire(TypeCarac.int, Race.nain),
        nbDeTestsFaits: 0,
        typeCarac: TypeCarac.int,
    },
    fm: {
        val: caracDeDepartAleatoire(TypeCarac.fm, Race.nain),
        nbDeTestsFaits: 0,
        typeCarac: TypeCarac.fm,
    },
    soc: {
        val: caracDeDepartAleatoire(TypeCarac.soc, Race.nain),
        nbDeTestsFaits: 0,
        typeCarac: TypeCarac.soc,
    },
    talents: [],
    dieu: {id: "panthéon nain"}
};
