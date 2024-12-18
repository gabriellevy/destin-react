import {Evt} from "../../types/Evt.ts";
import {Perso} from "../../types/Perso.ts";

export const evts: Evt[] = [
    {
        id: "evt1",
        description: "Le pont d'Ubersreik est vraiment gigantesque. Il paraît que ce sont les nains qui l'ont construit avant même la naissance de papa !",
        conditions: (perso:Perso):boolean => perso.age <= 15,
        image: "https://raw.githubusercontent.com/gabriellevy/destin-react/refs/heads/main/images/Ubersreik_Bridge.jpg"
    },
    {
        id: "evt2",
        description: "Le pont d'Ubersreik est vraiment une merveille. Il paraît que les étranges symboles qui le parsèment sont des runes naines qui le feront durer éternellement.",
        conditions: (perso:Perso):boolean => perso.age >= 30,
        image: "https://raw.githubusercontent.com/gabriellevy/destin-react/refs/heads/main/images/Ubersreik_Bridge.jpg"
    },
    {
        id: "event2_au_cas_ou",
        description: "You encounter a fierce dragon guarding a treasure!",
        conditions: (perso:Perso):boolean => perso.skills.includes("Swordsmanship") && perso.age < 50,
        effect: (perso: Perso):Perso => ({ ...perso, weight: perso.weight - 5 }),
        image: "https://images.unsplash.com/photo-1577493340887-b7bfff550145?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
        id: "event5_au_cas_ou",
        description: "You settle down and start a family in a peaceful village.",
        conditions: (perso:Perso):boolean => perso.age >= 40 && !perso.skills.includes("Swordsmanship"),
        effect: (perso: Perso):Perso => ({ ...perso, job: "Farmer" }),
        image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
    }
];