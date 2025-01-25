import {GroupeEvts} from "../../../types/Evt.ts";
import {Perso} from "../../../types/Perso.ts";
import {Ville} from "../../geographie/villes.ts";
import {enumMois} from "../../dates/calendrier.ts";

export const evts_wissenland: GroupeEvts = {
    evts: [
        {
            id: "evts_wissenland1",
            description: (): string =>
                "Aujourd'hui les habitants célèbrent la Marche des peaux-vertes pour célébrer leur vaillante résistance à une horde de peaux-vertes avec l'aide de chevaliers du loup blanc. " +
                "Ils confectionnent des effigies à l'image d'orques et de gobelins qu'ils frappent allègrement à l'aide de fourches et de bâtons bariolés. " +
                "Puis des villageois déguisés en chevaliers surgissent et ordonnent de jeter les effigies dans le fossé et d'y mettre le feu.",
            conditions: (perso: Perso): boolean => perso.lieu.ville === Ville.heisenberg && perso.mois === enumMois.BRAUZEIT && perso.jourDuMois === 19,
        },
    ],
    probaParDefaut: 100,
}