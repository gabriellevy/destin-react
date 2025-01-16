import {Option} from "../../types/lieux/Lieu.ts";
import {SousProvince, sousProvinceToOption} from "./sousProvince.ts";

export enum Province {
    reikland = 'Reikland',
    middenland = 'Middenland',
    sylvanie = 'Sylvanie',
    wissenland = 'Wissenland',
    talabecland = 'Talabecland',
    ostermark = 'Ostermark',
    stirland = 'Stirland',
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

export function getSousProvinces(provinceStr: string):Option[] {
    switch (provinceStr) {
        case Province.reikland : return [
            sousProvinceToOption(SousProvince.ducheUbersreik),
            sousProvinceToOption(SousProvince.principauteAltdorf)
        ];
        case Province.middenland : return [
            sousProvinceToOption(SousProvince.ducheMiddenheim)
        ];
        case Province.sylvanie : return [sousProvinceToOption(SousProvince.waldenhof)];
        case Province.wissenland : return [sousProvinceToOption(SousProvince.heisenberg)];
        case Province.talabecland : return [];
        case Province.ostermark : return [];
        case Province.stirland : return [sousProvinceToOption(SousProvince.halstedt)];
    }
    return [];
}
