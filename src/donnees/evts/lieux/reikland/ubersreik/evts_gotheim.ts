import {GroupeEvts} from "../../../../../types/Evt.ts";
import {
    Perso,
} from "../../../../../types/Perso.ts";
import {Ville} from "../../../../geographie/villes.ts";
import {getCarriereActive} from "../../../../../types/metiers/metiersUtils.ts";
import {Carriere, metiersEnum} from "../../../../../types/metiers/metiers.ts";
import {ResultatTest} from "../../../../../types/LancerDe.ts";
import {testCarac} from "../../../../../fonctions/des.ts";
import {TypeCarac} from "../../../../../types/caracs/Caracs.ts";

export const evts_gotheim: GroupeEvts = {
    evts: [
        {
            id: "evts_gotheim1",
            description: (perso: Perso): string => {
                const carriere: Carriere|undefined = getCarriereActive(perso);
                let texte = "Vous êtes réveillé en sursaut en pleine nuit. "
                + "Un grand fracas a lieu très près, des hommes hurlent. Vous avez l'impression d'apercevoir une silhouette massive par la fenêtre mais il fait trop sombre et votre tête vous torture trop pour être sûr de vous."
                + "Un grand beuglement se fait entendre. Jamais vous n'avez rien entendu de semblable. "
                    + "Une terreur vous frappe et vous empêche de penser correctement, vous restez caché jusqu'au petit matin. ";
                switch(carriere?.metier.nom) {
                    case metiersEnum.serveur: {
                        texte += "Le village est maintenant calme mais vous êtes encore terrifié. Vous vous levez mais restez au premier étage de " + carriere?.groupeLieu + "."
                            + "C'est là que vous voyez Wilhelm Kreigrish, le bourgmestre de Gotheim. "
                            + "Il semble pris de folie et hurle que le seul moyen de tout résoudre c'est de sauter du toit de l'auberge comme il avait fait lors de l'incendie il y a 5 ans."
                            + "Il s'était alors miraculeusement rattrapé sans blessure autre qu'une petite entorse. "
                            + "Il s'apprête à sauter ! Vous tentez de l'en empêcher mais il ne veut rien entendre ! "
                        + "Il hurle <i>'Ôtez vos sales pattes de moi ! Laissez moi partir ! C'est la seule façon de s'en sortir ! La seule ! '</i>";

                        const resTest:ResultatTest = testCarac(perso, {carac: TypeCarac.f, bonusMalus:-10});
                        texte += resTest.resume;
                        if (resTest.reussi) {
                            texte += "Vous parvenez à l'attraper par le bras et le maîtriser.";
                        } else {
                            texte += "Malheureusement vous ne parvenez pas à le maîtriser et il saute par la fenêtre."
                            + "Il se rompt le cou misérablement.";
                        }
                    } break;
                    case metiersEnum.bourgmestre: {
                        texte += "Le village est maintenant calme mais vous êtes encore terrifié. Vous vous levez et allez vous réfugier au seul endroit où vous vous sentez bien, à l'auberge de la reine rouge."
                            + "Vous êtes alors pris de folie et hurlez que le seul moyen de tout résoudre c'est de sauter du toit de l'auberge comme vous l'aviez fait lors de l'incendie il y a 5 ans."
                            + "Vous vous étiez alors miraculeusement rattrapé sans blessure autre qu'une petite entorse. "
                            + "La serveuse Klara Kellner tente de vous maîtriser pour vous empêcher de sauter. "
                            + "Vous hurlez <i>'Ôtez vos sales pattes de moi ! Laissez moi partir ! C'est la seule façon de s'en sortir ! La seule ! '</i>";

                        const resTest:ResultatTest = testCarac(perso, {carac: TypeCarac.f, bonusMalus:20});
                        texte += resTest.resume;
                        if (!resTest.reussi) {
                            texte += "Elle y parvient, et vous maintient solidement jusqu'à ce que vous réalisiez la folie de ce que vous alliez faire. "
                            + "Vous vous mettez alors à trembler de manière convulsive. Ces tremblements ne disparaîtront jamais totalement."
                            + "À la prochaine pleine lune de Morrslieb, vous deviendrez bègue."; // TODO : baisser Soc ??
                        } else {
                            texte += "Vous sautez et vous rompez le coup misérablement.";
                            perso.mort = true;
                        }
                    } break;

                }
                return texte;
            },
            conditions: (perso: Perso): boolean => perso.lieu.ville === Ville.gotheim,
            image: "https://raw.githubusercontent.com/gabriellevy/destin-react/refs/heads/main/images/monstres/Jabberslythe.webp"
        },
    ],
    probaParDefaut: 2999999999999999,
};