import {Perso} from "../../../types/Perso.ts";
import {metiersEnum} from "../../../types/metiers/metiers.ts";
import {GroupeEvts} from "../../../types/Evt.ts";
import {compareStatut, MetalStatut} from "../../../types/Statut.ts";
import {ResultatTest} from "../../../types/LancerDe.ts";
import {testCarac} from "../../../fonctions/des.ts";
import {TypeCarac} from "../../../types/caracs/Caracs.ts";
import {
    aUneCarriere,
    commencerCarriere,
    suitUneCarriereDe,
    suitUneCarriereDepuis
} from "../../../types/metiers/metiersUtils.ts";

export const evts_crime: GroupeEvts = {
    evts: [
        {
            id: "evts_crime1",
            description: (perso: Perso): string => {
                commencerCarriere(perso, metiersEnum.ranconneur, '');

            return "À force de trainer parmi les vauriens vous vous êtes intégré à leur bande et commencez à participer à leurs sales coups. " +
                "Aujourd'hui vous les avez aidés à extorquer de l'argent à un commerçant. ";
        },
            conditions: (perso: Perso): boolean => !aUneCarriere(perso) && !compareStatut(perso.statut, {metalStatut: MetalStatut.argent, rang: 4}),
        },
        {
            id: "evts_crime2",
            description: (perso: Perso): string =>  {
                let texte: string = "";
                const resTestCC:ResultatTest = testCarac(perso, {carac: TypeCarac.cc, bonusMalus: 0});
                texte += resTestCC.resume;
                if (resTestCC.reussi) {
                    texte += "Bagarre après bagarre, vous vous faites remarquer dans la bande pour votre efficacité au combat. ";
                } else {
                    texte += "Vous prenez un mauvais coup de couteau lors d'une des nombreuses bagarres de votre carrière de malandrin. " +
                    "Vous aurez une vilaine cicatrice près de l'oeil jusqu'à la fin de vos jours en souvenir. ";
                }
                return texte;
            },
            conditions: (perso: Perso): boolean => suitUneCarriereDe(perso, metiersEnum.ranconneur),
        },
        {
            id: "evts_crime3",
                description: (): string => "Vous êtes maintenant un membre de la bande à part entière. " +
                "En signe d'appartenance et de fraternité un couteau et une larme vous sont tatoués bien visibles sur le visage. ",
            conditions: (perso: Perso): boolean => suitUneCarriereDepuis(perso, metiersEnum.ranconneur, 40),
        },
    ],
    probaParDefaut: 5,
};
