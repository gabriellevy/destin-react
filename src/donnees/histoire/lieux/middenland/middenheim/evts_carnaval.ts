import {GroupeEvts} from "../../../../../types/Evt.ts";
import {Perso} from "../../../../../types/Perso.ts";
import {Province} from "../../../../geographie/provinces.ts";
import {compareStatut, MetalStatut} from "../../../../../types/Statut.ts";
import {Ville} from "../../../../geographie/villes.ts";
import {vaA} from "../../../../../types/lieux/Lieu.ts";

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
                    /* TODO : setter tout ça seulement à la fin :
                        perso.lieu.ville = Ville.middenheim;
                    perso.lieu.sousProvince = SousProvince.ducheMiddenheim;
                    perso.lieu.province = Province.middenland;*/
                    texte += "Dans la diligence les voyageurs sont entousiastes, surtout un marchand nommé Alex Eisen. <br/> "
                        + "<i>Je ne raterais cela pour rien au monde ! "
                        + "Ces gens du nord sont une vraie bande de coincés à tous les autres moments de l'année mais faites leur boire quelques verres pendant le carnaval et c'est parti ! Oh que oui ! "
                        + "Si vous voyez ce que je veux dire ? "
                        + "</i>";

                    // ajout des evts du voyage jour par jour
                    const etapeCoeurDeLaForet: (perso: Perso)=>string = (perso: Perso) => {
                        const texte: string =  "Vous vous arrêtez dans l'auberge relais fortifiée appelée 'Le coeur de la forêt'. "
                            + "Ses murs garnis de pointes font 6 mètres de haut. De quoi décourager les homme-bêtes de la Drakwald";
                        vaA(perso, Ville.coeurDeLaForet);
                        return texte;
                    }
                    const etapeKutenholz: (perso: Perso)=>string = (perso: Perso) => {

                        const texte: string =  "La diligence s'arrête à Kutenholz, le premier arrêt dans le middenland. "
                            + "Un grand sanctuaire dédié à Ulric se trouve à proximité, sans doute est-ce pour cela que l'auberge s'appelle 'la tête du loup'";
                        vaA(perso, Ville.kutenholz);
                        perso.evtsProgrammes.set(perso.date + 1, etapeCoeurDeLaForet);
                        return texte;
                    }
                    const etapeFrederheim: (perso: Perso)=>string = (perso: Perso) => {
                        const texte: string =  "La diligence s'arrête à Frederheim, connue principalement pour le grand hospice de Shallya. ";
                        vaA(perso, Ville.frederheim);
                        perso.evtsProgrammes.set(perso.date + 1, etapeKutenholz);
                        return texte;
                    }
                    perso.evtsProgrammes.set(perso.date + 1, etapeFrederheim);
                } else {
                    texte += "Malheureusement vous n'avez pas les moyens de vous payer le voyage."
                }
                return texte;
            },
            conditions: (perso: Perso): boolean => perso.lieu.province === Province.reikland && !perso.lieu.enVoyage,
            image: "https://raw.githubusercontent.com/gabriellevy/destin-react/refs/heads/main/images/Alex_Eisen.webp",
            proba: 10999999 // TODO : should be 10
        },
    ],
    probaParDefaut: 5,
};