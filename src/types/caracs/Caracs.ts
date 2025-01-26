import {d10} from "../../fonctions/des.ts";
import {Perso} from "../Perso.ts";
import {Race} from "../../donnees/races/Races.ts";

export type Carac = {
    val: number,
    nbDeTestsFaits: number,
    typeCarac: TypeCarac,
}

export function caracDeDepartAleatoire(carac: TypeCarac, race: Race): number {
    let baseValue: number = 20;
    switch(carac) {
        case TypeCarac.cc : {
            switch (race) {
                case Race.humain: baseValue = 20; break;
                case Race.nain: baseValue = 30; break;
                case Race.hobbit: baseValue = 10; break;
                case Race.elfe_sylvain:
                case Race.haut_elfe:
                    baseValue = 30; break;
            }
        } break;
        case TypeCarac.ct : {
            switch (race) {
                case Race.humain: baseValue = 20; break;
                case Race.nain: baseValue = 20; break;
                case Race.hobbit: baseValue = 30; break;
                case Race.elfe_sylvain:
                case Race.haut_elfe:
                    baseValue = 30; break;
            }
        } break;
        case TypeCarac.f : {
            switch (race) {
                case Race.humain: baseValue = 20; break;
                case Race.nain: baseValue = 20; break;
                case Race.hobbit: baseValue = 10; break;
                case Race.elfe_sylvain:
                case Race.haut_elfe:
                    baseValue = 20; break;
            }
        } break;
        case TypeCarac.e : {
            switch (race) {
                case Race.humain: baseValue = 20; break;
                case Race.nain: baseValue = 30; break;
                case Race.hobbit: baseValue = 20; break;
                case Race.elfe_sylvain:
                case Race.haut_elfe:
                    baseValue = 20; break;
            }
        } break;
        case TypeCarac.i : {
            switch (race) {
                case Race.humain: baseValue = 20; break;
                case Race.nain: baseValue = 20; break;
                case Race.hobbit: baseValue = 20; break;
                case Race.elfe_sylvain:
                case Race.haut_elfe:
                    baseValue = 40; break;
            }
        } break;
        case TypeCarac.ag : {
            switch (race) {
                case Race.humain: baseValue = 20; break;
                case Race.nain: baseValue = 10; break;
                case Race.hobbit: baseValue = 20; break;
                case Race.elfe_sylvain:
                case Race.haut_elfe:
                    baseValue = 30; break;
            }
        } break;
        case TypeCarac.dex : {
            switch (race) {
                case Race.humain: baseValue = 20; break;
                case Race.nain: baseValue = 30; break;
                case Race.hobbit: baseValue = 30; break;
                case Race.elfe_sylvain:
                case Race.haut_elfe:
                    baseValue = 30; break;
            }
        } break;
        case TypeCarac.int : {
            switch (race) {
                case Race.humain: baseValue = 20; break;
                case Race.nain: baseValue = 20; break;
                case Race.hobbit: baseValue = 20; break;
                case Race.elfe_sylvain:
                case Race.haut_elfe:
                    baseValue = 30; break;
            }
        } break;
        case TypeCarac.fm : {
            switch (race) {
                case Race.humain: baseValue = 20; break;
                case Race.nain: baseValue = 40; break;
                case Race.hobbit: baseValue = 30; break;
                case Race.elfe_sylvain:
                case Race.haut_elfe:
                    baseValue = 30; break;
            }
        } break;
        case TypeCarac.soc : {
            switch (race) {
                case Race.humain: baseValue = 20; break;
                case Race.nain: baseValue = 10; break;
                case Race.hobbit: baseValue = 30; break;
                case Race.elfe_sylvain:
                case Race.haut_elfe:
                    baseValue = 20; break;
            }
        } break;
    }
    return baseValue + d10() + d10();
}

export enum TypeCarac {
    cc = "CC",
    ct = "CT",
    f = "F",
    e = "E",
    i = "I",
    ag = "Ag",
    dex = "Dex",
    int = "Int",
    fm = "FM",
    soc = "Soc",
}

export function getCaracValue(perso: Perso, typeCarac: TypeCarac): number {
    return perso.caracs.find((carac: Carac) => carac.typeCarac === typeCarac)?.val || -1;
}

export function getCaracNbDeTestsFaits(perso: Perso, typeCarac: TypeCarac): number {
    return perso.caracs.find((carac: Carac) => carac.typeCarac === typeCarac)?.nbDeTestsFaits || 0;
}

// seuils de progression des caracs (en nombres de tests sur ces caracs)
// limite à +25 ?? // TODO : remplir ça , éventuellement avec une fonction
export const seuils: number[] = [
    3,
    7,
    15,
    31,
    63,
    127,
    255,
    511,
];

export function augmenterNbDeTestsFaitsCarac(perso: Perso, typeCarac: TypeCarac): string {
    const carac: Carac | undefined = perso.caracs.find((carac:Carac) => carac.typeCarac === typeCarac);
    let texte: string = "";
    if (carac !== undefined) {
        const nbTests: number = carac.nbDeTestsFaits + 1;
        carac.nbDeTestsFaits = nbTests;
        if (seuils.includes(nbTests)) {
            // gain d'un point de compétence :
            if (carac) {
                carac.val += 1;
                texte = "<b>+1 en " + carac.typeCarac.toString() + ". </b> ";
            }
        }
    }
    return texte;
}

export const caracsDeBase = (race: Race) => [
    {
        val: caracDeDepartAleatoire(TypeCarac.cc, race),
        nbDeTestsFaits: 0,
        typeCarac: TypeCarac.cc,
    },
    {
        val: caracDeDepartAleatoire(TypeCarac.ct, race),
        nbDeTestsFaits: 0,
        typeCarac: TypeCarac.ct,
    },
    {
        val: caracDeDepartAleatoire(TypeCarac.f, race),
        nbDeTestsFaits: 0,
        typeCarac: TypeCarac.f,
    },
    {
        val: caracDeDepartAleatoire(TypeCarac.e, race),
        nbDeTestsFaits: 0,
        typeCarac: TypeCarac.e,
    },
    {
        val: caracDeDepartAleatoire(TypeCarac.i, race),
        nbDeTestsFaits: 0,
        typeCarac: TypeCarac.i,
    },
    {
        val: caracDeDepartAleatoire(TypeCarac.ag, race),
        nbDeTestsFaits: 0,
        typeCarac: TypeCarac.ag,
    },
    {
        val: caracDeDepartAleatoire(TypeCarac.dex, race),
        nbDeTestsFaits: 0,
        typeCarac: TypeCarac.dex,
    },
    {
        val: caracDeDepartAleatoire(TypeCarac.int, race),
        nbDeTestsFaits: 0,
        typeCarac: TypeCarac.int,
    },
    {
        val: caracDeDepartAleatoire(TypeCarac.fm, race),
        nbDeTestsFaits: 0,
        typeCarac: TypeCarac.fm,
    },
    {
        val: caracDeDepartAleatoire(TypeCarac.soc, race),
        nbDeTestsFaits: 0,
        typeCarac: TypeCarac.soc,
    },
];
