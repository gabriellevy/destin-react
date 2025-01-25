import {GroupeEvts} from "../../../../types/Evt.ts";
import {Perso} from "../../../../types/Perso.ts";
import {Pays} from "../../../geographie/pays.ts";
import {
    assassinatDeVonTasseninck,
    finCampagneInterieur,
    grafBorisArriveAAltdorf, unAnAvantDebutCampagne
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
            description: (): string => "Tous ces nouveaux impôts ne peuvent signifier qu'une chose : le Graf remplit ses coffres pour engager des troupes et des mercenaires. "
            + "Il se prépare peut-être à intervenir dans le conflit croissant entre l'Ostland et le Talabecland, ou il a peut-être l'intention de rompre avec l'empereur et de fortifier les rives nord du Reik et du Talabec pour se défendre contre les agressions du sud",
            conditions: (perso: Perso): boolean => perso.lieu.pays === Pays.empire
                && perso.date >= assassinatDeVonTasseninck
                && perso.date <= grafBorisArriveAAltdorf,
            proba: 1,
        },
        {
            id: "evts_empireEI5",
            description: (): string => "Une hérésie se répand selon laquelle Sigmar n'a jamais été un dieu, juste un héros mortel couronné empereur par le grand prêtre d'Ulric. "
                + "On raconte qu'Ulric serait le seul véritable dieu de l'empire et que les Sigmarites seraient des hérétiques. "
                + "Les tensions entre le nord et le sud vont et viennent, mais tout le malaise semble se concentrer autour de ces différents religieux. "
                + "Certains fanatiques ulricains demandent même à ce que le nord rompent avec le reste de l'Empire et devienne une nation à part entière. ",
            conditions: (perso: Perso): boolean => perso.lieu.pays === Pays.empire
                && perso.date >= unAnAvantDebutCampagne
                && perso.date <= grafBorisArriveAAltdorf,
            proba: 1,
        },
        {
            id: "evts_empireEI6",
            description: (): string => "La belle-mère de mon cousin est blanchisseuse au château Reiksguard. "
            + "Elle rapporte avoir apperçu le prince héritier Wolfgang, <i>et il ressemble plus à un loup qu'à un Prince. "
            +"si vous voyez ce que je veux dire.</i>",
            conditions: (perso: Perso): boolean => perso.lieu.pays === Pays.empire
                && perso.date >= unAnAvantDebutCampagne
                && perso.date <= grafBorisArriveAAltdorf,
            proba: 1,
        },
    ],
    probaParDefaut: 2,
}