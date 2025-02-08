import {Perso} from "../../../types/Perso.ts";
import {metiersEnum} from "../../../types/metiers/metiers.ts";
import {GroupeEvts} from "../../../types/Evt.ts";
import {ResultatTest} from "../../../types/LancerDe.ts";
import {testCarac, testMetier} from "../../../fonctions/des.ts";
import {TypeCarac} from "../../../types/caracs/Caracs.ts";
import {age} from "../../../types/Date.ts";
import {commencerCarriere, travailleEnCeMomentComme} from "../../../types/metiers/metiersUtils.ts";
import {compareStatut, MetalStatut} from "../../../types/Statut.ts";
import {tailleVille} from "../../geographie/villes.ts";

export const evts_bourgmestre: GroupeEvts = {
    evts: [
        {
            id: "evts_bourgmestre1",
            description: (perso: Perso): string => {
                let texte: string = `Vous sentez qu'avec votre âge, votre expérience et votre respectabilité, vous feriez un excellent bourgmestre. `
                const resTestInt:ResultatTest = testCarac(perso, {carac: TypeCarac.int, bonusMalus: 0});
                const resTestSoc:ResultatTest = testCarac(perso, {carac: TypeCarac.soc, bonusMalus: 0});
                texte += resTestInt.resume;
                texte += resTestSoc.resume;
                if (!resTestSoc.reussi! && resTestInt.reussi) {
                    texte += `Malheureusement vos concitoyens sont d'un autre avis et vous n'êtes pas choisi par les notables de la ville. `;
                }
                else {
                    commencerCarriere(perso, metiersEnum.bourgmestre, perso.lieu.ville);
                    texte += `À votre grande joie les notables jugent en effet que vous êtes le meilleur candidat. Vous voilà bourgmestre. `;
                }
                return texte;
            },
            image: "https://raw.githubusercontent.com/gabriellevy/destin-react/refs/heads/main/images/Wilhelm_Kreigrisch.webp",
            conditions: (perso: Perso): boolean =>
                compareStatut(perso.statut, {metalStatut: MetalStatut.argent, rang: 4}) // richesse minimum
                && tailleVille(perso.lieu.ville).valueOf() > 1
                && age(perso) >= 40,
        },
        {
            id: "evts_bourgmestre2",
            description: (perso: Perso): string => {
                let texte: string = "";
                const resTestMetier:ResultatTest = testMetier(perso, {metier: metiersEnum.bourgmestre, bonusMalus: 20});
                texte += resTestMetier.resume;
                if (resTestMetier.reussi) {
                    texte += `Vous administrez efficacement la ville. `;
                } else {
                    texte += `Vous avez beaucoup de mal à administrer la ville. `;
                }
                return texte;
            },
            image: "https://raw.githubusercontent.com/gabriellevy/destin-react/refs/heads/main/images/Wilhelm_Kreigrisch.webp",
            conditions: (perso: Perso): boolean =>
                travailleEnCeMomentComme(perso, metiersEnum.bourgmestre),
        },
    ],
    probaParDefaut: 59999999999,
};