import {Lieu} from "./Lieu.ts";

export type Perso = {
    nom: string;
    sexe: Sexe;
    travail: string;
    ageInDays: number;
    age: number;
    skills: string[];
    backstory: string;
    lieu: Lieu,
    [key: string]: any; // Allow for dynamic properties
};

export enum Sexe {
    male = 'Mâle',
    femelle = 'Femelle',
}

export const defaultCharacter: Perso = {
    nom: "Wilhelm Hinderten",
    sexe: Sexe.male,
    travail: "aucun",
    ageInDays: 4000,
    age: 10,
    skills: ["Swordsmanship", "Survival", "Diplomacy"],
    lieu: Lieu.ubersreik,
    backstory: "A brave adventurer seeking fortune and glory."
};