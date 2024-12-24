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
    province: Province.Reikland,
    sousProvince: SousProvince.ducheReikland,
    ville: Ville.ubersreik,
    enVoyage:false,
};

export enum Pays {
    empire = 'empire',
    bretonnie = 'Bretonnie'
}

export enum Province {
    Reikland = 'Raikland',
}

export enum SousProvince {
    ducheReikland = "Duché d'Ubersreik",
}

export enum Ville {
    ubersreik = 'Ubersreik',
    altdorf = 'Altdorf',
};