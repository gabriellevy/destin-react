import {Option} from "../../types/lieux/Lieu.ts";

export enum Ville {
    ubersreik = 'Ubersreik',
    altdorf = 'Altdorf',
    dunkelbild = 'Dunkelbild',
    waldenhof = 'Waldenhof',
    heisenberg = 'Heisenberg',
    halstedt = 'Halstedt',
    middenheim = 'Middenheim',
}

export function villeToOption(ville: Ville): Option {
    return {
        value: ville.valueOf(),
        label: ville.valueOf()
    }
}
