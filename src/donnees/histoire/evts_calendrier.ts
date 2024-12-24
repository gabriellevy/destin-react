import {Evt, GroupeEvts} from "../../types/Evt.ts";
import {Perso} from "../../types/Perso.ts";
import {HEXENSTAG, NACHEXEN, SIGMARZEIT, SOMMERZEIT, SONNSTILL} from "../../types/Date.ts";

export const evts_calendrier: GroupeEvts = {
    evts: [
            {
                id: "calendrier1",
                description: (perso: Perso): string =>
                    "Aujourd'hui est le jour du nouvel an, le terrible jour des sorcières ! " +
                    "La ligne qui sépare le monde des vivants de celui des morts est plus ténue cette nuit ci et les esprit de ceux qui nous ont quitté font parfois leur retour. " +
                    "Vous et toute votre famille restez cloîtrés chez vous.",
                conditions: (perso:Perso):boolean => perso.mois === HEXENSTAG,
                image: "https://raw.githubusercontent.com/gabriellevy/destin-react/refs/heads/main/images/hexenstag.jpeg",
            },
            {
                id: "calendrier2",
                description: (perso: Perso): string =>
                    "Aujourd'hui est le jour de la bénédiction de l'an nouveau. " +
                    "Chacun est heureux d'avoir survécu à la nuit des sorcières et émerge de son foyer pour demander à la déesse Verena de bénir l'année à venir. " +
                    "Des extraits des paroles de Verena sont lus et tous ceux qui ont de la rancoeur envers un voisin sont priés de l'exposer et de tenter de résoudre le problème devant la prétresse de Véréna..",
                conditions: (perso:Perso):boolean => perso.mois === NACHEXEN && perso.jourDuMois === 1,
            },
            {
                id: "calendrier3",
                description: (perso: Perso): string =>
                    "Aujourd'hui est le premier jour de l'été ! Et surtout l'anniversaire de l'accession à la divinité de notre divin Sigmar ! " +
                    "L'occasion de faire une grande fête, de danser, et de se régaler des légendaires saucisses de Sigmar en écoutant des récits des exploits de Sigmar par les prêtres et les saltimbanques. ",
                conditions: (perso:Perso):boolean => perso.mois === SIGMARZEIT && perso.jourDuMois === 18,
            },
            {
                id: "calendrier4",
                description: (perso: Perso): string =>
                    "Aujourd'hui c'est jour de folie en l'honneur de Ranald ! " +
                    "Les maîtres deviennent serviteurs et les serviteurs maîtres. Chacun porte selon ses moyens un masque pour dissimuler son identité et ses folies." +
                    "L'ivresse, les danses, les costumes colorés et les farces anodines sont de mises.",
                conditions: (perso:Perso):boolean => perso.mois === SOMMERZEIT && perso.jourDuMois === 10,
            },
            {
                id: "calendrier5",
                description: (perso: Perso): string =>
                    "Aujourd'hui c'est sonnstill, le jour du solsctice d'été, le plus long jour de l'année ! " +
                    "C'est un jour de joie et de fertilité. Les jeunes couples se mettent des fleurs dans les cheveux, dansent et chantent pour honorer Taal et Rhya. " +
                    "Et il paraît que même les elfes honorent leurs étranges dieux de la nature. ",
                conditions: (perso:Perso):boolean => perso.mois === SONNSTILL,
            },
    ],
    probaParDefaut: 10,
};