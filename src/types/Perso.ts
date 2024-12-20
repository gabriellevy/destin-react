import {Lieu} from "./Lieu.ts";
import {anneesToJours} from "./Date.ts";

export type Perso = {
    nom: string;
    sexe: Sexe;
    travail: string;
    dateNaissance: number;
    date: number, // en nombre de jours depuis l'an 0 du calendrier impérial
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
    dateNaissance: anneesToJours(2492), // entre 2482 et 2502 comme ça le perso a entre 10 et 30 ans quand l'ennemi intérieur démarre
    date: anneesToJours(2502), // pas laisser trop de liberté au joueur là dessus
    skills: ["Swordsmanship", "Survival", "Diplomacy"],
    lieu: Lieu.ubersreik,
    backstory: "A brave adventurer seeking fortune and glory."
};