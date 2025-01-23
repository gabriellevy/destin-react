import {Perso} from "../../../types/Perso.ts";
import {metiersEnum, metiersObjs} from "../../../types/metiers/metiers.ts";
import {GroupeEvts, ResultatExecution} from "../../../types/Evt.ts";
import {compareStatut, MetalStatut} from "../../../types/Statut.ts";
import {ResultatTest} from "../../../types/LancerDe.ts";
import {testCarac} from "../../../fonctions/des.ts";
import {TypeCarac} from "../../../types/caracs/Caracs.ts";
import {aUneCarriere, suitUneCarriereDe, suitUneCarriereDepuis} from "../../../types/metiers/metiersUtils.ts";

export const evts_crime: GroupeEvts = {
    evts: [
        {
            id: "evts_crime1",
            description: (perso: Perso): ResultatExecution => {
            // TODO : faire une fonction spécifique au changement de métier qui inclut le changement de statut et la maj de la compétence
            perso.carrieres.set(metiersEnum.ranconneur, {
                metier: metiersObjs[metiersEnum.ranconneur],
                groupeLieu: undefined,
                duree: 0,
                competence: 1, // TODO stocker les compétences passées de chaque métier dans un tableau quelque part
                actif: true,
                nbDeTestsFaits : 0,
            });

            return {texte: "À force de trainer parmi les vauriens vous vous êtes intégré à leur bande et commencez à participer à leurs sales coups. " +
                "Aujourd'hui vous les avez aidés à extorquer de l'argent à un commerçant. ",
                perso: perso};
        },
            conditions: (perso: Perso): boolean => !aUneCarriere(perso) && !compareStatut(perso.statut, {metalStatut: MetalStatut.argent, rang: 4}),
        },
        {
            id: "evts_crime2",
            description: (perso: Perso): ResultatExecution =>  {
                let texte: string = "";
                const resTestCC:ResultatTest = testCarac(perso, {carac: TypeCarac.cc, bonusMalus: 0});
                perso = resTestCC.perso;
                texte += resTestCC.resume;
                if (resTestCC.reussi) {
                    texte += "Bagarre après bagarre, vous vous faites remarquer dans la bande pour votre efficacité au combat. ";
                } else {
                    texte += "Vous prenez un mauvais coup de couteau lors d'une des nombreuses bagarres de votre carrière de malandrin. " +
                    "Vous aurez une vilaine cicatrice près de l'oeil jusqu'à la fin de vos jours en souvenir. ";
                }
                return {texte: texte, perso: perso};
            },
            conditions: (perso: Perso): boolean => suitUneCarriereDe(perso, metiersEnum.ranconneur),
        },
        {
            id: "evts_crime3",
                description: (): ResultatExecution => {return {texte: "Vous êtes maintenant un membre de la bande à part entière. " +
                "En signe d'appartenance et de fraternité un couteau et une larme vous sont tatoués bien visibles sur le visage. "}},
            conditions: (perso: Perso): boolean => suitUneCarriereDepuis(perso, metiersEnum.ranconneur, 40),
        },
    ],
    probaParDefaut: 5,
};
