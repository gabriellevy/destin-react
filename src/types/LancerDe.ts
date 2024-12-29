import {Carac} from "./caracs/Caracs.ts";

export type ResultatTest = {
    reussi: boolean,
    critical: boolean,
    resume: string,
}

export type TestCarac = {
    carac: Carac,
    bonusMalus: number,
}