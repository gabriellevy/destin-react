import {GroupeEvts, ResultatExecution} from "../../../../../types/Evt.ts";
import {Perso} from "../../../../../types/Perso.ts";
import {Province} from "../../../../geographie/provinces.ts";
import {compareStatut, MetalStatut} from "../../../../../types/Statut.ts";
import {Ville} from "../../../../geographie/villes.ts";
import {vaA} from "../../../../../types/lieux/Lieu.ts";

export const evts_carnaval: GroupeEvts = {
    evts: [
        {
            id: "aller_au_carnaval",
            description: (perso: Perso): ResultatExecution => {
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
                        + "Ces gens du nord  sont une vraie bande de coincés à tous les autres moments de l'année mais faites leur boire quelques verres pendant le carnaval et c'est parti ! Oh que oui ! "
                        + "Si vous voyez ce que je veux dire ? "
                        + "</i>";

                    // ajout des evts du voyage jour par jour
                    const etapeFrederheim: (perso: Perso)=>ResultatExecution = (perso: Perso) => {
                        const etapeKutenholz: (perso: Perso)=>ResultatExecution = (perso: Perso) => {
                            const texte: string =  "La diligence s'arrête à Kutenholz. ";
                            vaA(perso, Ville.kutenholz);
                            return {
                                texte: texte,
                                perso: perso,
                            };
                        }
                        const texte: string =  "La diligence s'arrête à Frederheim. ";
                        vaA(perso, Ville.frederheim);
                        perso.evtsProgrammes.set(perso.date + 2, etapeKutenholz);
                        return {
                            texte: texte,
                            perso: perso,
                        };
                    }
                    perso.evtsProgrammes.set(perso.date + 1, etapeFrederheim);
                } else {
                    texte += "Malheureusement vous n'avez pas les moyens de vous payer le voyage."
                }
                return {
                    texte: texte,
                    perso: perso,
                };
            },
            conditions: (perso: Perso): boolean => perso.lieu.province === Province.reikland && !perso.lieu.enVoyage,
            image: "https://raw.githubusercontent.com/gabriellevy/destin-react/refs/heads/main/images/Alex_Eisen.webp",
            proba: 10999999 // TODO : should be 10
        },
    ],
    probaParDefaut: 5,
};