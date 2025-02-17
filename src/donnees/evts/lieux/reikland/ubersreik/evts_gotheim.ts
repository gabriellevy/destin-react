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
                let forgeBrule: boolean = false;
                const villageInonde: boolean = false;
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
                    case metiersEnum.forgeron:
                    case metiersEnum.apprenti_Forgeron: {
                        texte += "Vous avez bien assez vu la créature : il s'agit d'un énorme crapaud. "
                        + "Il vient très probablement des marais du nord. Vous l'avez clairement vu attaquer les ges avec son énorme langue collante. "
                        + "Votre idée géniale est d'ajouter des pointes sur une armure de plates sur laquelle vous travailliez et ainsi quand la créature tentera de vous attraper avec sa langue elle se blessera ! "
                        + "Emli Bauer le brasseur, Kai le maçon et Bruno le bolanger vous ont rejoint et acceptent vite votre autorité dans ce travail héroïque ! "
                        + "Vous leur ordonnez d'apporter des bûches encor et encore pour attiser le feu et perdez toute mesure."
                        + "Il faut dire que cet idiot d'Emil affirme que le monstre est allergique à son schnaps. Ridicule !";
                        forgeBrule = true;

                    } break;
                    case metiersEnum.brasseur:
                    case metiersEnum.apprenti_brasseur: {
                        texte += "Vous avez à peine vu la créature mais aucun doute : elle a détruit toutes les maisons autour de la vôtre mais vous a épargné. " +
                            + "C'est parce qu'elle est manifestement allergique au schnaps que vous produisez ! "
                        + "Vous voyez qu'au dehors la forge a elle aussi été épargnée et fonctionne, vous vous y rendez donc vite pour annoncer votre découverte et votre plan pour vaincre le monstre. "
                        + "Là bas en plus d'Hugo le forgeron vous êtes heureux de trouver Kai le maçon et Bruno le boulanger. "
                            + "Hugo construit une armure à pointes pour blesser le monstre s'il l'attaque. Il faut l'enduire de scnaps pour empoisonner le monstre ! "
                        + "Malheureusement cette brute d'Hugo n'apprécie pas votre idée et la repousse. "
                        + "Il prétend que la créature est un crapaud. Ridicule : vous avez distinctement vu ses cornes."
                        + "Vous décidez de bouder pour protester. ";
                        forgeBrule = true;

                    } break;
                    case metiersEnum.macon: {
                        texte += "Vous avez à peine vu la créature mais une chose est sûre : vous l'avez vue s'envoler dans les airs dans un battement d'ailes. "
                        + "Vous voyez qu'au dehors la forge a elle aussi été épargnée et fonctionne, vous vous y rendez vite pour voir si vous pouvez apprendre ce qui s'est passé et aider. "
                        + "Là bas en plus d'Hugo le forgeron vous êtes heureux de trouver Emil le brasseur et Bruno le boulanger. "
                        + "Hugo construit une armure à pointes pour blesser le monstre s'il l'attaque avec sa 'longue langue de crapaud'. Admettons... "
                        + "Vous voulez aider en tout cas et suivez els ordres de Hugo pour ajouter du bois au feu de la forge, encore et encore. ";
                        forgeBrule = true;

                    } break;
                    case metiersEnum.apprenti_boulanger:
                    case metiersEnum.boulanger: {
                        texte += "Vous avez à peine vu la créature mais une chose est sûre : "
                        + "elle a été blessée par la prêtresse de Sigmar et vous avez vu de vos yeux sa blessure se refermer. "
                            + "Il s'agit donc clairement d'un troll régénérant !"
                        + "Vous voyez qu'au dehors la forge a elle aussi été épargnée et fonctionne, vous vous y rendez vite pour voir si vous pouvez apprendre ce qui s'est passé et aider. "
                        + "Là bas en plus d'Hugo le forgeron vous êtes heureux de trouver Emil le brasseur et Kai la maçon. "
                        + "Hugo construit une armure à pointes pour blesser le monstre s'il l'attaque avec sa 'longue langue de crapaud'. "
                        + "Vpis avez une bien meilleure idée : il faut chauffer l'enclume à l'extrême et la faire tomber sur le troll qui sera sensible au feu comme tous les trolls. "
                            + " Malheureusement Hugo ne trouve aps votre idée très raisonnable logistiquement parlant et refuse. C'est sa forge... "
                        + "Vous voulez aider tout de même et suivez les ordres de Hugo pour ajouter du bois au feu de la forge, encore et encore. ";
                        forgeBrule = true;

                    } break;
                }
                if (forgeBrule) {
                    texte += "Emportés dans leur élan et leur folie, les villageois alimentent la forge à l'excès et elle prend feu, détruisant tout le bâtiment. ";
                }

                return texte;
            },
            conditions: (perso: Perso): boolean => perso.lieu.ville === Ville.gotheim,
            image: "https://raw.githubusercontent.com/gabriellevy/destin-react/refs/heads/main/images/monstres/Jabberslythe.webp"
        },
    ],
    probaParDefaut: 2999999999999999,
};