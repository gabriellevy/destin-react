import {dateCompleteToJourDepuis0} from "../../types/Date.ts";
import {enumMois} from "./calendrier.ts";

// date prévue pour laisser au perso le temps de "vivre" avant que les problèmes commencent
export const unAnAvantDebutCampagne: number = dateCompleteToJourDepuis0(5, enumMois.JAHRDRUNG, 2511);

export const assassinatDeVonTasseninck: number = dateCompleteToJourDepuis0(27, enumMois.PFLUGZEIT, 2512);


export const finCampagneInterieur: number = dateCompleteToJourDepuis0(14, enumMois.ERNTEZEIT, 2513);