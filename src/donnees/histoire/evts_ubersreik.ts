import {GroupeEvts} from "../../types/Evt.ts";
import {Perso} from "../../types/Perso.ts";
import {Lieu} from "../../types/Lieu.ts";
import {age} from "../../types/Date.ts";

export const evts_ubersreik: GroupeEvts = {
    evts: [
        {
            id: "evt1",
            description: (Perso): string =>
                "Le pont d'Ubersreik est vraiment gigantesque. Il paraît que ce sont les nains qui l'ont construit avant même la naissance de papa !",
            conditions: (perso: Perso): boolean => perso.lieu == Lieu.ubersreik && age(perso) <= 15,
            image: "https://raw.githubusercontent.com/gabriellevy/destin-react/refs/heads/main/images/Ubersreik_Bridge.jpg"
        },
        {
            id: "evt2",
            description: (perso: Perso): string =>
                "Le pont d'Ubersreik est vraiment une merveille. Il paraît que les étranges symboles qui le parsèment sont des runes naines qui le feront durer éternellement.",
            conditions: (perso: Perso): boolean => perso.lieu == Lieu.ubersreik && age(perso) >= 30,
            image: "https://raw.githubusercontent.com/gabriellevy/destin-react/refs/heads/main/images/Ubersreik_Bridge.jpg"
        },
        {
            id: "evt3",
            description: (perso: Perso): string =>
                "La teufel est pleine de bâteaux de toutes les tailles. Vous espérez pouvoir monter sur l'un d'eux un jour.",
            conditions: (perso: Perso): boolean => perso.lieu == Lieu.ubersreik && age(perso) <= 15,
            image: "https://raw.githubusercontent.com/gabriellevy/destin-react/refs/heads/main/images/Ubersreik_Bridge.jpg"
        },
        {
            id: "evt4",
            description: (perso: Perso): string =>
                "Le commerce est en plein essort à Ubersreik. La Teufel est couverte de navires de commerce de toutes les tailles.",
            conditions: (perso: Perso): boolean => perso.lieu == Lieu.ubersreik && age(perso) >= 30,
            image: "https://raw.githubusercontent.com/gabriellevy/destin-react/refs/heads/main/images/Ubersreik_Bridge.jpg"
        },
        {
            id: "evt5",
            description: (perso: Perso): string =>
                "Maman est furieuse contre vous. Elle a dit que si vous continuez à être aussi méchant, Drachenfels viendra vous prendre la prochaine nuit sans lune.",
            conditions: (perso: Perso): boolean => perso.lieu == Lieu.ubersreik && age(perso) <= 15,
        },
    ],
    probaParDefaut: 1,
};