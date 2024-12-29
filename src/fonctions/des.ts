import {ResultatTest, TestCarac} from "../types/LancerDe.ts";
import {getCaracValue} from "../types/caracs/Caracs.ts";
import {Perso} from "../types/Perso.ts";

export function d10(): number {
    return Math.floor(Math.random() * 10) + 1;
}
export function d100(): number {
    return Math.floor(Math.random() * 100) + 1;
}

export function testCarac(perso: Perso, test: TestCarac): ResultatTest {
    let caracValue: number = getCaracValue(perso, test.carac);
    let resDe: number = d100();
    const reussi: boolean = resDe <= (caracValue + test.bonusMalus);
    const texte: string = `Test de ${test.carac} `
        + (reussi ? "réussi" : "raté")
        + ` (résultat ${resDe} contre compétence ${caracValue} ${test.bonusMalus > 0 ? "+" : ""} ${test.bonusMalus} ) `;

    return {
        reussi : reussi,
        critical: resDe % 10 == Math.floor(resDe / 10) || resDe === 100,
        resume : texte,
    }
}