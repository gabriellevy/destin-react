import {Lieu} from "./Lieu.ts";

export type Perso = {
    nom: string;
    sexe: 'male' | 'female' | 'other';
    travail: string;
    ageInDays: number;
    age: number;
    height: number; // in cm
    weight: number; // in kg
    nationality: string;
    skills: string[];
    backstory: string;
    lieu: Lieu,
    [key: string]: any; // Allow for dynamic properties
};

export const defaultCharacter: Perso = {
    nom: "Wilhelm Hinderten",
    sexe: "male",
    travail: "aucun",
    ageInDays: 4000,
    age: 10,
    height: 180,
    weight: 80,
    nationality: "American",
    skills: ["Swordsmanship", "Survival", "Diplomacy"],
    lieu: Lieu.ubersreik,
    backstory: "A brave adventurer seeking fortune and glory."
};