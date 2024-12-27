import {MetalStatut, Statut} from "../Statut.ts";

export const metiersObjs: Record<string, Metier> = {
    // citadins
    pamphletaire : {
        nom: metiersEnum.pamphletaire,
        statut: {rang: 1, metalStatut: MetalStatut.bronze},
        statutMax: {rang: 5, metalStatut: MetalStatut.bronze},
    },
    apprenti_artisan : {
        nom: metiersEnum.apprenti_artisan,
        statut: {rang: 2, metalStatut: MetalStatut.bronze},
        statutMax: {rang: 5, metalStatut: MetalStatut.bronze},
    },
    artisan : {
        nom: metiersEnum.artisan,
        statut: {rang: 1, metalStatut: MetalStatut.argent},
        statutMax: {rang: 4, metalStatut: MetalStatut.argent},
    },
    maitre_de_guilde : {
        nom: metiersEnum.maitre_de_guilde,
        statut: {rang: 1, metalStatut: MetalStatut.or},
        statutMax: {rang: 2, metalStatut: MetalStatut.or},
    },
    serveur : {
        nom: metiersEnum.serveur,
        statut: {rang: 2, metalStatut: MetalStatut.bronze},
        statutMax: {rang: 2, metalStatut: MetalStatut.argent},
    },
}

export type Carriere = {
    metier: Metier,
    duree: number, // temps passé à pratiquer ce métier
    competence: number // sur 100. 1 en débutant
}

export const serveurDebutant: Carriere = {
    metier: metiersObjs.serveur,
    duree: 0,
    competence: 1,
};

export type Metier = {
    nom: metiersEnum,
    statut: Statut,
    statutMax: Statut,
}

export enum metiersEnum {
    pamphletaire = "Pamphlétaire",
    apprenti_artisan = "Apprenti artisan",
    artisan = "Artisan",
    maitre_de_guilde = "Maître de guilde",
    serveur = "Serveur",
}