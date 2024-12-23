import {Evt} from "../../types/Evt.ts";
import {Perso} from "../../types/Perso.ts";
import {HEXENSTAG, NACHEXEN} from "../../types/Date.ts";

export const evts_calendrier: Evt[] = [
    {
        id: "calendrier1",
        description: (perso: Perso): string =>
            "Aujourd'hui est le jour du nouvel an, le terrible jour des sorcières ! " +
            "La ligne qui sépare le monde des vivants de celui des morts est plus ténue cette nuit ci et les esprit de ceux qui nous ont quitté font parfois leur retour. " +
            "Vous et toute votre famille restez cloîtrés chez vous.",
        conditions: (perso:Perso):boolean => perso.mois === HEXENSTAG,
    },
    {
        id: "calendrier2",
        description: (perso: Perso): string =>
            "Aujourd'hui est le jour de la bénédiction de l'an nouveau. " +
            "Chacun est heureux d'avoir survécu à la nuit des sorcières et émerge de son foyer pour demander à la déesse Verena de bénir l'année à venir. " +
            "Des extraits des paroles de Verena sont lus et tous ceux qui ont de la rancoeur envers un voisin sont priés de l'exposer et de tenter de résoudre le problème devant la prétresse de Véréna..",
        conditions: (perso:Perso):boolean => perso.mois === NACHEXEN && perso.jourDuMois === 1,
    },
];