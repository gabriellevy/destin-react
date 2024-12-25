import {anneesToJours} from "./Date.ts";
import {Perso, Sexe} from "./Perso.ts";

export type Lieu = {
    pays?: Pays,
    province?: Province,
    sousProvince?: SousProvince,
    sousSousProvince?: SousProvince,
    ville?: Ville,
    maison?: string,
    enVoyage?:boolean,
    residenceVoyage?:string,
};

export const lieuParDefaut: Lieu = {
    pays: Pays.empire,
    province: Province.reikland,
    sousProvince: SousProvince.ducheReikland,
    ville: Ville.ubersreik,
    enVoyage:false,
};

export enum Pays {
    empire = 'empire',
    bretonnie = 'Bretonnie'
}

export enum Province {
    reikland = 'Reikland',
    middenland = 'Middenland',
}

export type Option = {
    value: string,
    label: string,
}
export const provinceOptions: Option[]= [
    { value: Province.reikland.valueOf(), label: Province.reikland.valueOf()},
    { value: Province.middenland.valueOf(), label: Province.middenland.valueOf()},
];

export enum SousProvince {
    ducheReikland = "Duché d'Ubersreik",
}

function toOption(ville: Ville): Option {
    return {
        value: ville.valueOf(),
        label: ville.valueOf()
    }
}

export function getVilles(provinceStr: string):Option[] {
    switch (provinceStr) {
        case Province.reikland.valueOf() : return [toOption(Ville.altdorf), toOption(Ville.ubersreik)];
        case Province.middenland.valueOf() : return [toOption(Ville.dunkelbild)];
    }
}

export enum Ville {
    ubersreik = 'Ubersreik',
    altdorf = 'Altdorf',
    dunkelbild = 'Dunkelbild',
}
