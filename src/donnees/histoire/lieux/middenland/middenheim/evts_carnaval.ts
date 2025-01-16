import {GroupeEvts} from "../../../../../types/Evt.ts";
import {Perso} from "../../../../../types/Perso.ts";
import {Province} from "../../../../geographie/provinces.ts";
import {compareStatut, MetalStatut} from "../../../../../types/Statut.ts";
import {Ville} from "../../../../geographie/villes.ts";
import {SousProvince} from "../../../../geographie/sousProvince.ts";

export const evts_carnaval: GroupeEvts = {
    evts: [
        {
            id: "aller_au_carnaval",
            description: (perso: Perso): string => {
                let texte: string = "C'est bientôt le carnaval de Middenheim et vous avez une grande envie d'aller vous y changer les idées. ";
                if (compareStatut(perso.statut, {metalStatut: MetalStatut.bronze, rang: 5})) {
                    texte += "C'est décidé : vous prendrez la diligence depuis Altdorf et de là direction Middenheim. ";
                    perso.lieu.enVoyage = true;
                    perso.lieu.residenceVoyage= null;
                    // TODO : faire un setter qui implique province et sous province à partir de la ville
                    perso.lieu.ville = Ville.middenheim;
                    perso.lieu.sousProvince = SousProvince.ducheMiddenheim;
                    perso.lieu.province = Province.middenland;
                    texte += "Dans la diligence les voyageurs sont entousiastes, surtout un marchand nommé Alex Eisen. <br/> "
                        + "<i>Je ne raterais cela pour rien au monde ! "
                        + "Ces gens du nord  sont une vraie bande de coincés à tous les autres moments de l'année mais faites leur boire quelques verres pendant le carnaval et c'est parti ! Oh que oui ! "
                        + "Si vous voyez ce que je veux dire ? "
                        + "</i>";
                } else {
                    texte += "Malheureusement vous n'avez pas les moyens de vous payer le voyage."
                }
                return texte;
            },
            conditions: (perso: Perso): boolean => perso.lieu.province === Province.reikland,
            image: "https://raw.githubusercontent.com/gabriellevy/destin-react/refs/heads/main/images/Alex_Eisen.webp",
            proba: 10
        },
    ],
    probaParDefaut: 5,
};