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
    const annee = joursToAnnees(joursDepuis0);
    return formatJourStr(numeroJourSemaine, calculMoisEtJourSuMoisStr(joursDepuis0), annee);
}

function calculMoisEtJourSuMoisStr(joursDepuis0: number): string {
    let joursDepuisDebutAnnee: number = jourDansLAnnee(joursDepuis0);

    // détermination du mois
    if (joursDepuisDebutAnnee == 1) {
        return "Hexenstag";
    }
    else if (joursDepuisDebutAnnee <= 33) return joursDepuisDebutAnnee-1 + " Nachexen";
    else if (joursDepuisDebutAnnee <= 66) return joursDepuisDebutAnnee-33 + " Jahrdrung";
    else if (joursDepuisDebutAnnee == 67) return "Mitterfruhl";
    else if (joursDepuisDebutAnnee <= 100) return joursDepuisDebutAnnee-67 + " Pflugzeit";
    else if (joursDepuisDebutAnnee <= 133) return joursDepuisDebutAnnee-100 + " Sigmarzeit";
    else if (joursDepuisDebutAnnee <= 166) return joursDepuisDebutAnnee-133 + " Sommerzei";
    else if (joursDepuisDebutAnnee == 167) return "Sonnstill";
    else if (joursDepuisDebutAnnee <= 200) return joursDepuisDebutAnnee-167 + " Vorgeheim";
    else if (joursDepuisDebutAnnee == 201) return "Geheimnistag";
    else if (joursDepuisDebutAnnee <= 233) return joursDepuisDebutAnnee-201 + " Nachgeheim";
    else if (joursDepuisDebutAnnee <= 266) return joursDepuisDebutAnnee-233 + " Erntezeit";
    else if (joursDepuisDebutAnnee == 267) return "Mittherbst";
    else if (joursDepuisDebutAnnee <= 300) return joursDepuisDebutAnnee-267 + " Brauzeit";
    else if (joursDepuisDebutAnnee <= 333) return joursDepuisDebutAnnee-300 + " Kaldezeit";
    else if (joursDepuisDebutAnnee <= 366) return joursDepuisDebutAnnee-333 + " Ulriczeit ";
    else if (joursDepuisDebutAnnee == 367) return "Mondstille";
    else if (joursDepuisDebutAnnee <= 400) return joursDepuisDebutAnnee-367 + " Vorhexen ";

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