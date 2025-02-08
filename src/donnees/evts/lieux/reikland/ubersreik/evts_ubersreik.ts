import {GroupeEvts} from "../../../../../types/Evt.ts";
import {
    Perso,
} from "../../../../../types/Perso.ts";
import {age} from "../../../../../types/Date.ts";
import {compareStatut, MetalStatut} from "../../../../../types/Statut.ts";
import {ResidenceDeVoyage} from "../../../../../types/lieux/ResidenceDeVoyage.ts";
import {metiersEnum} from "../../../../../types/metiers/metiers.ts";
import {aUneCarriere, commencerCarriere, suitUneCarriereDepuis} from "../../../../../types/metiers/metiersUtils.ts";
import {Ville} from "../../../../geographie/villes.ts";
import {enumMois} from "../../../../dates/calendrier.ts";

export const evts_ubersreik: GroupeEvts = {
    evts: [
        {
            id: "evts_ubersreik1",
            description: (): string => "Le pont d'Ubersreik est vraiment gigantesque. Il paraît que ce sont les nains qui l'ont construit avant même la naissance de papa !",
            conditions: (perso: Perso): boolean => perso.lieu.ville === Ville.ubersreik && age(perso) <= 15,
            image: "https://raw.githubusercontent.com/gabriellevy/destin-react/refs/heads/main/images/Ubersreik_Bridge.jpg"
        },
        {
            id: "evts_ubersreik2",
            description: (): string =>
                "Le pont d'Ubersreik est vraiment une merveille. Il paraît que les étranges symboles qui le parsèment sont des runes naines qui le feront durer éternellement.",
            conditions: (perso: Perso): boolean => perso.lieu.ville === Ville.ubersreik && age(perso) >= 30,
            image: "https://raw.githubusercontent.com/gabriellevy/destin-react/refs/heads/main/images/Ubersreik_Bridge.jpg"
        },
        {
            id: "evts_ubersreik3",
            description: (): string =>
                "La teufel est pleine de bâteaux de toutes les tailles. Vous espérez pouvoir monter sur l'un d'eux un jour.",
            conditions: (perso: Perso): boolean => perso.lieu.ville === Ville.ubersreik && age(perso) <= 15,
            image: "https://raw.githubusercontent.com/gabriellevy/destin-react/refs/heads/main/images/Ubersreik_Bridge.jpg"
        },
        {
            id: "evts_ubersreik4",
            description: (): string =>
                "Le commerce est en plein essort à Ubersreik. La Teufel est couverte de navires de commerce de toutes les tailles.",
            conditions: (perso: Perso): boolean => perso.lieu.ville === Ville.ubersreik && age(perso) >= 30,
            image: "https://raw.githubusercontent.com/gabriellevy/destin-react/refs/heads/main/images/Ubersreik_Bridge.jpg"
        },
        {
            id: "evts_ubersreik5",
            description: (): string =>
                "Maman est furieuse contre vous. Elle a dit que si vous continuez à être aussi méchant, Drachenfels viendra vous prendre la prochaine nuit sans lune.",
            conditions: (perso: Perso): boolean => perso.lieu.ville === Ville.ubersreik && age(perso) <= 15,
        },
        {
            id: "evts_ubersreik6",
            description: (): string =>
                "Cette semaine c'est le festival de Zwiebelfest, la fête des oignons ! " +
                "Tous les fermiers viennent en vendre à tous les étals de la ville et de nombreuses activités à base d'oignons sont organisées. ",
            conditions: (perso: Perso): boolean => perso.lieu.ville === Ville.ubersreik
                && perso.mois === enumMois.KALDEZEIT
                && perso.jourDuMois >= 8 && perso.jourDuMois <= 15,
        },
        {
            id: "evts_ubersreik7",
            description: (): string =>
                "Aujourd'hui c'est le Silburmesse, la fête de l'argenterie, pour mettre en avant cette grande spécialisation de la ville d'Ubersreik.",
            conditions: (perso: Perso): boolean => perso.lieu.ville === Ville.ubersreik
                && perso.mois === enumMois.SOMMERZEIT
                && perso.jourDuMois === 5,
        },
        {
            id: "evts_ubersreik8",
            description: (): string =>
                "Aujourd'hui c'est le Magnustag, la fête de Magnus le pieux. "
            + "C'est une journée complète de carnaval durant laquelle chaque quartier tente de construire la plus grande effigie de Magnus le pieux.",
            conditions: (perso: Perso): boolean => perso.lieu.ville === Ville.ubersreik
                && perso.mois === enumMois.SIGMARZEIT
                && perso.jourDuMois === 10,
        },
        {
            id: "evts_ubersreik9",
            description: (): string =>
                "Aujourd'hui c'est le Brynkulti, une foire mettant en avant les parures nains en or faites par les nains de Dawihafen et des montagnes grises. ",
            conditions: (perso: Perso): boolean => perso.lieu.ville === Ville.ubersreik
                && perso.mois === enumMois.JAHRDRUNG
                && perso.jourDuMois === 1,
        },
        {
            id: "evts_auberge_du_pont_1",
            description: (perso: Perso): string => {
                perso.lieu.residenceVoyage = ResidenceDeVoyage.auberge_de_la_maison_du_pont;
                return "De passage à ubersreik et sans logement vous décidez de vous installer à l'auberge de la maison du pont. " +
                        "Elle est idéalement située en plein centre d'Ubersreik et offre une superbe vue sur le grand pont construit par les nains. ";
            },
            conditions: (perso: Perso): boolean => perso.lieu.ville === Ville.ubersreik
                && compareStatut(perso.statut, {metalStatut: MetalStatut.argent, rang: 1})
                && perso.lieu.enVoyage
                && perso.lieu.residenceVoyage === null,
            proba: 100,
        },
        {
            id: "evts_auberge_du_pont_2",
            description: (): string =>
                    "Aujourd'hui vous vous offrez un petit plaisir: vous allez diner à l'auberge de la maison du pont. " +
                "La cuisine y est bonne et les portions généreuses. "
            ,
            conditions: (perso: Perso): boolean => perso.lieu.ville === Ville.ubersreik
                && compareStatut(perso.statut, {metalStatut: MetalStatut.argent, rang: 1}),
        },
        {
            id: "evts_auberge_du_pont_3",
            description: (perso: Perso): string => {
                commencerCarriere(perso, metiersEnum.serveur, "Auberge de la maison du pont");
                perso.lieu.residenceVoyage = null;
                perso.lieu.maison = ResidenceDeVoyage.auberge_de_la_maison_du_pont;
                return "Vous avez réussi à vous trouver un travail de serveur à l'auberge de la maison du pont. " +
                "C'est une auberge de qualité dans laquelle vous devriez être assez payé pour subvenir à vos besoins. " +
                "Vous avez surtout la chance de pouvoir loger dans une chambre de l'auberge pour les domestiques. " +
                    "À condition de ne pas déplaire au patron Gunther Abend et à bien aider sa femme Hanna et leurs trois enfants à tenir la boutique. ";
            },
            conditions: (perso: Perso): boolean => perso.lieu.ville === Ville.ubersreik
                && !aUneCarriere(perso),
        },
        {
            id: "devenir_confesseur_jungfreud",
            description: (perso: Perso): string => {
                const texte: string = `Vos grandes qualité de prêtre ainsi que votre fidélité à leur famille pousse les Jungfreud à vous faire le grand honneur de vous nommer confesseur officiel de leur famille. `

                commencerCarriere(perso, metiersEnum.confesseur, "la famille Jungfreud");

                return texte;
            },
            conditions: (perso: Perso): boolean => // TODO : ajouter une forme d'allégeance aux Jungfreud ou autre + evt impossible après la prise de la ville par l'empereur
                (suitUneCarriereDepuis(perso, metiersEnum.pretre, 2)// depuis au moins 2 ans
                || suitUneCarriereDepuis(perso, metiersEnum.moine, 2))
                && perso.lieu.ville === Ville.ubersreik,
            proba: 0.1,
        },
    ],
    probaParDefaut: 1,
};