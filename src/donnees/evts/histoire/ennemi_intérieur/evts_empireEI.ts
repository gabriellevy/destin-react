import {GroupeEvts} from "../../../../types/Evt.ts";
import {Perso} from "../../../../types/Perso.ts";
import {Pays} from "../../../geographie/pays.ts";
import {
    assassinatDeVonTasseninck,
    finCampagneInterieur,
    grafBorisArriveAAltdorf
} from "../../../dates/ennemi_interieur.ts";

export const evts_empireEI: GroupeEvts = {
    evts: [
        {
            id: "evts_empireEI1",
            description: (): string => "On dit que l'Ostland et le Talabecland sont au bord de la guerre. ",
            conditions: (perso: Perso): boolean => perso.lieu.pays === Pays.empire
                && perso.date >= assassinatDeVonTasseninck
                && perso.date <= finCampagneInterieur,
            proba: 1,
        },
        {
            id: "evts_empireEI2",
            description: (): string => "On dit qu'une rébellion se prépare dans le middenland. ",
            conditions: (perso: Perso): boolean => perso.lieu.pays === Pays.empire
                && perso.date >= assassinatDeVonTasseninck
                && perso.date <= finCampagneInterieur,
            proba: 1,
        },
        {
            id: "evts_empireEI3",
            description: (): string => "L'empereur a convoqué tous ses commandants militaires au palais pour discuter des problèmes de Middenheim. "
            + "Il a également exigé que le Graf Boris Toddbringer, le comte électeur de Middenheim, le rejoigne immédiatement à la capitale. ",
            conditions: (perso: Perso): boolean => perso.lieu.pays === Pays.empire
                && perso.date >= assassinatDeVonTasseninck
                && perso.date <= grafBorisArriveAAltdorf,
            proba: 1,
        },
    ],
    probaParDefaut: 2,
}