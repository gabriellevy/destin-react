import {GroupeEvts} from "../../types/Evt.ts";
import {Perso} from "../../types/Perso.ts";

export const PROBA_DEFAUT: number = 0.1; // tous les evts de ce fichier qui n'ont pas de proba auront celle ci

export const evts_remplissage: GroupeEvts = {
    evts: [
        {
            id: "event2_au_cas_ou",
            description: (perso: Perso): string => "You encounter a fierce dragon guarding a treasure!",
            effets: (perso: Perso): Perso => ({...perso, dateNaissance: perso.dateNaissance - 5}),
            image: "https://images.unsplash.com/photo-1577493340887-b7bfff550145?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        },
        {
            id: "event5_au_cas_ou",
            description: (perso: Perso): string => "You settle down and start a family in a peaceful village.",
            effets: (perso: Perso): Perso => ({...perso, travail: "Farmer"}),
            image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
        }
    ],
    probaParDefaut: 0.1,
}