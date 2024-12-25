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
    sylvanie = 'Sylvanie',
    wissenland = 'Wissenland',
    talabecland = 'Talabecland',
    ostermark = 'Ostermark',
    stirland = 'Stirland',
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
}

export enum Ville {
    ubersreik = 'Ubersreik',
    altdorf = 'Altdorf',
    dunkelbild = 'Dunkelbild',
    waldenhof = 'Waldenhof',
    heisenberg = 'Heisenberg',
    halstedt = 'Halstedt',
}
