import {Perso} from "../types/Perso.ts";
import {ResultatTest} from "../types/LancerDe.ts";
import {testCarac} from "./des.ts";
import {TypeCarac} from "../types/caracs/Caracs.ts";

export function testCorruptionMentale(perso: Perso): ResultatTest {
    const resTest:ResultatTest = testCarac(perso, {carac: TypeCarac.fm, bonusMalus:0});
    if (resTest.reussi) {
        resTest.resume += "Vous résistez à la corruption mentale. <br/>";
    } else {
        resTest.resume += "Votre âme subit l'effet de la corruption. <br/>";
        perso.corruption += 1;
        if (resTest.critical) {
            perso.corruption += 2;
        }
        // TODO : EFFETS DES MUTATIONS ETC
    }
    return resTest;
}

export function testCorruptionPhysique(perso: Perso): ResultatTest {
    const resTest:ResultatTest = testCarac(perso, {carac: TypeCarac.e, bonusMalus:0});
    if (resTest.reussi) {
        resTest.resume += "Vous résistez à la corruption de votre corps. <br/>";
    } else {
        resTest.resume += "Votre corps subit l'effet de la corruption. <br/>";
        perso.corruption += 1;
        if (resTest.critical) {
            perso.corruption += 2;
        }
        // TODO : EFFETS DES MUTATIONS ETC
    }
    return resTest;
}