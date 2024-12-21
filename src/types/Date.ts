import {Perso} from "./Perso.ts";

export const JOURS_PAR_AN = 400;
export const JOURS_PAR_SEMAINE = 8;

export function joursToAnnees(jours: number) {return Math.floor(jours / JOURS_PAR_AN)}
export function anneesToJours(annees: number) {return annees * JOURS_PAR_AN}
export function age(perso: Perso) {return joursToAnnees(perso.date - perso.dateNaissance)}
// numéro du jour actuel depuis le début de l'année en cours (dibc de 0 à JOURS_PAR_AN-1)
export function jourDansLAnnee(joursDepuis0: number) {return joursDepuis0%JOURS_PAR_AN}
// dénomination complète du jour : "jour_semaine numéro_du_mois mois année"
export function jourStr(joursDepuis0: number): string {
    let numeroJourSemaine: number = joursDepuis0 % JOURS_PAR_SEMAINE;
    // les fêtes jours intercalaires entre mois comptent comme des mois
    let numeroJourMois: number = -1;
    let numeroMois: number = -1;
    const annee = joursToAnnees(joursDepuis0);
    if (joursDepuis0 == 0) numeroMois = 0;
    return formatJourStr(numeroJourSemaine, numeroJourMois, numeroMois, annee);
}

export function numJourSemaineToStr(numeroJourSemaine: number): string {
    switch (numeroJourSemaine) {
        case 0: return "Wellentag";
        case 1: return "Aubentag";
        case 2: return "Marktag";
        case 3: return "Backertag";
        case 4: return "Bezahltag";
        case 5: return "Konigstag";
        case 6: return "Angestag";
        case 7: return "Festag";
    }
}

export function formatJourStr(numeroJourSemaine: number, numeroJourMois: number, numeroMois: number, annee: number): string {
    let final = numJourSemaineToStr(numeroJourSemaine);

    return final;
}