import {GroupeEvts} from "../../../types/Evt.ts";
import {Perso} from "../../../types/Perso.ts";
import {Province} from "../../geographie/provinces.ts";
import {enumMois} from "../../dates/calendrier.ts";

export const evts_stirland: GroupeEvts = {
    evts: [
        {
            id: "evts_stirland1",
            description: (): string =>
                "Aujourd'hui c'est la fête de la nuit des flèches de feu, en souvenir d'une héroïque résistance des villageois lors d'une attaque de mort-vivants. " +
                "La milice et les chasseurs repoussèrent vague après vague de squelettes et zombies en érigeant des murailles de bois et en les abattant par des flèches enflammées à un alcool local. " +
                "Aujourd'hui les villageois célèbrent ce souvenir en se soulant avec un tord-boyaux de contrebande puis en l'utilisant pour enflammer des flèches. " +
                "Continuant à boir tout en priant contre les mort-vivants ils tirent sur des effigies de morts foulant la terre." +
                "Il y a beaucoup d'accidents.",
            conditions: (perso: Perso): boolean => perso.lieu.province === Province.stirland && perso.mois === enumMois.SIGMARZEIT && perso.jourDuMois === 25,
        },
    ],
    probaParDefaut: 100,
}