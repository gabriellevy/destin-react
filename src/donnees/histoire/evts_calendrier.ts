import {Evt} from "../../types/Evt.ts";
import {Perso} from "../../types/Perso.ts";
import {HEXENSTAG} from "../../types/Date.ts";

export const evts_calendrier: Evt[] = [
    {
        id: "calendrier1",
        description: (perso: Perso): string =>
            "Aujourd'hui est le jour du nouvel an, le terrible jour des sorcières ! " +
            "La ligne qui sépare le monde des vivants de celui des morts est plus ténue cette nuit ci et les esprit de ceux qui nous ont quitté font parfois leur retour. " +
            "Vous et toute votre famille restez cloîtrés chez vous.",
        conditions: (perso:Perso):boolean => perso.mois === HEXENSTAG,
    },
];