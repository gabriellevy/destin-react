/*
Les talents sont des genres de compétences booléennes rares
Il n'y a pas de raison d'ajouter tous les talents de warhammer, seulement des talents ayant de la personnalité
et qui déclenchent des événements
-> certaines compétences peu intéressante sont transformées en talents comme la natation
 */

import {Perso} from "../types/Perso.ts";

export enum talents {
    beni = "Béni", // béni par un dieu (celui de perso.dieu), permet d'accomplir des miracles
    natation = "Natation",
}

export function aLeTalent(perso: Perso, talent: talents): boolean {
    return perso.talents.find((tal: talents) => tal === talent) !== undefined;
}
