import {Dieu} from "../../types/Dieu.ts";

export function dieuAleatoire(): Dieu {
    return dieux[Math.floor(Math.random() * dieux.length)];
}

export const dieux: Dieu[] = [
    {
        id: "Manann"
    },
    {
        id: "Morr"
    },
    {
        id: "Myrmidia"
    },
    {
        id: "Ranald"
    },
    {
        id: "Rhya"
    },
    {
        id: "Shallya"
    },
    {
        id: "Sigmar"
    },
    {
        id: "Taal"
    },
    {
        id: "Ulric"
    },
    {
        id: "Verena"
    },
]