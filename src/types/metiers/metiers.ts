import {MetalStatut, Statut} from "../Statut.ts";
import {Perso} from "../Perso.ts";

export const metiersObjs: Record<string, Metier> = {
    // citadins
    pamphletaire : {
        nom: metiersEnum.pamphletaire,
        intitule: () => metiersEnum.pamphletaire,
        statut: {rang: 1, metalStatut: MetalStatut.bronze},
        statutMax: {rang: 5, metalStatut: MetalStatut.bronze},
    },
    apprenti_artisan : {
        nom: metiersEnum.apprenti_artisan,
        intitule: () => metiersEnum.apprenti_artisan,
        statut: {rang: 2, metalStatut: MetalStatut.bronze},
        statutMax: {rang: 5, metalStatut: MetalStatut.bronze},
    },
    artisan : {
        nom: metiersEnum.artisan,
        intitule: () => metiersEnum.artisan,
        statut: {rang: 1, metalStatut: MetalStatut.argent},
        statutMax: {rang: 4, metalStatut: MetalStatut.argent},
    },
    maitre_de_guilde : {
        nom: metiersEnum.maitre_de_guilde,
        intitule: () => metiersEnum.maitre_de_guilde,
        statut: {rang: 1, metalStatut: MetalStatut.or},
        statutMax: {rang: 2, metalStatut: MetalStatut.or},
    },
    serveur : {
        nom: metiersEnum.serveur,
        intitule: (perso: Perso) => {
            return metiersEnum.serveur + " à " + perso.carriere?.groupeLieu;
        },
        statut: {rang: 2, metalStatut: MetalStatut.bronze},
        statutMax: {rang: 2, metalStatut: MetalStatut.argent},
    },
    ranconneur : {
        nom: metiersEnum.ranconneur,
        intitule: () => metiersEnum.ranconneur,
        statut: {rang: 3, metalStatut: MetalStatut.bronze},
        statutMax: {rang: 5, metalStatut: MetalStatut.argent},
    },
    novice : {
        nom: metiersEnum.novice,
        intitule: (perso: Perso) => {
            return metiersEnum.novice + " de " + perso.dieu;
        },
        statut: {rang: 1, metalStatut: MetalStatut.bronze},
        statutMax: {rang: 2, metalStatut: MetalStatut.bronze},
    },
    initie_pretre : {
        nom: metiersEnum.initie_pretre,
        intitule: (perso: Perso) => metiersEnum.initie_pretre + " de " + perso.dieu,
        statut: {rang: 2, metalStatut: MetalStatut.bronze},
        statutMax: {rang: 4, metalStatut: MetalStatut.bronze},
    },
    moine : {
        nom: metiersEnum.moine,
        intitule: (perso: Perso) => metiersEnum.moine + " de " + perso.dieu,
        statut: {rang: 4, metalStatut: MetalStatut.bronze},
        statutMax: {rang: 5, metalStatut: MetalStatut.argent},
    },
    pretre : {
        nom: metiersEnum.pretre,
        intitule: (perso: Perso) => metiersEnum.pretre + " de " + perso.dieu,
        statut: {rang: 1, metalStatut: MetalStatut.argent},
        statutMax: {rang: 2, metalStatut: MetalStatut.or},
    },
}

export type Carriere = {
    metier: Metier,
    groupeLieu?: string, // ou et avec quel groupe ?
    duree: number, // temps passé à pratiquer ce métier
    competence: number // sur 100. 1 en débutant
}

export const serveurDebutant: Carriere = {
    metier: metiersObjs.serveur,
    groupeLieu: "Auberge du pont",
    duree: 0,
    competence: 1,
};

export type Metier = {
    nom: metiersEnum,
    statut: Statut,
    statutMax: Statut,
    intitule: (perso:Perso) => string,
}

export enum metiersEnum {
    pamphletaire = "Pamphlétaire",
    apprenti_artisan = "Apprenti artisan",
    artisan = "Artisan",
    maitre_de_guilde = "Maître de guilde",
    serveur = "Serveur",
    ranconneur = "Rançonneur",
    novice = "Moine novice",
    moine = "Moine",
    initie_pretre = "Initié prêtre",
    pretre = "Prêtre",
}
