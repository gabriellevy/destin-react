import {MetalStatut, Statut} from "../Statut.ts";
import {Perso} from "../Perso.ts";

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
    confesseur = "Confesseur", // sorte de prêtre confesseur spécialisé associé à une famille riche
    etudiant_ingenieur = "Étudiant ingénieur",
    ingenieur = "Ingénieur",
    batelier = "Batelier",
}

export type Metier = {
    nom: metiersEnum,
    statut: Statut,
    statutMax: Statut,
    intitule: (perso: Perso,carriere: Carriere) => string,
}

export type MetierObj = Record<metiersEnum, Metier>;

export const metiersObjs: MetierObj = {
    // citadins
    [metiersEnum.pamphletaire] : {
        nom: metiersEnum.pamphletaire,
        intitule: () => metiersEnum.pamphletaire,
        statut: {rang: 1, metalStatut: MetalStatut.bronze},
        statutMax: {rang: 5, metalStatut: MetalStatut.bronze},
    },
    [metiersEnum.apprenti_artisan] : {
        nom: metiersEnum.apprenti_artisan,
        intitule: () => metiersEnum.apprenti_artisan,
        statut: {rang: 2, metalStatut: MetalStatut.bronze},
        statutMax: {rang: 5, metalStatut: MetalStatut.bronze},
    },
    [metiersEnum.artisan] : {
        nom: metiersEnum.artisan,
        intitule: () => metiersEnum.artisan,
        statut: {rang: 1, metalStatut: MetalStatut.argent},
        statutMax: {rang: 4, metalStatut: MetalStatut.argent},
    },
    [metiersEnum.etudiant_ingenieur] : {
        nom: metiersEnum.etudiant_ingenieur,
        intitule: () => metiersEnum.etudiant_ingenieur,
        statut: {rang: 2, metalStatut: MetalStatut.bronze},
        statutMax: {rang: 5, metalStatut: MetalStatut.bronze},
    },
    [metiersEnum.ingenieur] : {
        nom: metiersEnum.ingenieur,
        intitule: () => metiersEnum.ingenieur,
        statut: {rang: 2, metalStatut: MetalStatut.argent},
        statutMax: {rang: 2, metalStatut: MetalStatut.or},
    },
    [metiersEnum.batelier] : {
        nom: metiersEnum.batelier,
        intitule: () => metiersEnum.batelier,
        statut: {rang: 1, metalStatut: MetalStatut.argent},
        statutMax: {rang: 5, metalStatut: MetalStatut.argent},
    },
    [metiersEnum.maitre_de_guilde] : {
        nom: metiersEnum.maitre_de_guilde,
        intitule: () => metiersEnum.maitre_de_guilde,
        statut: {rang: 1, metalStatut: MetalStatut.or},
        statutMax: {rang: 2, metalStatut: MetalStatut.or},
    },
    [metiersEnum.serveur] : {
        nom: metiersEnum.serveur,
        intitule: (_perso: Perso, carriere: Carriere) => {
            return metiersEnum.serveur + " à " + carriere?.groupeLieu;
        },
        statut: {rang: 2, metalStatut: MetalStatut.bronze},
        statutMax: {rang: 2, metalStatut: MetalStatut.argent},
    },
    [metiersEnum.ranconneur] : {
        nom: metiersEnum.ranconneur,
        intitule: () => metiersEnum.ranconneur,
        statut: {rang: 3, metalStatut: MetalStatut.bronze},
        statutMax: {rang: 5, metalStatut: MetalStatut.argent},
    },
    [metiersEnum.novice] : {
        nom: metiersEnum.novice,
        intitule: (perso: Perso) => {
            return metiersEnum.novice + " de " + perso.dieu.id;
        },
        statut: {rang: 1, metalStatut: MetalStatut.bronze},
        statutMax: {rang: 2, metalStatut: MetalStatut.bronze},
    },
    [metiersEnum.initie_pretre] : {
        nom: metiersEnum.initie_pretre,
        intitule: (perso: Perso) => metiersEnum.initie_pretre + " de " + perso.dieu.id,
        statut: {rang: 2, metalStatut: MetalStatut.bronze},
        statutMax: {rang: 4, metalStatut: MetalStatut.bronze},
    },
    [metiersEnum.moine] : {
        nom: metiersEnum.moine,
        intitule: (perso: Perso) => metiersEnum.moine + " de " + perso.dieu.id,
        statut: {rang: 4, metalStatut: MetalStatut.bronze},
        statutMax: {rang: 5, metalStatut: MetalStatut.argent},
    },
    [metiersEnum.pretre] : {
        nom: metiersEnum.pretre,
        intitule: (perso: Perso) => metiersEnum.pretre + " de " + perso.dieu.id,
        statut: {rang: 1, metalStatut: MetalStatut.argent},
        statutMax: {rang: 2, metalStatut: MetalStatut.or},
    },
    [metiersEnum.confesseur] : {
        nom: metiersEnum.confesseur,
        intitule: (_perso: Perso, carriere: Carriere) => metiersEnum.confesseur + " de " + carriere.employeur,
        statut: {rang: 1, metalStatut: MetalStatut.or},
        statutMax: {rang: 2, metalStatut: MetalStatut.or},
    },
}

export type Carriere = {
    metier: Metier,
    groupeLieu?: string, // ou ?
    employeur?: string, // quel groupe ou employeur ?
    duree: number, // temps passé à pratiquer ce métier
    competence: number, // sur 100. 1 en débutant
}

export const serveurDebutant: Carriere = {
    metier: metiersObjs[metiersEnum.serveur],
    groupeLieu: "Auberge du pont",
    duree: 0,
    competence: 1,
};
