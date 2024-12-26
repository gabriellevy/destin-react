import {GroupeEvts} from "../../types/Evt.ts";
import {Perso} from "../../types/Perso.ts";
import {Ville} from "../../types/Lieu.ts";
import {age, JAHRDRUNG, KALDEZEIT, SIGMARZEIT, SOMMERZEIT} from "../../types/Date.ts";

export const evts_ubersreik: GroupeEvts = {
    evts: [
        {
            id: "evts_ubersreik1",
            description: (): string =>
                "Le pont d'Ubersreik est vraiment gigantesque. Il paraît que ce sont les nains qui l'ont construit avant même la naissance de papa !",
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
                && perso.mois === KALDEZEIT
                && perso.jourDuMois >= 8 && perso.jourDuMois <= 15,
        },
        {
            id: "evts_ubersreik7",
            description: (): string =>
                "Aujourd'hui c'est le Silburmesse, la fête de l'argenterie, pour mettre en avant cette grande spécialisation de la ville d'Ubersreik.",
            conditions: (perso: Perso): boolean => perso.lieu.ville === Ville.ubersreik
                && perso.mois === SOMMERZEIT
                && perso.jourDuMois === 5,
        },
        {
            id: "evts_ubersreik8",
            description: (): string =>
                "Aujourd'hui c'est le Magnustag, la fête de Magnus le pieux. "
            + "C'est une journée complète de carnaval durant laquelle chaque quartier tente de construire la plus grande effigie de Magnus le pieux.",
            conditions: (perso: Perso): boolean => perso.lieu.ville === Ville.ubersreik
                && perso.mois === SIGMARZEIT
                && perso.jourDuMois === 10,
        },
        {
            id: "evts_ubersreik9",
            description: (): string =>
                "Aujourd'hui c'est le Brynkulti, une foire mettant en avant les parures nains en or faites par les nains de Dawihafen et des montagnes grises. ",
            conditions: (perso: Perso): boolean => perso.lieu.ville === Ville.ubersreik
                && perso.mois === JAHRDRUNG
                && perso.jourDuMois === 1,
        },
    ],
    probaParDefaut: 1,
};