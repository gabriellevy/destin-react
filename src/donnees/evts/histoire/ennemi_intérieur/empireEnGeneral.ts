import {GroupeEvts} from "../../../../types/Evt.ts";
import {Perso} from "../../../../types/Perso.ts";
import {Pays} from "../../../geographie/pays.ts";
import {dateCompleteToJourDepuis0, enumMois} from "../../../../types/Date.ts";

export const evts_empireEnGeneral: GroupeEvts = {
    evts: [
        {
            id: "evts_empireEnGeneral1",
            description: (): string => "TODO evts_empireEnGeneral !!",
            conditions: (perso: Perso): boolean => perso.lieu.pays === Pays.empire
                && perso.date >= dateCompleteToJourDepuis0(27, enumMois.PFLUGZEIT, 2513),
        },
    ],
    probaParDefaut: 2,
}