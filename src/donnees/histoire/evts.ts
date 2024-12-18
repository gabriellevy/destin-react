import {Evt} from "../../types/Evt.ts";
import {Perso} from "../../types/Perso.ts";

export const evts: Evt[] = [
    {
        id: "event1",
        description: "You embark on a perilous journey through the mountains.",
        conditions: (perso:Perso):boolean => perso.age < 40 && perso.skills.includes("Survival"),
        effect: (perso: Perso):Perso => ({ ...perso, age: perso.age + 1 }),
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
        id: "event2",
        description: "You encounter a fierce dragon guarding a treasure!",
        conditions: (perso:Perso):boolean => perso.skills.includes("Swordsmanship") && perso.age < 50,
        effect: (perso: Perso):Perso => ({ ...perso, weight: perso.weight - 5 }),
        image: "https://images.unsplash.com/photo-1577493340887-b7bfff550145?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
        id: "event3",
        description: "You negotiate a peace treaty between warring factions.",
        conditions: (perso:Perso):boolean => perso.skills.includes("Diplomacy"),
        effect: (perso: Perso):Perso => ({ ...perso, age: perso.age + 2 }),
        image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
        id: "event4",
        description: "You discover an ancient artifact that grants immortality.",
        conditions: (perso:Perso):boolean => perso.age >= 50,
        effect: (perso: Perso):Perso => ({ ...perso, age: 30 }),
        image: "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2033&q=80"
    },
    {
        id: "event5",
        description: "You settle down and start a family in a peaceful village.",
        conditions: (perso:Perso):boolean => perso.age >= 40 && !perso.skills.includes("Swordsmanship"),
        effect: (perso: Perso):Perso => ({ ...perso, job: "Farmer" }),
        image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
    }
];