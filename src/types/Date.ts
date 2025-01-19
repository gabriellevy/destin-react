import {Perso} from "./Perso.ts";
import {Evt} from "./Evt.ts";
import {Carriere} from "./metiers/metiers.ts";

export const JOURS_PAR_AN = 400;
export const JOURS_PAR_SEMAINE = 8;

export const HEXENSTAG: string = "Hexenstag";
export const NACHEXEN: string = "Nachexen";
export const JAHRDRUNG: string = "Jahrdrung";
export const PFLUGZEIT: string = "Pflugzeit";
export const SIGMARZEIT: string = "Sigmarzeit";
export const SOMMERZEIT: string = "Sommerzeit";
export const MITTERFRUHL: string = "Mitterfruhl";
export const SONNSTILL: string = "Sonnstill";
export const VORGEHEIM: string = "Vorgeheim";
export const GEHEIMISTAG: string = "Geheimnistag";
export const NACHGEHEIM: string = "Nachgeheim";
export const ERNTEZEIT: string = "Erntezeit";
export const MITTHERBST: string = "Mittherbst";
export const BRAUZEIT: string = "Brauzeit";
export const KALDEZEIT: string = "Kaldezeit";
export const ULRICZEIT: string = "Ulriczeit";
export const MONDSTILLE: string = "Mondstille";
export const VORHEXEN: string = "Vorhexen";

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

function calculJourDuMois(joursDepuis0: number): number {
    const joursDepuisDebutAnnee: number = jourDansLAnnee(joursDepuis0);

    // détermination du mois
    if (joursDepuisDebutAnnee == 1) {
        return -1;
    }
    else if (joursDepuisDebutAnnee <= 33) return joursDepuisDebutAnnee-1;
    else if (joursDepuisDebutAnnee <= 66) return joursDepuisDebutAnnee-33;
    else if (joursDepuisDebutAnnee == 67) return -1;
    else if (joursDepuisDebutAnnee <= 100) return joursDepuisDebutAnnee-67;
    else if (joursDepuisDebutAnnee <= 133) return joursDepuisDebutAnnee-100;
    else if (joursDepuisDebutAnnee <= 166) return joursDepuisDebutAnnee-133;
    else if (joursDepuisDebutAnnee == 167) return -1;
    else if (joursDepuisDebutAnnee <= 200) return joursDepuisDebutAnnee-167;
    else if (joursDepuisDebutAnnee == 201) return -1;
    else if (joursDepuisDebutAnnee <= 233) return joursDepuisDebutAnnee-201;
    else if (joursDepuisDebutAnnee <= 266) return joursDepuisDebutAnnee-233;
    else if (joursDepuisDebutAnnee == 267) return -1;
    else if (joursDepuisDebutAnnee <= 300) return joursDepuisDebutAnnee-267;
    else if (joursDepuisDebutAnnee <= 333) return joursDepuisDebutAnnee-300;
    else if (joursDepuisDebutAnnee <= 366) return joursDepuisDebutAnnee-333;
    else if (joursDepuisDebutAnnee == 367) return -1;
    else if (joursDepuisDebutAnnee <= 400) return joursDepuisDebutAnnee-367;

    return -1;
}

function calculMoisStr(joursDepuis0: number): string {
    const joursDepuisDebutAnnee: number = jourDansLAnnee(joursDepuis0);

    // détermination du mois
    if (joursDepuisDebutAnnee == 1) {
        return HEXENSTAG;
    }
    else if (joursDepuisDebutAnnee <= 33) return NACHEXEN;
    else if (joursDepuisDebutAnnee <= 66) return JAHRDRUNG;
    else if (joursDepuisDebutAnnee == 67) return MITTERFRUHL;
    else if (joursDepuisDebutAnnee <= 100) return PFLUGZEIT;
    else if (joursDepuisDebutAnnee <= 133) return SIGMARZEIT;
    else if (joursDepuisDebutAnnee <= 166) return SOMMERZEIT;
    else if (joursDepuisDebutAnnee == 167) return SONNSTILL;
    else if (joursDepuisDebutAnnee <= 200) return VORGEHEIM;
    else if (joursDepuisDebutAnnee == 201) return GEHEIMISTAG;
    else if (joursDepuisDebutAnnee <= 233) return NACHGEHEIM;
    else if (joursDepuisDebutAnnee <= 266) return ERNTEZEIT;
    else if (joursDepuisDebutAnnee == 267) return MITTHERBST;
    else if (joursDepuisDebutAnnee <= 300) return BRAUZEIT;
    else if (joursDepuisDebutAnnee <= 333) return KALDEZEIT;
    else if (joursDepuisDebutAnnee <= 366) return ULRICZEIT;
    else if (joursDepuisDebutAnnee == 367) return MONDSTILLE;
    else if (joursDepuisDebutAnnee <= 400) return VORHEXEN;

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

export function leTempsPasse(perso: Perso, executerEvt: (evtExecute: Evt, perso: Perso)=>void):Perso {
    // ajouter 1D20 jours à l'âge du personnage // TODO : quelle vitesse ? paramétrable ?
    const joursAAjouter = Math.floor(Math.random() * 20) + 1;
    let joursRellementAjoutes: number = 0;
    // const joursAAjouter: number = 1;

    // vérifier toutes les dates au cas où un evt "forcé" devrait avoir lieu ici avant
    for (joursRellementAjoutes= 0 ; joursRellementAjoutes <= joursAAjouter ; ++joursRellementAjoutes) {
        const dateActuelle = perso.date + joursRellementAjoutes;
        perso.date = perso.date + 1;
        let efvtProgrammeExecute: boolean = false;
        perso.evtsProgrammes.forEach((value, key)=>{
            if (key === dateActuelle) {
                const evt: Evt = {
                    id: "evt",
                    description:value,
                };
                executerEvt(evt, perso); // TODO ce ci ne marche pas cf evts_carnaval et les voyages jour par jour
                // TODO: ? nettoyage des evts exécutés ??
                efvtProgrammeExecute = true;
            }
        })
        if (efvtProgrammeExecute) {
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
    return { ...perso,
        mois: nouvMoisStr,
        jourDuMois: nouvJourDuMois,
    };
}