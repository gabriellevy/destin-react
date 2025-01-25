import {Perso} from "./Perso.ts";
import {Evt} from "./Evt.ts";
import {Carriere} from "./metiers/metiers.ts";

export const JOURS_PAR_AN = 400;
export const JOURS_PAR_SEMAINE = 8;

export enum enumMois {
    HEXENSTAG = "Hexenstag",
    NACHEXEN = "Nachexen",
    JAHRDRUNG = "Jahrdrung",
    PFLUGZEIT = "Pflugzeit",
    SIGMARZEIT = "Sigmarzeit",
    SOMMERZEIT = "Sommerzeit",
    MITTERFRUHL = "Mitterfruhl",
    SONNSTILL = "Sonnstill",
    VORGEHEIM = "Vorgeheim",
    GEHEIMISTAG = "Geheimnistag",
    NACHGEHEIM = "Nachgeheim",
    ERNTEZEIT = "Erntezeit",
    MITTHERBST = "Mittherbst",
    BRAUZEIT = "Brauzeit",
    KALDEZEIT = "Kaldezeit",
    ULRICZEIT = "Ulriczeit",
    MONDSTILLE = "Mondstille",
    VORHEXEN = "Vorhexen",
}

export function joursToAnnees(jours: number) {return Math.floor(jours / JOURS_PAR_AN)}
export function anneesToJours(annees: number) {return annees * JOURS_PAR_AN}
export function age(perso: Perso) {return joursToAnnees(perso.date - perso.dateNaissance)}
// numéro du jour actuel depuis le début de l'année en cours (dibc de 0 à JOURS_PAR_AN-1)
export function jourDansLAnnee(joursDepuis0: number) {return joursDepuis0%JOURS_PAR_AN + 1}

// dénomination complète du jour : "jour_semaine numéro_du_mois mois année"
export function jourStr(joursDepuis0: number): string {
    const numeroJourSemaine: number = joursDepuis0 % JOURS_PAR_SEMAINE;
    const annee = joursToAnnees(joursDepuis0);
    return formatJourStr(numeroJourSemaine, calculJourDuMois(joursDepuis0), calculMoisStr(joursDepuis0), annee);
}

export const nbJoursDansMois:Record<enumMois, number> = {
    [enumMois.HEXENSTAG]: 1,
    [enumMois.NACHEXEN]: 32,
    [enumMois.JAHRDRUNG]: 33,
    [enumMois.MITTERFRUHL]: 1,
    [enumMois.PFLUGZEIT]: 33,
    [enumMois.SIGMARZEIT]: 33,
    [enumMois.SOMMERZEIT]: 33,
    [enumMois.SONNSTILL]: 1,
    [enumMois.VORGEHEIM]: 33,
    [enumMois.GEHEIMISTAG]: 1,
    [enumMois.NACHGEHEIM]: 32,
    [enumMois.ERNTEZEIT]: 33,
    [enumMois.MITTHERBST]: 1,
    [enumMois.BRAUZEIT]: 33,
    [enumMois.KALDEZEIT]: 33,
    [enumMois.ULRICZEIT]: 33,
    [enumMois.MONDSTILLE]: 1,
    [enumMois.VORHEXEN]: 33,
};

// numéro du jour du dernier jour de chaque mois (sur l'échelle de jours dans une année)
export const nbJourDuDernierJourDuMois:Record<enumMois, number> = {
    [enumMois.HEXENSTAG]: 1,
    [enumMois.NACHEXEN]: 33,
    [enumMois.JAHRDRUNG]: 66,
    [enumMois.MITTERFRUHL]: 67,
    [enumMois.PFLUGZEIT]: 100,
    [enumMois.SIGMARZEIT]: 133,
    [enumMois.SOMMERZEIT]: 166,
    [enumMois.SONNSTILL]: 167,
    [enumMois.VORGEHEIM]: 200,
    [enumMois.GEHEIMISTAG]: 201,
    [enumMois.NACHGEHEIM]: 233,
    [enumMois.ERNTEZEIT]: 266,
    [enumMois.MITTHERBST]: 267,
    [enumMois.BRAUZEIT]: 300,
    [enumMois.KALDEZEIT]: 333,
    [enumMois.ULRICZEIT]: 366,
    [enumMois.MONDSTILLE]: 367,
    [enumMois.VORHEXEN]: 400,
};

