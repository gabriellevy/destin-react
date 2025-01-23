import {Carriere, metiersEnum} from "./metiers.ts";
import {Perso} from "../Perso.ts";
import {seuils} from "../caracs/Caracs.ts";
import {ResultatExecution} from "../Evt.ts";

// seulement els carrières actives
export function aUneCarriere(perso: Perso): boolean {
    let trouve: boolean = false;
    Array.from(perso.carrieres.values()).forEach((carriere: Carriere) => {
        if (carriere.actif) trouve = true;
    });
    return trouve;
}
export function suitUneCarriereDe(perso: Perso, metier: metiersEnum): boolean {
    let trouve: boolean = false;
    Array.from(perso.carrieres.values()).forEach(carriere => {
        if (carriere.metier.nom === metier) {
            trouve = true;
        }
    });
    return trouve;
}

/**
 * renvoie tru si le perso travaille actuellement sur cette carrière, donc si il la suit mais aussi qu'il n'est pas en vacances, malade, en voyage...
 */
export function travailleEnCeMomentComme(perso: Perso, metier: metiersEnum): boolean {
    return suitUneCarriereDe(perso, metier) && !perso.lieu.enVoyage;
}
export function neSuitPasUneCarriereDe(perso: Perso, metier: metiersEnum): boolean {
    let trouve: boolean = false;
    Array.from(perso.carrieres.values()).forEach(carriere => {
        if (carriere.metier.nom === metier) {
            trouve = true;
        }
    });
    return !trouve;
}

export function suitUneCarriereDepuis(perso: Perso, metier: metiersEnum, duree: number): boolean {
    let trouve: boolean = false;
    if (perso.carrieres) {
        Array.from(perso.carrieres.values()).forEach(carriere => {
            if (carriere.metier.nom === metier && carriere.duree >= duree) {
                trouve = true;
            }
        });
    }
    return trouve;
}

export function getCompetenceMetier(perso: Perso, metier: metiersEnum): number {
    let competence: number = 0;
    if (perso.carrieres) {
        Array.from(perso.carrieres.values()).forEach(carriere => {
            if (carriere.metier.nom === metier) {
                competence = carriere.competence;
            }
        });
    }
    return competence;
}
export function augmenterNbDeTestsFaitsMetier(perso: Perso, metier: metiersEnum): ResultatExecution {
    const carriere: Carriere | undefined = perso.carrieres.get(metier);
    if (carriere !== undefined) {
        const nbTests: number = carriere.nbDeTestsFaits + 1;
        carriere.nbDeTestsFaits = nbTests;
        if (seuils.includes(nbTests)) {
            // gain d'un point de compétence :
            carriere.competence += 1;
            return {texte: "+1 en " + metier.toString() + ". ", perso:perso};
        }
    }
    return {texte: "", perso:perso};
}



