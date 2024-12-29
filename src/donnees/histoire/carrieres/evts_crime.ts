import {Perso} from "../../../types/Perso.ts";
import {metiersObjs} from "../../../types/metiers/metiers.ts";
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
    ],
    probaParDefaut: 10,
};
