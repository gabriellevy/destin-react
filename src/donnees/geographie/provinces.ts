import {Option} from "../../types/lieux/Lieu.ts";
import {toOption, Ville} from "./villes.ts";

export enum Province {
    reikland = 'Reikland',
    middenland = 'Middenland',
    sylvanie = 'Sylvanie',
    wissenland = 'Wissenland',
    talabecland = 'Talabecland',
    ostermark = 'Ostermark',
    stirland = 'Stirland',
}

export enum SousProvince {
    ducheReikland = "Duché d'Ubersreik",
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

export function getVilles(provinceStr: string):Option[] {
    switch (provinceStr) {
        case Province.reikland : return [toOption(Ville.altdorf), toOption(Ville.ubersreik)];
        case Province.middenland : return [toOption(Ville.dunkelbild), toOption(Ville.middenheim)];
        case Province.sylvanie : return [toOption(Ville.waldenhof)];
        case Province.wissenland : return [toOption(Ville.heisenberg)];
        case Province.talabecland : return [];
        case Province.ostermark : return [];
        case Province.stirland : return [toOption(Ville.halstedt)];
    }
    return [];
}
