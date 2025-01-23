import {TypeCarac} from "./caracs/Caracs.ts";
import {metiersEnum} from "./metiers/metiers.ts";
import {Perso} from "./Perso.ts";

export type ResultatTest = {
    reussi: boolean,
    critical: boolean,
    resume: string,
    perso: Perso,
}

export type TestCarac = {
    carac: TypeCarac,
    bonusMalus: number,
}

export type TestMetier = {
    metier: metiersEnum,
    bonusMalus: number,
}