function calculJourDuMois(joursDepuis0: number): number {
    const joursDepuisDebutAnnee: number = jourDansLAnnee(joursDepuis0);

    // détermination du mois
    if (joursDepuisDebutAnnee == nbJourDuDernierJourDuMois[enumMois.HEXENSTAG]) {
        return -1;
    }
    else if (joursDepuisDebutAnnee <= nbJourDuDernierJourDuMois[enumMois.NACHEXEN]) {
        return joursDepuisDebutAnnee - nbJourDuDernierJourDuMois[enumMois.HEXENSTAG];
    }
    else if (joursDepuisDebutAnnee <= nbJourDuDernierJourDuMois[enumMois.JAHRDRUNG])
        return joursDepuisDebutAnnee-nbJourDuDernierJourDuMois[enumMois.HEXENSTAG];
    else if (joursDepuisDebutAnnee == nbJourDuDernierJourDuMois[enumMois.MITTERFRUHL])
        return -1;
    else if (joursDepuisDebutAnnee <= nbJourDuDernierJourDuMois[enumMois.PFLUGZEIT])
        return joursDepuisDebutAnnee-nbJourDuDernierJourDuMois[enumMois.MITTERFRUHL];
    else if (joursDepuisDebutAnnee <= nbJourDuDernierJourDuMois[enumMois.SIGMARZEIT])
        return joursDepuisDebutAnnee-nbJourDuDernierJourDuMois[enumMois.PFLUGZEIT];
    else if (joursDepuisDebutAnnee <= nbJourDuDernierJourDuMois[enumMois.SOMMERZEIT])
        return joursDepuisDebutAnnee-nbJourDuDernierJourDuMois[enumMois.SIGMARZEIT];
    else if (joursDepuisDebutAnnee == nbJourDuDernierJourDuMois[enumMois.SONNSTILL])
        return -1;
    else if (joursDepuisDebutAnnee <= nbJourDuDernierJourDuMois[enumMois.VORGEHEIM])
        return joursDepuisDebutAnnee-nbJourDuDernierJourDuMois[enumMois.SONNSTILL];
    else if (joursDepuisDebutAnnee == nbJourDuDernierJourDuMois[enumMois.GEHEIMISTAG])
        return -1;
    else if (joursDepuisDebutAnnee <= nbJourDuDernierJourDuMois[enumMois.NACHGEHEIM])
        return joursDepuisDebutAnnee-nbJourDuDernierJourDuMois[enumMois.GEHEIMISTAG];
    else if (joursDepuisDebutAnnee <= nbJourDuDernierJourDuMois[enumMois.ERNTEZEIT])
        return joursDepuisDebutAnnee-nbJourDuDernierJourDuMois[enumMois.NACHGEHEIM];
    else if (joursDepuisDebutAnnee == nbJourDuDernierJourDuMois[enumMois.MITTHERBST])
        return -1;
    else if (joursDepuisDebutAnnee <= nbJourDuDernierJourDuMois[enumMois.BRAUZEIT])
        return joursDepuisDebutAnnee-nbJourDuDernierJourDuMois[enumMois.MITTHERBST];
    else if (joursDepuisDebutAnnee <= nbJourDuDernierJourDuMois[enumMois.KALDEZEIT])
        return joursDepuisDebutAnnee-nbJourDuDernierJourDuMois[enumMois.BRAUZEIT];
    else if (joursDepuisDebutAnnee <= nbJourDuDernierJourDuMois[enumMois.ULRICZEIT])
        return joursDepuisDebutAnnee-nbJourDuDernierJourDuMois[enumMois.KALDEZEIT];
    else if (joursDepuisDebutAnnee == nbJourDuDernierJourDuMois[enumMois.MONDSTILLE])
        return -1;
    else if (joursDepuisDebutAnnee <= nbJourDuDernierJourDuMois[enumMois.VORHEXEN])
        return joursDepuisDebutAnnee-nbJourDuDernierJourDuMois[enumMois.MONDSTILLE];

    return -1;
}

