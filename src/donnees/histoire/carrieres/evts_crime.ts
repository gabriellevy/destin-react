import {Perso} from "../../../types/Perso.ts";
import {metiersEnum, metiersObjs} from "../../../types/metiers/metiers.ts";
import {GroupeEvts} from "../../../types/Evt.ts";
import {compareStatut, MetalStatut} from "../../../types/Statut.ts";

export const evts_crime: GroupeEvts = {
    evts: [
        {
            id: "evts_crime1",
                description: (perso: Perso): string => {
            // TODO : faire une fonction spécifique au changement de métier qui inclut le changement de statut et la maj de la compétence
            perso.carriere = {
                metier: metiersObjs.ranconneur,
                groupeLieu: undefined,
                duree: 0,
                competence: 1, // TODO stocker les compétences passées de chaque métier dans un tableau quelque part
            }
            return "À force de trainer parmi les vauriens vous vous êtes intégré à leur bande et commencez à participer à leurs sales coups. " +
                "Aujourd'hui vous les avez aidés à extorquer de largent à un commerçant. "
        },
            conditions: (perso: Perso): boolean => !perso.carriere && !compareStatut(perso.statut, {metalStatut: MetalStatut.argent, rang: 4}),
            proba: 5,
        },
        {
            id: "evts_crime2",
                description: (): string =>  "Vous prenez un mauvais coup de couteau lors d'une des nombreuses bagarres de votre carrière de malandrin. " +
                "Vous aurez une vilaine cicatrice près de l'oeil jusqu'à la fin de vos jours en souvenir. ",
            conditions: (perso: Perso): boolean => perso.carriere?.metier.nom === metiersEnum.ranconneur,
            proba: 5,
        },
        {
            id: "evts_crime3",
                description: (): string => "Vous êtes maintenant un membre de la bande à part entière. " +
                "En signe d'appartenance et de fraternité un couteau et une larme vous sont tatoués bien visibles sur le visage. ",
            conditions: (perso: Perso): boolean => perso.carriere?.metier.nom === metiersEnum.ranconneur && perso.carriere?.duree >= 40,
            proba: 5,
        },
    ],
    probaParDefaut: 10,
};
