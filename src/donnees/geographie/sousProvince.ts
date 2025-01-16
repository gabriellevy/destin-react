import {Option} from "../../types/lieux/Lieu.ts";
import {villeToOption, Ville} from "./villes.ts";


export enum SousProvince {
    ducheUbersreik = "Duché d'Ubersreik",
    principauteAltdorf = "Principauté d'Altdorf",
    ducheMiddenheim = "Duché de Middenheim",
    waldenhof = 'Waldenhof',
    heisenberg = 'Heisenberg',
    halstedt = 'Halstedt',
}

export function getVilles(provinceStr: string):Option[] {
    switch (provinceStr) {
        case SousProvince.ducheUbersreik : return [villeToOption(Ville.ubersreik)];
        case SousProvince.principauteAltdorf : return [villeToOption(Ville.altdorf)];
        case SousProvince.ducheMiddenheim : return [villeToOption(Ville.middenheim), villeToOption(Ville.dunkelbild)];
        case SousProvince.waldenhof : return [villeToOption(Ville.waldenhof)];
        case SousProvince.heisenberg : return [villeToOption(Ville.heisenberg)];
        case SousProvince.halstedt : return [villeToOption(Ville.halstedt)];
    }
    return [];
}
export function sousProvinceToOption(sousProvince: SousProvince): Option {
    return {
        value: sousProvince.valueOf(),
        label: sousProvince.valueOf()
    }
}
