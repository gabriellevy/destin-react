import {GroupeEvts} from "../../../../types/Evt.ts";
import {Perso} from "../../../../types/Perso.ts";
import {Pays} from "../../../geographie/pays.ts";
import {assassinatDeVonTasseninck, finCampagneInterieur} from "../../../dates/ennemi_interieur.ts";

export const evts_empireEI: GroupeEvts = {
    evts: [
        {
            id: "evts_empireEnGeneral1",
            description: (): string => "TODO evts_empireEnGeneral !!",
            conditions: (perso: Perso): boolean => perso.lieu.pays === Pays.empire
                && perso.date >= assassinatDeVonTasseninck
                && perso.date <= finCampagneInterieur,
        },
    ],
    probaParDefaut: 2,
}