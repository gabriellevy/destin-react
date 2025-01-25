import {GroupeEvts} from "../../../../types/Evt.ts";
import {Perso} from "../../../../types/Perso.ts";
import {Province} from "../../../geographie/provinces.ts";
import {
    editSurLesMutants,
    finCampagneInterieur,
} from "../../../dates/ennemi_interieur.ts";

export const evts_middenland: GroupeEvts = {
    evts: [
        {
            id: "evts_middenland1",
            description: (): string => "Les fils d'Ulric sont furieux de l'édit de tolérance envers les mutants que l'empereur a proclamé. "
            + "Les plus dévots d'entre eux envisagent maintenant de chasser tous les autres cultes de Middenheim pour en faire la seule ville d'Ulric. "
            + "Voire de lancer une rébellion complète contre l'empire. ",
            conditions: (perso: Perso): boolean => perso.lieu.province === Province.middenland
                && perso.date >= editSurLesMutants
                && perso.date <= finCampagneInterieur,
        },
        {
            id: "evts_middenland2",
            description: (): string => "<i>Les rats des égouts de Middenheim ne sont pas comme les rats que l'on trouve dans le sud. "
            + "Ils mesurent plus d'un mètre quatre-vingt et certains d'entre eux se tiennent même debout, portent des vêtements et parlent en couinant et en gloussant. "
                + "Les ratiers de Middenheim méritent bien leur salaire c'est sûr !.</i> ",
            conditions: (perso: Perso): boolean => perso.lieu.province === Province.middenland,
            proba: 1,
        },
    ],
    probaParDefaut: 4,
}
