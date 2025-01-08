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

export function getCaracValue(perso: Perso, carac: TypeCarac): number {
    switch (carac) {
        case TypeCarac.cc:
            return perso.cc.val;
        case TypeCarac.ct:
            return perso.ct.val;
        case TypeCarac.f:
            return perso.f.val;
        case TypeCarac.e:
            return perso.e.val;
        case TypeCarac.i:
            return perso.i.val;
        case TypeCarac.ag:
            return perso.ag.val;
        case TypeCarac.dex:
            return perso.dex.val;
        case TypeCarac.int:
            return perso.int.val;
        case TypeCarac.fm:
            return perso.fm.val;
        case TypeCarac.soc:
            return perso.soc.val;
    }
    return -1;
}

// TODO : passage au seuil du dessus
export function augmenterNbDeTestsFaits(perso: Perso, carac: TypeCarac): void {
    switch (carac) {
        case TypeCarac.cc: perso.cc.nbDeTestsFaits += 1; break;
        case TypeCarac.ct: perso.ct.nbDeTestsFaits += 1; break;
        case TypeCarac.f: perso.f.nbDeTestsFaits += 1; break;
        case TypeCarac.e: perso.e.nbDeTestsFaits += 1; break;
        case TypeCarac.i: perso.i.nbDeTestsFaits += 1; break;
        case TypeCarac.ag: perso.ag.nbDeTestsFaits += 1; break;
        case TypeCarac.dex: perso.dex.nbDeTestsFaits += 1; break;
        case TypeCarac.int: perso.int.nbDeTestsFaits += 1; break;
        case TypeCarac.fm: perso.fm.nbDeTestsFaits += 1; break;
        case TypeCarac.soc: perso.soc.nbDeTestsFaits += 1; break;
    }
}