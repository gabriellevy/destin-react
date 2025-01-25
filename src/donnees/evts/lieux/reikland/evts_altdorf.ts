import {GroupeEvts} from "../../../../types/Evt.ts";
import {Perso} from "../../../../types/Perso.ts";
import {Ville} from "../../../geographie/villes.ts";
import {enumMois} from "../../../dates/calendrier.ts";

export const evts_altdorf: GroupeEvts = {
    evts: [
        {
            id: "evts_altdorf1",
            description: (): string =>
                "Aujourd'hui est le jour de la Colonne de Sigmar. " +
            "Les fervents fidèles de Sigmar suivent l'itinéraire qu'il emprunta quand il quitta la cité il  y a 2500 ans. " +
            "Il prient, scandent et se frappent le dos de chaînes, de fouets et autres objets douloureux pour exorciser le mal qui leur habite le corps et l'esprit et pour afficher leur dévouement envers Sigmar. " +
            "Le rite rassemblant des milliers de fidèles les rues baignent souvent dans le sang qui ruisselle sur leur dos." +
            "Les passants jettent des fleurs sur la procession et offrent de l'eau à ceux qui chutent pendant le voyage. ",
            conditions: (perso: Perso): boolean => perso.lieu.ville === Ville.altdorf && perso.mois === enumMois.SIGMARZEIT && perso.jourDuMois === 15,
        },
    ],
    probaParDefaut: 100,
}