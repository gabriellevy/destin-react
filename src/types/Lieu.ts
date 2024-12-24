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

export enum SousProvince {
    ducheReikland = "Duché d'Ubersreik",
}

export function getVilles(province:Province):Ville[] {
    switch (province) {
        case Province.reikland : return [Ville.altdorf, Ville.ubersreik];
        case Province.middenland : return [Ville.dunkelbild];
    }
}

export enum Ville {
    ubersreik = 'Ubersreik',
    altdorf = 'Altdorf',
    dunkelbild = 'Dunkelbild',
};