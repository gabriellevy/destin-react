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
        {
            id: "evts_empireEI4",
            description: (): string => "Tous ces nouveaux impôts ne peuvent signifier qu'une chose : le Graf remplit ses coffres pour engager des troupes et des mercenaires "
            + "Il se prépare peut-être à intervenir dans le conflit croissant entre l'Ostland et le Talabecland, ou il a peut-être l'intention de rompre avec l'empereur et de fortifier les rives nord du Reik et du Talabec pour se défendre contre les agressions du sud",
            conditions: (perso: Perso): boolean => perso.lieu.pays === Pays.empire
                && perso.date >= assassinatDeVonTasseninck
                && perso.date <= grafBorisArriveAAltdorf,
            proba: 1,
        },
    ],
    probaParDefaut: 2,
}