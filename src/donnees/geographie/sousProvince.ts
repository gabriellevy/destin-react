import {Ville} from "./villes.ts";

export enum SousProvince {
    ducheUbersreik = "Duché d'Ubersreik",
    principauteAltdorf = "Principauté d'Altdorf",
    middenland = "middenland",
    ducheMiddenheim = "Duché de Middenheim",
    waldenhof = 'Waldenhof',
    heisenberg = 'Heisenberg',
    halstedt = 'Halstedt',

    sousProvinceInconnue = 'Sous province inconnue',
}

export function getVilles(sousProvinceStr: string):Ville[] {
    switch (sousProvinceStr) {
        case SousProvince.ducheUbersreik : return [Ville.ubersreik, Ville.gotheim];
        case SousProvince.principauteAltdorf : return [Ville.altdorf, Ville.frederheim];
        case SousProvince.middenland : return [
            Ville.kutenholz,
            Ville.coeurDeLaForet,
            Ville.brockel,
            Ville.mittelweg,
            Ville.delberz,
            Ville.sotturn,
            Ville.malstedt,
            Ville.grubentreich,
            Ville.schoninghagen,
        ];
        case SousProvince.ducheMiddenheim : return [Ville.middenheim, Ville.dunkelbild];
        case SousProvince.waldenhof : return [Ville.waldenhof];
        case SousProvince.heisenberg : return [Ville.heisenberg];
        case SousProvince.halstedt : return [Ville.halstedt];
    }
    return [];
}
