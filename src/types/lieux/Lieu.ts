import {ResidenceDeVoyage} from "./ResidenceDeVoyage.ts";
import {Perso} from "../Perso.ts";


export enum Pays {
    empire = 'empire',
    bretonnie = 'Bretonnie'
}

export enum Province {
    reikland = 'Reikland',
    middenland = 'Middenland',
    sylvanie = 'Sylvanie',
    wissenland = 'Wissenland',
    talabecland = 'Talabecland',
    ostermark = 'Ostermark',
    stirland = 'Stirland',
}

export enum Ville {
    ubersreik = 'Ubersreik',
    altdorf = 'Altdorf',
    dunkelbild = 'Dunkelbild',
    waldenhof = 'Waldenhof',
    heisenberg = 'Heisenberg',
    halstedt = 'Halstedt',
}

export type Option = {
    value: string,
    label: string,
}

export const provinceOptions: Option[]= [
    { value: Province.reikland, label: Province.reikland},
    { value: Province.middenland, label: Province.middenland},
    { value: Province.sylvanie, label: Province.sylvanie},
    { value: Province.wissenland, label: Province.wissenland},
    { value: Province.talabecland, label: Province.talabecland},
    { value: Province.ostermark, label: Province.ostermark},
    { value: Province.stirland, label: Province.stirland},
];

export enum SousProvince {
    ducheReikland = "Duché d'Ubersreik",
}

export type Lieu = {
    pays?: Pays,
    province?: Province,
    sousProvince?: SousProvince,
    sousSousProvince?: SousProvince,
    ville?: Ville,
    maison: string|null,
    enVoyage:boolean,
    residenceVoyage:ResidenceDeVoyage|null,
};

export const lieuParDefaut: Lieu = {
    pays: Pays.empire,
    province: Province.reikland,
    sousProvince: SousProvince.ducheReikland,
    ville: Ville.ubersreik,
    maison: null,
    enVoyage:false,
    residenceVoyage: null,
};

export const enVoyageAUbersreik: Lieu = {
    pays: Pays.empire,
    province: Province.reikland,
    sousProvince: SousProvince.ducheReikland,
    ville: Ville.ubersreik,
    maison: null,
    enVoyage:true,
    residenceVoyage: null,
};

function toOption(ville: Ville): Option {
    return {
        value: ville.valueOf(),
        label: ville.valueOf()
    }
}

export function getVilles(provinceStr: string):Option[] {
    switch (provinceStr) {
        case Province.reikland : return [toOption(Ville.altdorf), toOption(Ville.ubersreik)];
        case Province.middenland : return [toOption(Ville.dunkelbild)];
        case Province.sylvanie : return [toOption(Ville.waldenhof)];
        case Province.wissenland : return [toOption(Ville.heisenberg)];
        case Province.talabecland : return [];
        case Province.ostermark : return [];
        case Province.stirland : return [toOption(Ville.halstedt)];
    }
    return [];
}

export function auBordDeLaRiviere(perso: Perso): boolean {
    if (perso.lieu.province === Province.reikland) return true; // il y a des rivières partout là dedans...

    return false;
}
