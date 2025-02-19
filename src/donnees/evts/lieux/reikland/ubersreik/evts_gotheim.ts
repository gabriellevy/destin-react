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
import {aLeTalent, talents} from "../../../../talents.ts";
import {testCorruptionMentale, testCorruptionPhysique} from "../../../../../fonctions/corruption.ts";

export const evts_gotheim: GroupeEvts = {
    evts: [
        {
            id: "evts_gotheim1",
            description: (perso: Perso): string => {
                const carriere: Carriere|undefined = getCarriereActive(perso);
                let forgeBrule: boolean = false;
                let aAgit: boolean = false;
                const villageInonde: boolean = true; // si on ne fait rien...
                let dansLeVillage: boolean = true;
                let texte = "Vous êtes réveillé en sursaut en pleine nuit. "
                + "Un grand fracas a lieu très près, des hommes hurlent. "
                + "Vous avez l'impression d'apercevoir une silhouette massive par la fenêtre mais il fait trop sombre et votre tête vous torture trop pour être sûr de vous."
                + "Un grand beuglement se fait entendre. Jamais vous n'avez rien entendu de semblable. ";

                texte += testCorruptionMentale(perso).resume;
                texte += testCorruptionPhysique(perso).resume;

                switch(carriere?.metier.nom) {
                    case metiersEnum.serveur: {
                        texte +="Une terreur vous frappe et vous empêche de penser correctement, vous restez caché jusqu'au petit matin. ";
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
                        aAgit = true;
                    } break;
                    case metiersEnum.bourgmestre: {
                        texte +="Une terreur vous frappe et vous empêche de penser correctement, vous restez caché jusqu'au petit matin. ";
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
                        aAgit = true;
                    } break;
                    case metiersEnum.forgeron:
                    case metiersEnum.apprenti_Forgeron: {
                        texte +="Une terreur vous frappe et vous empêche de penser correctement, vous restez caché jusqu'au petit matin. ";
                        texte += "Vous avez bien assez vu la créature : il s'agit d'un énorme crapaud. "
                        + "Il vient très probablement des marais du nord. Vous l'avez clairement vu attaquer les ges avec son énorme langue collante. "
                        + "Votre idée géniale est d'ajouter des pointes sur une armure de plates sur laquelle vous travailliez et ainsi quand la créature tentera de vous attraper avec sa langue elle se blessera ! "
                        + "Emli Bauer le brasseur, Kai le maçon et Bruno le boulanger vous ont rejoint et acceptent vite votre autorité dans ce travail héroïque ! "
                        + "Vous leur ordonnez d'apporter des bûches encor et encore pour attiser le feu et perdez toute mesure."
                        + "Il faut dire que cet idiot d'Emil affirme que le monstre est allergique à son schnaps. Ridicule !";
                        forgeBrule = true;
                        aAgit = true;
                    } break;
                    case metiersEnum.brasseur:
                    case metiersEnum.apprenti_brasseur: {
                        texte +="Une terreur vous frappe et vous empêche de penser correctement, vous restez caché jusqu'au petit matin. ";
                        texte += "Vous avez à peine vu la créature mais aucun doute : elle a détruit toutes les maisons autour de la vôtre mais vous a épargné. " +
                            + "C'est parce qu'elle est manifestement allergique au schnaps que vous produisez ! "
                        + "Vous voyez qu'au dehors la forge a elle aussi été épargnée et fonctionne, vous vous y rendez donc vite pour annoncer votre découverte et votre plan pour vaincre le monstre. "
                        + "Là bas en plus d'Hugo le forgeron vous êtes heureux de trouver Kai le maçon et Bruno le boulanger. "
                            + "Hugo construit une armure à pointes pour blesser le monstre s'il l'attaque. Il faut l'enduire de scnaps pour empoisonner le monstre ! "
                        + "Malheureusement cette brute d'Hugo n'apprécie pas votre idée et la repousse. "
                        + "Il prétend que la créature est un crapaud. Ridicule : vous avez distinctement vu ses cornes."
                        + "Vous décidez de bouder pour protester. ";
                        forgeBrule = true;
                        aAgit = true;
                    } break;
                    case metiersEnum.macon: {
                        texte +="Une terreur vous frappe et vous empêche de penser correctement, vous restez caché jusqu'au petit matin. ";
                        texte += "Vous avez à peine vu la créature mais une chose est sûre : vous l'avez vue s'envoler dans les airs dans un battement d'ailes. "
                        + "Vous voyez qu'au dehors la forge a elle aussi été épargnée et fonctionne, vous vous y rendez vite pour voir si vous pouvez apprendre ce qui s'est passé et aider. "
                        + "Là bas en plus d'Hugo le forgeron vous êtes heureux de trouver Emil le brasseur et Bruno le boulanger. "
                        + "Hugo construit une armure à pointes pour blesser le monstre s'il l'attaque avec sa 'longue langue de crapaud'. Admettons... "
                        + "Vous voulez aider en tout cas et suivez els ordres de Hugo pour ajouter du bois au feu de la forge, encore et encore. ";
                        forgeBrule = true;
                        aAgit = true;
                    } break;
                    case metiersEnum.apprenti_boulanger:
                    case metiersEnum.boulanger: {
                        texte +="Une terreur vous frappe et vous empêche de penser correctement, vous restez caché jusqu'au petit matin. ";
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
                        aAgit = true;
                    } break;
                    case metiersEnum.barbier_chirurgien:
                    case metiersEnum.apprenti_barbier_chirurgien: {
                        texte +="Une terreur vous frappe et vous empêche de penser correctement, vous restez caché jusqu'au petit matin. ";
                        texte +="Quand vous sortez vous constatez que le village a presque entièrement été détruit et voyez une scène de amssacre autour du temple de Sigmar. "
                        + "Trois enfants du village, escapés, y jouent."
                        + "Vous sentez confusément que c'est à vous de retrouver et tuer le monstre. Son sang répandu partout prouve qu'il a été gravement blessé."
                        + "Après avoir pris diverses notes dans les marges de <i>La vie de Sigmar</i> vous avez un plan : "
                        + "Il faut utiliser les enfants comme appât près du repaire du monstre qui est sur une colline dans la foret au nord. "
                        + "Alors vous surgiez avec votre arc et battrez le monstre de vos flèches ! ";
                        texte += "C'est ce que vous faites mais même en emmenant les enfants dans la foret, en les attachant et en les faisant crier, rien ne se passe... ";
                        forgeBrule = true;
                        aAgit = true;
                        dansLeVillage = false;
                    } break;
                    case metiersEnum.pretre: // TODO : ajouter ici tous les métiers de guerriers (sauf garde et milicien)
                    case metiersEnum.initie_pretre: {
                        texte +="Puis vous entendez des hurlements et des bruits de lutte près du temple de Sigmar. ";
                        const resTestFm: ResultatTest = testCarac(perso, {carac: TypeCarac.fm, bonusMalus: 20});
                        if (resTestFm.reussi) {
                            texte += "N'écoutant que votre courage vous vous précipitez au temple avec votre arme et tombez face à une mêlée confuse dans les ténèbres avec en son centre un monstre énorme et hideux, une sorte de crapaud génat bousouflé et ailé. "
                            + "Vous vous ruez dans la mêlée.";
                            texte += "Vous parvenez à blesser le monstre et un horrible sang violet jaillit de la blessure. ";
                            const resTestCc: ResultatTest = testCarac(perso, {carac: TypeCarac.cc, bonusMalus: -20});
                            if (resTestCc.reussi) {
                                texte += "Il ouvre grand la gueule et arrache la tête d'un villageois qui se tenait à vos côtés. "
                                + "Surmontant votre dégoût et votre colère vous redoublez de courage et la créature finit par s'envoler maladroitement et s'enfuir ! ";
                            } else {
                                texte += "Mais malgré cela la créature fait d'énorme moulinet avec ses pattes avant. "
                                + "L'un d'entre eux vous frappe en pleine poitrine et vous vous retrouvez projeté à plusieurs mètres, les os brisés.";
                                perso.mort = true;
                            }

                        } else {
                            texte +="Pétrifié par la terreur. Vous restez caché jusqu'au petit matin malgré les hurlements de souffrance qui vous parviennent. "
                            + "Le monstre massacre les habitants du village ! <br/>";
                        }
                        forgeBrule = true;
                        aAgit = true;
                    } break;
                    case metiersEnum.boucher:
                    case metiersEnum.apprenti_boucher: {
                        texte += "Une terreur vous frappe et vous empêche de penser correctement, vous restez caché jusqu'au petit matin. ";
                        texte += "Là vous surmontez votre terreur : le monstre a fuit vers le cercle de pierre, vous êtes sûr de l'avoir vu s'envoler par là. "
                        + "Il suffit de détruire le barrage du ruisseau, le Mühlbach, pour inonder la zone et noyer le monstre ! "
                        + "Vous vous mettez rapidement à détruire le digue avec l'aide de Maria la boulangère.";
                        forgeBrule = true;
                        aAgit = true;
                        dansLeVillage = false;
                    } break;
                }
                if (!aAgit) {
                    // pour ceux n'ayant pas agi selon leur métier
                    texte +="Une terreur vous frappe et vous empêche de penser correctement, vous restez caché jusqu'au petit matin. ";
                    if (perso?.age && perso.age< 15) {
                        // enfants
                        texte += "Après, bizarreùent vous vous sentre bien et décidez de sortir jouer avec vos amis. "
                        + "Perle et Schneck sont là, dans le temple de Sigmar ! "
                        + "Vous vous amusez beaucoup à courir partout en agitant les bras. "
                        + "Kal dit que le monstre était un énorme castor poilu et qu'il a attrapé Frau Kenner avec les dents et l'a déchiqueté en morceaux ! "
                        + "Gé- nial ! <br/>";
                    }

                }
                if (forgeBrule) {
                    texte += "Emportés dans leur élan et leur folie, les villageois alimentent la forge à l'excès et elle prend feu, détruisant tout le bâtiment. ";
                }
                if (villageInonde) {
                    texte += "La digue est rompue ! "
                    + "Les eaux qu'elle contenaient descendent la colline, noient le cercle de pierre et le village tout entier ! ";
                    if (dansLeVillage) {
                        const resTestI: ResultatTest = testCarac(perso, {carac: TypeCarac.i, bonusMalus: 0});
                        if (resTestI.reussi || aLeTalent(perso, talents.natation)) {
                            texte += "Vous parvenez à vous mettre à l'abri mais le village est complètement détruit. ";
                        } else {
                            texte += "Vous vous noyez dans la catastrophe. ";
                            perso.mort = true;
                        }
                    }
                    texte += "Le village est complètement détruit. Les récoltes sont ruinées, les chèvres sont noyées... "
                    + "Jamais il ne s'en relèvera. ";
                }

                return texte;
            },
            conditions: (perso: Perso): boolean => perso.lieu.ville === Ville.gotheim,
            image: "https://raw.githubusercontent.com/gabriellevy/destin-react/refs/heads/main/images/monstres/Jabberslythe.webp"
        },
    ],
    probaParDefaut: 2,
};