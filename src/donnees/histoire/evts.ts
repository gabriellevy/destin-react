import {Evt} from "../../types/Evt.ts";
import {Perso} from "../../types/Perso.ts";

export const evts: Evt[] = [
    {
        id: "event1",
        description: "You embark on a perilous journey through the mountains.",
        conditions: (perso:Perso):boolean => perso.age < 40 && perso.skills.includes("Survival"),
        effect: (perso: Perso):Perso => ({ ...perso, age: perso.age + 1 })
    },
    {
        id: "event2",
        description: "You encounter a fierce dragon guarding a treasure!",
        conditions: (perso:Perso):boolean => perso.skills.includes("Swordsmanship") && perso.age < 50,
        effect: (perso: Perso):Perso => ({ ...perso, weight: perso.weight - 5 })
    },
    {
        id: "event3",
        description: "You negotiate a peace treaty between warring factions.",
        conditions: (perso:Perso):boolean => perso.skills.includes("Diplomacy"),
        effect: (perso: Perso):Perso => ({ ...perso, age: perso.age + 2 })
    },
    {
        id: "event4",
        description: "You discover an ancient artifact that grants immortality.",
        conditions: (perso:Perso):boolean => perso.age >= 50,
        effect: (perso: Perso):Perso => ({ ...perso, age: 30 })
    },
    {
        id: "event5",
        description: "You settle down and start a family in a peaceful village.",
        conditions: (perso:Perso):boolean => perso.age >= 40 && !perso.skills.includes("Swordsmanship"),
        effect: (perso: Perso):Perso => ({ ...perso, job: "Farmer" })
    }
];