function calculMoisStr(joursDepuis0: number): string {
    const joursDepuisDebutAnnee: number = jourDansLAnnee(joursDepuis0);

    // détermination du mois
    if (joursDepuisDebutAnnee == nbJourDuDernierJourDuMois[enumMois.HEXENSTAG]) {
        return enumMois.HEXENSTAG;
    }
    else if (joursDepuisDebutAnnee <= nbJourDuDernierJourDuMois[enumMois.NACHEXEN])
        return enumMois.NACHEXEN;
    else if (joursDepuisDebutAnnee <= nbJourDuDernierJourDuMois[enumMois.JAHRDRUNG])
        return enumMois.JAHRDRUNG;
    else if (joursDepuisDebutAnnee == nbJourDuDernierJourDuMois[enumMois.MITTERFRUHL])
        return enumMois.MITTERFRUHL;
    else if (joursDepuisDebutAnnee <= nbJourDuDernierJourDuMois[enumMois.PFLUGZEIT])
        return enumMois.PFLUGZEIT;
    else if (joursDepuisDebutAnnee <= nbJourDuDernierJourDuMois[enumMois.SIGMARZEIT])
        return enumMois.SIGMARZEIT;
    else if (joursDepuisDebutAnnee <= nbJourDuDernierJourDuMois[enumMois.SOMMERZEIT])
        return enumMois.SOMMERZEIT;
    else if (joursDepuisDebutAnnee == nbJourDuDernierJourDuMois[enumMois.SONNSTILL])
        return enumMois.SONNSTILL;
    else if (joursDepuisDebutAnnee <= nbJourDuDernierJourDuMois[enumMois.VORGEHEIM])
        return enumMois.VORGEHEIM;
    else if (joursDepuisDebutAnnee == nbJourDuDernierJourDuMois[enumMois.GEHEIMISTAG])
        return enumMois.GEHEIMISTAG;
    else if (joursDepuisDebutAnnee <= nbJourDuDernierJourDuMois[enumMois.NACHGEHEIM])
        return enumMois.NACHGEHEIM;
    else if (joursDepuisDebutAnnee <= nbJourDuDernierJourDuMois[enumMois.ERNTEZEIT])
        return enumMois.ERNTEZEIT;
    else if (joursDepuisDebutAnnee == nbJourDuDernierJourDuMois[enumMois.MITTHERBST])
        return enumMois.MITTHERBST;
    else if (joursDepuisDebutAnnee <= nbJourDuDernierJourDuMois[enumMois.BRAUZEIT])
        return enumMois.BRAUZEIT;
    else if (joursDepuisDebutAnnee <= nbJourDuDernierJourDuMois[enumMois.KALDEZEIT])
        return enumMois.KALDEZEIT;
    else if (joursDepuisDebutAnnee <= nbJourDuDernierJourDuMois[enumMois.ULRICZEIT])
        return enumMois.ULRICZEIT;
    else if (joursDepuisDebutAnnee == nbJourDuDernierJourDuMois[enumMois.MONDSTILLE])
        return enumMois.MONDSTILLE;
    else if (joursDepuisDebutAnnee <= nbJourDuDernierJourDuMois[enumMois.VORHEXEN])
        return enumMois.VORHEXEN;

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
    return "non défini !";
}

export function formatJourStr(numeroJourSemaine: number, jourDuMois:number, moisStr: string, annee: number): string {
    let final: string = numJourSemaineToStr(numeroJourSemaine);
    if (jourDuMois != -1) {
        final += " " + jourDuMois;
    }
    final += " " + moisStr;
    final += " " + annee;
    return final;
}

export function dateCompleteToJourDepuis0(jourDansMois: number, mois: enumMois, annee: number): number {
    return (anneesToJours(annee) +
        nbJoursDansMois[mois] +
        jourDansMois);
}

export function leTempsPasse(perso: Perso, executerEvt: (evtExecute: Evt, dateDejaAffichee: boolean)=>void): boolean {
    // ajouter 1D20 jours à l'âge du personnage // TODO : quelle vitesse ? paramétrable ?
    const joursAAjouter = Math.floor(Math.random() * 20) + 1;
    let joursRellementAjoutes: number = 0;
    // const joursAAjouter: number = 1;

    let evtProgrammeExecute: boolean = false;
    // vérifier toutes les dates au cas où un evt "forcé" devrait avoir lieu ici avant
    for (joursRellementAjoutes= 0 ; joursRellementAjoutes <= joursAAjouter ; ++joursRellementAjoutes) {
        perso.date = perso.date + 1;
        perso.evtsProgrammes.forEach((value, key)=>{
            if (key == perso.date) {
                const evt: Evt = {
                    id: "evt",
                    description:value,
                };
                executerEvt(evt, evtProgrammeExecute);
                // TODO: ? nettoyage des evts exécutés ?? suppression de ceux dont la date est dépassée ?
                evtProgrammeExecute = true;
            }
        })
        if (evtProgrammeExecute) {
            // interrompt le défilement des jours
            break;
        }
    }

    const nouvJourDuMois: number = calculJourDuMois(perso.date);
    const nouvMoisStr: string = calculMoisStr(perso.date);
    Array.from(perso.carrieres.values()).map((carriere: Carriere) => {
        carriere.duree = carriere.duree + joursRellementAjoutes;
    });

    console.debug("date en jours : " + perso.date);
    // console.debug("nouvMoisStr : " + nouvMoisStr);
    perso.mois = nouvMoisStr;
    perso.jourDuMois = nouvJourDuMois;
    return evtProgrammeExecute;
}