import {Option} from "../../types/lieux/Lieu.ts";
import {SousProvince} from "./sousProvince.ts";

export enum Province {
    reikland = 'Reikland',
    middenland = 'Middenland',
    sylvanie = 'Sylvanie',
    wissenland = 'Wissenland',
    talabecland = 'Talabecland',
    ostermark = 'Ostermark',
    stirland = 'Stirland',

    provinceInconnue = 'Province inconnue',
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

export function getSousProvinces(provinceStr: string):SousProvince[] {
    switch (provinceStr) {
        case Province.reikland : return [
            SousProvince.ducheUbersreik,
            SousProvince.principauteAltdorf
        ];
        case Province.middenland : return [
            SousProvince.ducheMiddenheim,
            SousProvince.middenland
        ];
        case Province.sylvanie : return [SousProvince.waldenhof];
        case Province.wissenland : return [SousProvince.heisenberg];
        case Province.talabecland : return [];
        case Province.ostermark : return [];
        case Province.stirland : return [SousProvince.halstedt];
    }
    return [];
}
