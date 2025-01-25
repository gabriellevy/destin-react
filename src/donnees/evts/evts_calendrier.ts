import {GroupeEvts} from "../../types/Evt.ts";
import {Perso} from "../../types/Perso.ts";
import {enumMois} from "../dates/calendrier.ts";

export const evts_calendrier: GroupeEvts = {
    evts: [
            {
                id: "calendrier1",
                description: (): string => {
                     return "Aujourd'hui est le jour du nouvel an, le terrible jour des sorcières ! " +
                    "La ligne qui sépare le monde des vivants de celui des morts est plus ténue cette nuit ci et les esprit de ceux qui nous ont quitté font parfois leur retour. " +
                    "Vous et toute votre famille restez cloîtrés chez vous."},
                conditions: (perso:Perso):boolean => perso.mois === enumMois.HEXENSTAG,
                image: "https://raw.githubusercontent.com/gabriellevy/destin-react/refs/heads/main/images/hexenstag.jpeg",
            },
            {
                id: "calendrier2",
                description: (): string =>{
                    return "Aujourd'hui est le jour de la bénédiction de l'an nouveau. " +
                            "Chacun est heureux d'avoir survécu à la nuit des sorcières et émerge de son foyer pour demander à la déesse Verena de bénir l'année à venir. " +
                            "Des extraits des paroles de Verena sont lus et tous ceux qui ont de la rancoeur envers un voisin sont priés de l'exposer et de tenter de résoudre le problème devant la prétresse de Véréna.."
                    },
                conditions: (perso:Perso):boolean => perso.mois === enumMois.NACHEXEN && perso.jourDuMois === 1,
            },
            {
                id: "calendrier3",
                description: (): string =>{
                    return "Aujourd'hui est le premier jour de l'été ! Et surtout l'anniversaire de l'accession à la divinité de notre divin Sigmar ! " +
                    "L'occasion de faire une grande fête, de danser, et de se régaler des légendaires saucisses de Sigmar en écoutant des récits des exploits de Sigmar par les prêtres et les saltimbanques. "},
                conditions: (perso:Perso):boolean => perso.mois === enumMois.SIGMARZEIT && perso.jourDuMois === 18,
            },
            {
                id: "calendrier4",
                description: (): string =>{
                    return  "Aujourd'hui c'est jour de folie en l'honneur de Ranald ! " +
                    "Les maîtres deviennent serviteurs et les serviteurs maîtres. Chacun porte selon ses moyens un masque pour dissimuler son identité et ses folies." +
                    "L'ivresse, les danses, les costumes colorés et les farces anodines sont de mises."},
                conditions: (perso:Perso):boolean => perso.mois === enumMois.SOMMERZEIT && perso.jourDuMois === 10,
            },
            {
                id: "calendrier5",
                description: (): string => "Aujourd'hui c'est sonnstill, le jour du solsctice d'été, le plus long jour de l'année ! " +
                    "C'est un jour de joie et de fertilité. Les jeunes couples se mettent des fleurs dans les cheveux, dansent et chantent pour honorer Taal et Rhya. " +
                    "Et il paraît que même les elfes honorent leurs étranges dieux de la nature. ",
                conditions: (perso:Perso):boolean => perso.mois === enumMois.SONNSTILL,
            },
            {
                id: "calendrier6",
                description: (): string => "Aujourd'hui c'est geheiminstag, le jour des mystères. " +
                    "Mannslieb et Morrslieb sont simultanément pleines et la frontière avec le monde des morts s'affaiblit. " +
                    "Certaines entendent les esprit, ou vont même consulter les augures du dieu Morr. " +
                    "Vous préférez rendre sagement hommage à vos ancêtres en demeurant chez vous. ",
                conditions: (perso:Perso):boolean => perso.mois === enumMois.GEHEIMISTAG,
            },
            {
                id: "calendrier7",
                description: (): string => "Nous sommes en pleine semaine de la tourte hobbit. " +
                    "Une bonne occasion de festoyer en mangeant les bonnes tourtes de ces petits vauriens boulimiques de hobbits. " +
                    "Vivement que cela deviennent un jour férié ! " +
                    "Cette année il va même y avoir un concours du plus gros mangeur et un de la meilleure recette. ",
                conditions: (perso:Perso):boolean => perso.mois === enumMois.ERNTEZEIT && perso.jourDuMois >= 1 && perso.jourDuMois <= 8,
            },
            {
                id: "calendrier8",
                description: (): string => "Aujourd'hui c'est Mitterbst, le jour de la décroissance, l'équinoxe d'automne. " +
                    "Le règne de Taal et Rhya s'affaiblit tandis que celui d'Ulric approche. " +
                    "De grands feux de joie sont élevés en l'honneur de Rhya, mère des moissons automnales. On lui sacrifie une partie des moissons ainsi qu'à Elric. " +
                    "Cette année il va même y avoir un concours du plus gros mangeur et un de la meilleure recette. ",
                conditions: (perso:Perso):boolean => perso.mois === enumMois.MITTHERBST,
            },
            {
                id: "calendrier9",
                description: (): string => "Aujourd'hui c'est Mondstille, je jour du solstice d'hiver, le zénith du règne d'Ulric sur l'empire. " +
                    "C'est un jour de froid et de désespoir mais où l'espoir renaît car Taal et Rhya sont sur la voie du retour. " +
                    "On allume de grands feux de joie pour les guider. " +
                    "Cette année il va même y avoir un concours du plus gros mangeur et un de la meilleure recette. ",
                conditions: (perso:Perso):boolean => perso.mois === enumMois.MONDSTILLE,
            },
            {
                id: "calendrier10",
                description: (): string => "Aujourd'hui c'est le jour du Fond du tonneau. " +
                    "C'est la fin du calendrier des nains paraît-t-il mais ici c'est surtout l'occasion d'une bonne beuverie à la bière en leur honneur. " +
                    "Attention tout de même : renverser une goutte et c'est le malheur assuré pour toute l'année. ",
                conditions: (perso:Perso):boolean => perso.mois === enumMois.VORHEXEN && perso.jourDuMois === 33,
            },
    ],
    probaParDefaut: 10,
};