import {GroupeEvts} from "../../../../types/Evt.ts";
import {Perso} from "../../../../types/Perso.ts";
import {Province} from "../../../geographie/provinces.ts";
import {
    assassinatDeVonTasseninck,
    editSurLesMutants,
    finCampagneInterieur, finDuCarnavalPDT,
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
            proba: 5,
        },
        {
            id: "evts_middenland2",
            description: (): string => "<i>Les rats des égouts de Middenheim ne sont pas comme les rats que l'on trouve dans le sud. "
            + "Ils mesurent plus d'un mètre quatre-vingt et certains d'entre eux se tiennent même debout, portent des vêtements et parlent en couinant et en gloussant. "
                + "Les ratiers de Middenheim méritent bien leur salaire c'est sûr !.</i> ",
            conditions: (perso: Perso): boolean => perso.lieu.province === Province.middenland,
            proba: 1,
        },
        {
            id: "evts_middenland3",
            description: (): string => "Les mutants et les bandits continuent d'attaquer les diligences qui traversent la Drakwald. "
            +"Les grandes compagnies de transport engagent des gardes supplémentaires, les patrouilleurs routiers recrutent à Altdorf et dans les environs. "
            +"Mais l'empereur n'a aps daigné envoyer de troupes pour protéger la route. "
            +"Pendant ce temps les groupes de réfugiés qui quitent Middenheim sont à la merci des bandits et des hommes-bêtes. ",
            conditions: (perso: Perso): boolean => perso.lieu.province === Province.middenland
                && perso.date >= editSurLesMutants
                && perso.date <= finCampagneInterieur,
            proba: 5,
        },
        {
            id: "evts_middenland4",
            description: (): string => "Les partisans d'Ulric deviennent de plus en plus radicaux. "
            +"Non contents de persécuter les sigmarites honnêtes et dévoués, ils ont commencé à s'en prendre aux prêtres de toutes les autres divinités, et même aux nains qui ont aidé à construire Middenheim. "
            +"Une série de lois fiscales désastreuses a été adoptée, visant en particulier les elfes, les nains, les sorciers et les prêtres. ",
            conditions: (perso: Perso): boolean => perso.lieu.province === Province.middenland
                && perso.date >= assassinatDeVonTasseninck
                && perso.date <= finDuCarnavalPDT,
            proba: 5,
        },
        {
            id: "evts_middenland5",
            description: (): string => "Le représentant principal de l'association des fermiers du Middenland, Dietrich Hoffman, était en ville l'autre jour. "
            +"Il a fait une déclaration devant le conseil, évoquant des prévisions pessimistes, voire désastreuses, pour la récolte de cette année. "
            +"Il semblerait que les rapports de récolte soient les mêmes dans tout l'empire. "
            +"Cette année c'est la météo qui est en cause : trop froide en hiver, trop humide au printemps, enfin, c'est ce qu'ils disent. "
            +"Mais bon, les fermiers se plaignent toujours et personne ne se souvient de la dernière fois où leurs prévisions ont été justes. ",
            conditions: (perso: Perso): boolean => perso.lieu.province === Province.middenland,
        },
    ],
    probaParDefaut: 3,
}
