import {GroupeEvts} from "../../../types/Evt.ts";
import {Perso} from "../../../types/Perso.ts";
import {Province} from "../../geographie/provinces.ts";
import {enumMois} from "../../dates/calendrier.ts";

export const evts_sylvanie: GroupeEvts = {
    evts: [
        {
            id: "evts_sylvanie1",
            description: (): string =>
                "Aujourd'hui on fête la Nuit de von Axler du nom d'un prêtre de Morr qui était entré en transe en regardant une démonstration pyrotechnique et avait prévu une attaque d'homme-bêtes. " +
            "Nous allons acheter autant de feux d'artifices que possible et faire une grand spectacle en son honneur et en l'honneur des vision que Morr nous apporte.",
            conditions: (perso: Perso): boolean => perso.lieu.province === Province.sylvanie && perso.mois === enumMois.ULRICZEIT && perso.jourDuMois === 18,
        },
    ],
    probaParDefaut: 100,
}