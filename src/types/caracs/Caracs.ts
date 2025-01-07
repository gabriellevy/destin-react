import {d10} from "../../fonctions/des.ts";
import {Perso} from "../Perso.ts";
import {Race} from "../../donnees/races/Races.ts";


export function caracDeDepartAleatoire(carac: Carac, race: Race): number {
    let baseValue: number = 20;
    switch(carac) {
        case Carac.cc : {
            switch (race) {
                case Race.humain: baseValue = 20; break;
                case Race.nain: baseValue = 30; break;
                case Race.hobbit: baseValue = 10; break;
                case Race.elfe_sylvain:
                case Race.haut_elfe:
                    baseValue = 30; break;
            }
        } break;
        case Carac.ct : {
            switch (race) {
                case Race.humain: baseValue = 20; break;
                case Race.nain: baseValue = 20; break;
                case Race.hobbit: baseValue = 30; break;
                case Race.elfe_sylvain:
                case Race.haut_elfe:
                    baseValue = 30; break;
            }
        } break;
        case Carac.f : {
            switch (race) {
                case Race.humain: baseValue = 20; break;
                case Race.nain: baseValue = 20; break;
                case Race.hobbit: baseValue = 10; break;
                case Race.elfe_sylvain:
                case Race.haut_elfe:
                    baseValue = 20; break;
            }
        } break;
        case Carac.e : {
            switch (race) {
                case Race.humain: baseValue = 20; break;
                case Race.nain: baseValue = 30; break;
                case Race.hobbit: baseValue = 20; break;
                case Race.elfe_sylvain:
                case Race.haut_elfe:
                    baseValue = 20; break;
            }
        } break;
        case Carac.i : {
            switch (race) {
                case Race.humain: baseValue = 20; break;
                case Race.nain: baseValue = 20; break;
                case Race.hobbit: baseValue = 20; break;
                case Race.elfe_sylvain:
                case Race.haut_elfe:
                    baseValue = 40; break;
            }
        } break;
        case Carac.ag : {
            switch (race) {
                case Race.humain: baseValue = 20; break;
                case Race.nain: baseValue = 10; break;
                case Race.hobbit: baseValue = 20; break;
                case Race.elfe_sylvain:
                case Race.haut_elfe:
                    baseValue = 30; break;
            }
        } break;
        case Carac.dex : {
            switch (race) {
                case Race.humain: baseValue = 20; break;
                case Race.nain: baseValue = 30; break;
                case Race.hobbit: baseValue = 30; break;
                case Race.elfe_sylvain:
                case Race.haut_elfe:
                    baseValue = 30; break;
            }
        } break;
        case Carac.int : {
            switch (race) {
                case Race.humain: baseValue = 20; break;
                case Race.nain: baseValue = 20; break;
                case Race.hobbit: baseValue = 20; break;
                case Race.elfe_sylvain:
                case Race.haut_elfe:
                    baseValue = 30; break;
            }
        } break;
        case Carac.fm : {
            switch (race) {
                case Race.humain: baseValue = 20; break;
                case Race.nain: baseValue = 40; break;
                case Race.hobbit: baseValue = 30; break;
                case Race.elfe_sylvain:
                case Race.haut_elfe:
                    baseValue = 30; break;
            }
        } break;
        case Carac.soc : {
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