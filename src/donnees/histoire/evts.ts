import {Evt} from "../../types/Evt.ts";
import {Perso} from "../../types/Perso.ts";
import {Lieu} from "../../types/Lieu.ts";

export const evts: Evt[] = [
    {
        id: "evt1",
        description: (perso: Perso): string =>
            "Le pont d'Ubersreik est vraiment gigantesque. Il paraît que ce sont les nains qui l'ont construit avant même la naissance de papa !",
        conditions: (perso:Perso):boolean => perso.lieu == Lieu.ubersreik && perso.age <= 15,
        image: "https://raw.githubusercontent.com/gabriellevy/destin-react/refs/heads/main/images/Ubersreik_Bridge.jpg"
    },
    {
        id: "evt2",
        description: (perso: Perso): string =>
            "Le pont d'Ubersreik est vraiment une merveille. Il paraît que les étranges symboles qui le parsèment sont des runes naines qui le feront durer éternellement.",
        conditions: (perso:Perso):boolean => perso.lieu == Lieu.ubersreik && perso.age >= 30,
        image: "https://raw.githubusercontent.com/gabriellevy/destin-react/refs/heads/main/images/Ubersreik_Bridge.jpg"
    },
    {
        id: "evt3",
        description: (perso: Perso): string =>
            "La teufel est pleine de bâteaux de toutes les tailles. Vous espérez pouvoir monter sur l'un d'eux un jour.",
        conditions: (perso:Perso):boolean => perso.lieu == Lieu.ubersreik && perso.age <= 15,
        image: "https://raw.githubusercontent.com/gabriellevy/destin-react/refs/heads/main/images/Ubersreik_Bridge.jpg"
    },
    {
        id: "evt4",
        description: (perso: Perso): string =>
            "Le commerce est en plein essort à Ubersreik. La Teufel est couverte de navires de commerce de toutes les tailles.",
        conditions: (perso:Perso):boolean => perso.lieu == Lieu.ubersreik && perso.age >= 30,
        image: "https://raw.githubusercontent.com/gabriellevy/destin-react/refs/heads/main/images/Ubersreik_Bridge.jpg"
    },
    {
        id: "evt5",
        description: (perso: Perso): string =>
            "Maman est furieuse contre vous. Elle a dit que si vous continuez à être aussi méchant, Drachenfels viendra vous prendre la prochaine nuit sans lune.",
        conditions: (perso:Perso):boolean => perso.lieu == Lieu.ubersreik && perso.age <= 15,
    },
    {
        id: "event2_au_cas_ou",
        description: (perso: Perso): string => "You encounter a fierce dragon guarding a treasure!",
        conditions: (perso:Perso):boolean => perso.skills.includes("Swordsmanship") && perso.age < 50,
        effets: (perso: Perso):Perso => ({ ...perso, weight: perso.weight - 5 }),
        image: "https://images.unsplash.com/photo-1577493340887-b7bfff550145?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
        id: "event5_au_cas_ou",
        description: (perso: Perso): string => "You settle down and start a family in a peaceful village.",
        conditions: (perso:Perso):boolean => perso.age >= 40 && !perso.skills.includes("Swordsmanship"),
        effets: (perso: Perso):Perso => ({ ...perso, travail: "Farmer" }),
        image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
    }
];