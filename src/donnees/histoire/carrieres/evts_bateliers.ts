import {aUneCarriere, Perso, suitUneCarriereDe} from "../../../types/Perso.ts";
import {metiersEnum, metiersObjs} from "../../../types/metiers/metiers.ts";
import {GroupeEvts} from "../../../types/Evt.ts";
import {ResultatTest} from "../../../types/LancerDe.ts";
import {testCarac} from "../../../fonctions/des.ts";
import {TypeCarac} from "../../../types/caracs/Caracs.ts";
import {age} from "../../../types/Date.ts";
import {auBordDeLaRiviere} from "../../../types/lieux/Lieu.ts";

export const evts_batelier: GroupeEvts = {
    evts: [
        {
            id: "evts_batelier1",
            description: (perso: Perso): string => {
                let texte: string = `Vous hésitez à devenir batelier. `
                const resTestFor:ResultatTest = testCarac(perso, {carac: TypeCarac.f, bonusMalus: 20});
                const resTestEnd:ResultatTest = testCarac(perso, {carac: TypeCarac.e, bonusMalus: 20});
                texte += resTestFor.resume;
                texte += resTestEnd.resume;
                if (resTestFor.reussi && resTestEnd.reussi) {
                    // TODO : faire une fonction spécifique au changement de métier qui inclut le changement de statut et la maj de la compétence
                    perso.carriere.push({
                        metier: metiersObjs[metiersEnum.batelier],
                        groupeLieu: undefined,
                        duree: 0,
                        competence: 1, // TODO stocker les compétences passées de chaque métier dans un tableau quelque part
                    });
                    texte += `Coriace comme vous l'êtes, vous impressionnez le capitaine qui vous engage à l'essai. `;
                } else {
                    texte += `Malheureusement c'est un métier ui demande une très robuste constitution et vous êtes jugé trop frêle par le capitaine. `;
                }
                return texte;
            },
            conditions: (perso: Perso): boolean =>
                !aUneCarriere(perso)
                && age(perso) >= 14
                && auBordDeLaRiviere(perso),
        },
        {
            id: "evts_batelier2",
            description: (perso: Perso): string => {
                let texte: string = "";
                const resTestFor:ResultatTest = testCarac(perso, {carac: TypeCarac.f, bonusMalus: 40});
                const resTestEnd:ResultatTest = testCarac(perso, {carac: TypeCarac.e, bonusMalus: 40});
                texte += resTestFor.resume;
                texte += resTestEnd.resume;
                if (resTestFor.reussi && resTestEnd.reussi) {
                    texte += `Vous êtes un batelier efficace et respecté. `;
                } else {
                    texte += `Vous avez beaucoup de mal à tenir le rythme épuisant de votre métier de batelier. `;
                }
                return texte;
            },
            conditions: (perso: Perso): boolean =>
                suitUneCarriereDe(perso, metiersEnum.batelier),
        },
    ],
    probaParDefaut: 5,
};