import {Ville} from "./villes.ts";

export enum SousProvince {
    ducheUbersreik = "Duché d'Ubersreik",
    principauteAltdorf = "Principauté d'Altdorf",
    chaisPasEntreMiddenlandEtReikland = "chaisPasEntreMiddenlandEtReikland",
    ducheMiddenheim = "Duché de Middenheim",
    waldenhof = 'Waldenhof',
    heisenberg = 'Heisenberg',
    halstedt = 'Halstedt',

    sousProvinceInconnue = 'Sous province inconnue',
}

export function getVilles(sousProvinceStr: string):Ville[] {
    switch (sousProvinceStr) {
        case SousProvince.ducheUbersreik : return [Ville.ubersreik];
        case SousProvince.principauteAltdorf : return [Ville.altdorf, Ville.frederheim];
        case SousProvince.chaisPasEntreMiddenlandEtReikland : return [Ville.kutenholz];
        case SousProvince.ducheMiddenheim : return [Ville.middenheim, Ville.dunkelbild];
        case SousProvince.waldenhof : return [Ville.waldenhof];
        case SousProvince.heisenberg : return [Ville.heisenberg];
        case SousProvince.halstedt : return [Ville.halstedt];
    }
    return [];
}
