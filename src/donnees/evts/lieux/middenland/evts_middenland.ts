import {GroupeEvts} from "../../../../types/Evt.ts";
import {Perso} from "../../../../types/Perso.ts";
import {Province} from "../../../geographie/provinces.ts";
import {editSurLesMutants, finCampagneInterieur} from "../../../dates/ennemi_interieur.ts";

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
    ],
    probaParDefaut: 2,
}
