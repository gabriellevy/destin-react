import {TypeCarac} from "./caracs/Caracs.ts";

export type ResultatTest = {
    reussi: boolean,
    critical: boolean,
    resume: string,
}

export type TestCarac = {
    carac: TypeCarac,
    bonusMalus: number,
}