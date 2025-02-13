import {GroupeEvts} from "../../../../../types/Evt.ts";
import {
    Perso,
} from "../../../../../types/Perso.ts";
import {Ville} from "../../../../geographie/villes.ts";
import {getCarriereActive} from "../../../../../types/metiers/metiersUtils.ts";
import {metiersEnum} from "../../../../../types/metiers/metiers.ts";

export const evts_gotheim: GroupeEvts = {
    evts: [
        {
            id: "evts_gotheim1",
            description: (perso: Perso): string => {
                let text = "pas de métier ou rien ???";
                switch(getCarriereActive(perso)?.metier.nom) {
                    case metiersEnum.serveur: text = "serveur";
                }
                return text;
            },
            conditions: (perso: Perso): boolean => perso.lieu.ville === Ville.gotheim,
            image: "https://raw.githubusercontent.com/gabriellevy/destin-react/refs/heads/main/images/monstres/Jabberslythe.webp"
        },
    ],
    probaParDefaut: 599999999999,
};