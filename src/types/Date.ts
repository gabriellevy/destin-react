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
    let numeroJourSemaine: number = joursDepuis0 % JOURS_PAR_SEMAINE + 1;
    // les fêtes jours intercalaires entre mois comptent comme des mois
    let numeroJourMois: number = -1;
    const annee = joursToAnnees(joursDepuis0);
    return formatJourStr(numeroJourSemaine, calculMoisEtJourSuMoisStr(joursDepuis0), annee);
}

function calculMoisEtJourSuMoisStr(joursDepuis0: number): string {
    let joursDepuisDebutAnnee: number = jourDansLAnnee(joursDepuis0);
    let numeroMois: number = -1;

    // détermination du mois
    if (joursDepuisDebutAnnee == 1) {
        return "Hexenstag";
    }
    else if (joursDepuisDebutAnnee <= 33) return joursDepuisDebutAnnee-1 + " Nachexen"
    else if (joursDepuisDebutAnnee <= 66) numeroMois = 2;
    else if (joursDepuisDebutAnnee == 67) numeroMois = 3;
    else if (joursDepuisDebutAnnee <= 100) numeroMois = 4;
    else if (joursDepuisDebutAnnee <= 133) numeroMois = 5;
    else if (joursDepuisDebutAnnee <= 166) numeroMois = 6;
    else if (joursDepuisDebutAnnee == 167) numeroMois = 7;
    else if (joursDepuisDebutAnnee <= 200) numeroMois = 8;
    else if (joursDepuisDebutAnnee == 201) numeroMois = 9;
    else if (joursDepuisDebutAnnee <= 233) numeroMois = 10;
    else if (joursDepuisDebutAnnee <= 266) numeroMois = 11;
    else if (joursDepuisDebutAnnee == 267) numeroMois = 12;
    else if (joursDepuisDebutAnnee <= 300) numeroMois = 13;
    else if (joursDepuisDebutAnnee <= 333) numeroMois = 14;
    else if (joursDepuisDebutAnnee <= 366) numeroMois = 15;
    else if (joursDepuisDebutAnnee == 367) numeroMois = 16;
    else if (joursDepuisDebutAnnee <= 400) numeroMois = 17;

    return "mois inconnu"
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

export function formatJourStr(numeroJourSemaine: number, moisEtSonNumeroStr: string, annee: number): string {
    let final = numJourSemaineToStr(numeroJourSemaine);
    final += " " + moisEtSonNumeroStr;
    final += " " + annee;
    return final;
}