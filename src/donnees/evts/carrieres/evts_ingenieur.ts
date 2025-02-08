import {Perso} from "../../../types/Perso.ts";
import {metiersEnum} from "../../../types/metiers/metiers.ts";
import {GroupeEvts} from "../../../types/Evt.ts";
import {compareStatut, MetalStatut} from "../../../types/Statut.ts";
import {ResultatTest} from "../../../types/LancerDe.ts";
import {testCarac, testMetier} from "../../../fonctions/des.ts";
import {TypeCarac} from "../../../types/caracs/Caracs.ts";
import {anneesToJours} from "../../../types/Date.ts";
import {aUneCarriere, commencerCarriere, suitUneCarriereDe} from "../../../types/metiers/metiersUtils.ts";
import {appartientALaGuilde, rejointGuilde} from "../../../types/metiers/Guilde.ts";

const passageDiplome: (perso: Perso) => string = (perso: Perso) => {
    let texte: string =  "C'est le jour du passage de diplôme ! ";
    const resTestInge:ResultatTest = testMetier(perso, {metier: metiersEnum.etudiant_ingenieur, bonusMalus: 20});
    texte += resTestInge.resume;
    if (resTestInge.reussi) {
        texte +=  "Au soir vous avez déjà confirmation que vous avez réussi. Vous êtes maintenant un ingénieur à part entière.";
        commencerCarriere(perso, metiersEnum.ingenieur, '');
    } else {
        texte += "Malheureusement c'est un échec pour vous. Vous êtes recalé... Vous avez néanmoins encore une chance de le passer l'an prochain. ";
        perso.evtsProgrammes.set(perso.date + anneesToJours(1), passageDiplome);
    }
    return texte;
}

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
                    commencerCarriere(perso, metiersEnum.etudiant_ingenieur, '');
                    texte += `Vous êtes reçu à l'école d'ingéniérie ! Maintenant il va falloir travailler dur pour réussir le diplôme dans 5 ans. `;
                    // ajout du futur passage de diplôme :
                    perso.evtsProgrammes.set(perso.date + anneesToJours(5), passageDiplome);
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
        {
            id: "evts_ingenieur2",
            description: (perso: Perso): string => {
                let texte: string = "";
                const resTestInt:ResultatTest = testCarac(perso, {carac: TypeCarac.int, bonusMalus: 40});
                const resTestDex:ResultatTest = testCarac(perso, {carac: TypeCarac.dex, bonusMalus: 40});
                texte += resTestInt.resume;
                texte += resTestDex.resume;
                if (resTestInt.reussi && resTestDex.reussi) {
                    texte += `Vous travaillez dur et progressez rapidement. Vous serez bientôt un ingénieur de talent, c'est sûr. `;
                } else {
                    texte += `Vos notes sont basses, vous avez le sentiment de ne pas progresser, mais refusez d'abandonner. `;
                }
                return texte;
            },
            conditions: (perso: Perso): boolean =>
                suitUneCarriereDe(perso, metiersEnum.etudiant_ingenieur),
            proba: 1,
        },
        {
            id: "evts_ingenieur3_entre_a_la_guilde",
            description: (perso: Perso): string => {
                let texte: string = "Vous aimeriez bien rejoindre la guilde des ingénieurs.";
                const resTestInge:ResultatTest = testMetier(perso, {metier: metiersEnum.etudiant_ingenieur, bonusMalus: 0});
                texte += resTestInge.resume;
                if (resTestInge.reussi) {
                    rejointGuilde(perso, metiersEnum.ingenieur);

                    texte += `Vous devenez membre à part entière de la guilde. `;
                } else {
                    texte += `Vous êtes jugé trop peu expérimenté pour rejoindre la guilde. Mais cela viendra bientôt. `;
                }
                return texte;
            },
            conditions: (perso: Perso): boolean =>
                suitUneCarriereDe(perso, metiersEnum.ingenieur)
            && !appartientALaGuilde(perso, metiersEnum.ingenieur),
            proba: 5,
        },
    ],
    probaParDefaut: 10,
};