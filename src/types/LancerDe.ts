import {TypeCarac} from "./caracs/Caracs.ts";
import {metiersEnum} from "./metiers/metiers.ts";

export type ResultatTest = {
    reussi: boolean,
    critical: boolean,
    resume: string,
}

export type TestCarac = {
    carac: TypeCarac,
    bonusMalus: number,
}

export type TestMetier = {
    metier: metiersEnum,
    bonusMalus: number,
}