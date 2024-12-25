import {Perso} from "./Perso.ts";

export type Evt = {
    id: string;
    description: (perso: Perso) => string; // perso peut être utile pour personaliser le texte
    // description: string; // perso peut être utile pour personaliser le texte
    proba?: number, // élevé signifie, si les conditions sont remplies, que cet événement a beaucoup de chance de se produire. 1 est standard plutôt courant, donc valeur par défaut
    conditions?: (perso: Perso) => boolean; // est-ce que l'événement peut être appliqué au perso ou pas
    effets?: (perso: Perso) => Perso; // modifie le perso
    image?: string;
};

export type EvtExecute = {
    id: string;
    texteFinal: string, // ce qui esta ffiché après que l'événement ait  été exécuté
    image?: string;
}

export type GroupeEvts = {
    evts: Evt[];
    probaParDefaut: number;
}

export function filtrerEtPreparerEvts(groupeEvts:GroupeEvts, perso: Perso):Evt[] {
    const probaParDefaut: number = groupeEvts.probaParDefaut;
    return groupeEvts.evts
        .filter(event => !event.conditions || event.conditions(perso))
        .map(evt => {
            if (!evt.proba) {
                evt.proba = probaParDefaut;
            }
            return evt;
        })
}