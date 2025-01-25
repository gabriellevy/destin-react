import {GroupeEvts} from "../../../types/Evt.ts";
import {Perso} from "../../../types/Perso.ts";
import {Province} from "../../geographie/provinces.ts";
import {enumMois} from "../../dates/calendrier.ts";

export const evts_talabecland: GroupeEvts = {
    evts: [
        {
            id: "evts_talabecland1",
            description: (): string =>
                "Aujourd'hui les habitants célèbrent la cavalcade des ramures aussi appelée la 'nuit du cerf' en l'honneur de Taal. " +
                "De jeunes hommes se coiffent de bois de cerfs imposants et s'habillent de peaux du même animal. " +
                "Un autre groupe joue le rôle de chasseurs équipés d'arcs et de flèches à pointe souple." +
                "Cette chasse dure jusqu'au petit matin jusqu'à ce que tous les cerfs soient capturés puis suivent de longues séances de beuveries et de bombance.",
            conditions: (perso: Perso): boolean => perso.lieu.province === Province.talabecland && perso.mois === enumMois.SOMMERZEIT && perso.jourDuMois <= 7,
        },
    ],
    probaParDefaut: 100,
}