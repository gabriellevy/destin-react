import {ResidenceDeVoyage} from "./ResidenceDeVoyage.ts";
import {Perso} from "../Perso.ts";
import {Pays} from "../../donnees/geographie/pays.ts";
import {Province, SousProvince} from "../../donnees/geographie/provinces.ts";
import {Ville} from "../../donnees/geographie/villes.ts";

export type Option = {
    value: string,
    label: string,
}

export type Lieu = {
    pays?: Pays,
    province?: Province,
    sousProvince?: SousProvince,
    sousSousProvince?: SousProvince,
    ville?: Ville,
    maison: string|null,
    enVoyage:boolean,
    residenceVoyage:ResidenceDeVoyage|null,
};

export const lieuParDefaut: Lieu = {
    pays: Pays.empire,
    province: Province.reikland,
    sousProvince: SousProvince.ducheReikland,
    ville: Ville.ubersreik,
    maison: null,
    enVoyage:false,
    residenceVoyage: null,
};

export const enVoyageAUbersreik: Lieu = {
    pays: Pays.empire,
    province: Province.reikland,
    sousProvince: SousProvince.ducheReikland,
    ville: Ville.ubersreik,
    maison: null,
    enVoyage:true,
    residenceVoyage: null,
};

export function auBordDeLaRiviere(perso: Perso): boolean {
    if (perso.lieu.province === Province.reikland) return true; // il y a des rivières partout là dedans...

    return false;
}
