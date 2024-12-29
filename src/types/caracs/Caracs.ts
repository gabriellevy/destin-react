import {d10} from "../../fonctions/des.ts";
import {Perso} from "../Perso.ts";


export function caracDeDepartAleatoire(): number {
    return 20 + d10() + d10();
}

export enum Carac {
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

export function getCaracValue(perso: Perso, carac: Carac): number {
    switch (carac) {
        case Carac.cc: return perso.cc;
        case Carac.ct: return perso.ct;
        case Carac.f: return perso.f;
        case Carac.e: return perso.e;
        case Carac.i: return perso.i;
        case Carac.ag: return perso.ag;
        case Carac.dex: return perso.dex;
        case Carac.int: return perso.int;
        case Carac.fm: return perso.fm;
        case Carac.soc: return perso.soc;
    }
    return -1;
}