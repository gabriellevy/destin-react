import {aUneCarriere, Perso} from "../../../types/Perso.ts";
import {metiersEnum, metiersObjs} from "../../../types/metiers/metiers.ts";
import {GroupeEvts} from "../../../types/Evt.ts";
import {compareStatut, MetalStatut} from "../../../types/Statut.ts";
import {ResultatTest} from "../../../types/LancerDe.ts";
import {testCarac} from "../../../fonctions/des.ts";
import {TypeCarac} from "../../../types/caracs/Caracs.ts";

export const evts_ingenieur: GroupeEvts = {
    evts: [
        {
            id: "evts_ingenieur1",
            description: (perso: Perso): string => {
                let texte: string = `Vous avez la ferme intention de devenir apprenti ingénieur, mais les tests d'entrée sont difficiles. `
                const resTestInt:ResultatTest = testCarac(perso, {carac: TypeCarac.int, bonusMalus: 20});
                const resTestDex:ResultatTest = testCarac(perso, {carac: TypeCarac.dex, bonusMalus: 20});
                texte += resTestInt.resume;
                texte += resTestDex.resume;
                if (resTestInt.reussi && resTestDex.reussi) {
                    // TODO : faire une fonction spécifique au changement de métier qui inclut le changement de statut et la maj de la compétence
                    perso.carriere.push({
                        metier: metiersObjs[metiersEnum.etudiant_ingenieur],
                        groupeLieu: undefined,
                        duree: 0,
                        competence: 1, // TODO stocker les compétences passées de chaque métier dans un tableau quelque part
                    });
                    texte += `Vous êtes reçu à l'école d'ingéniérie ! Maintenant il va falloir travailler dur. `;
                } else {
                    texte += `Malheureusement vous n'avez pas été retenu. Peut-être une autre fois ? `;
                }
                return texte;
            },
            conditions: (perso: Perso): boolean =>
                !aUneCarriere(perso)
                && !compareStatut(perso.statut, {metalStatut: MetalStatut.argent, rang: 3}),
            proba: 5,
        },
    ],
    probaParDefaut: 10,
};