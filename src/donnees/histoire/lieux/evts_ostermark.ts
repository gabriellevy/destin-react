import {GroupeEvts, ResultatExecution} from "../../../types/Evt.ts";
import {Perso} from "../../../types/Perso.ts";
import {KALDEZEIT} from "../../../types/Date.ts";
import {Province} from "../../geographie/provinces.ts";

export const evts_ostermark: GroupeEvts = {
    evts: [
        {
            id: "evts_ostermark1",
            description: (): ResultatExecution => { return { texte:
                "Aujourd'hui c'est la fête des deux présents en hommage à Ranald et à la futilité des biens matériels. " +
                "Chacun doit offrir deux cadeaux à quelqu'un. " +
                "Le premier insignifiant mais offert en grande pompe, le second véritablement précieux." +
                "Une fois le cadeau offert il est de bonne guerre de le voler pour l'offrir à quelqu'un d'autre car comme dit Ranald : la propriété est une chose très fugace."}},
            conditions: (perso: Perso): boolean => perso.lieu.province === Province.ostermark && perso.mois === KALDEZEIT && perso.jourDuMois === 8,
        },
    ],
    probaParDefaut: 100,
}