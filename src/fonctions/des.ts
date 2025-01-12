import {ResultatTest, TestCarac, TestMetier} from "../types/LancerDe.ts";
import {augmenterNbDeTestsFaitsCarac, getCaracValue} from "../types/caracs/Caracs.ts";
import {Perso} from "../types/Perso.ts";
import {augmenterNbDeTestsFaitsMetier, getCompetenceMetier} from "../types/metiers/metiersUtils.ts";

export function d10(): number {
    return Math.floor(Math.random() * 10) + 1;
}
export function d100(): number {
    return Math.floor(Math.random() * 100) + 1;
}

export function testCarac(perso: Perso, test: TestCarac): ResultatTest {
    const caracValue: number = getCaracValue(perso, test.carac);
    // augmenter tests effectués :
    const texteAugmentation: string = augmenterNbDeTestsFaitsCarac(perso, test.carac);
    return returnTestResult(texteAugmentation, test.carac, caracValue, test.bonusMalus);
}

export function testMetier(perso: Perso, test: TestMetier): ResultatTest {
    const caracValue: number = getCompetenceMetier(perso, test.metier);
    // augmenter tests effectués :
    const texteAugmentation: string = augmenterNbDeTestsFaitsMetier(perso, test.metier);
    return returnTestResult(texteAugmentation, test.metier, caracValue, test.bonusMalus);
}

/**
 *
 * @param texteAugmentation
 * @param intituleTestee
 * @param valeurTestee peut être une compétence, une carac, un métier...
 * @param bonusMalus
 */
function returnTestResult(texteAugmentation: string, intituleTestee:string, valeurTestee: number, bonusMalus: number) {
    const resDe: number = d100();
    const reussi: boolean = resDe <= (valeurTestee + bonusMalus);
    const texte: string = "<i>Test de "
        + intituleTestee + " "
        + (reussi ? "réussi" : "raté")
        + ` (résultat ${resDe} contre compétence ${valeurTestee} ${bonusMalus > 0 ? "+" : ""} ${bonusMalus} ) `
        + texteAugmentation
        + "</i><br/>";
    return {
        reussi : reussi,
        critical: resDe % 10 == Math.floor(resDe / 10) || resDe === 100,
        resume : texte,
    }
}
