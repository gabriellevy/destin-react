import {GroupeEvts} from "../../../types/Evt.ts";
import {Perso} from "../../../types/Perso.ts";
import {Ville} from "../../geographie/villes.ts";
import {enumMois} from "../../dates/calendrier.ts";

export const evts_dunkelbild: GroupeEvts = {
    evts: [
        {
            id: "evt1",
            description: (): string =>
                "Aujourd'hui à Dunkelbild c'est le jour de la ronde des eaux." +
                "Le lac marécageux près du village voit son eau de 'retourner'. L'eau froide du fond prend la place de celle de la surface et vice versa. " +
                "Cela a pour effet de remuer toutes les algues et la vase du fond et de conférer une teinte verdâtre nauséeuse à la surface et une horrible puanteur. " +
                "Pour célébrer l'arrivée du printemps les villageois se baignent dans le lac et remplissent de grands tonneaux de cette eau vaseuse. " +
                "Elle est ensuite versée sur les nouveaux plants ainsi que sur les granges et les foyers par le prêtre de Taal. " +
                "Le lac a des pouvoirs curatifs donc les malades, les vieillards et les estropiés affluent pour que le prêtre des recouvre de cette eau sainte. " +
                "L'odeur bien âcre du village en cette période est signe de bénédiction ! ",
            conditions: (perso: Perso): boolean => perso.lieu.ville === Ville.dunkelbild && perso.mois === enumMois.PFLUGZEIT && perso.jourDuMois <= 7,
        },
    ],
    probaParDefaut: 100,
}