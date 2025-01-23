import {Perso} from "../../types/Perso.ts";
import {anneesToJours} from "../../types/Date.ts";
import {ResultatExecution} from "../../types/Evt.ts";

// ces énévements sont déclenchés à date fise indépendamment des actions du héros
// pour exister ils doivent être ajouté à la carac 'evtsProgrammes' du perso au début
export const evts_programmes: Map<number, (perso: Perso)=>ResultatExecution> = new Map([
    [anneesToJours(2512),
        (): ResultatExecution => {
            return { texte: "TODO : jour de l'invasion d'Ubersreik par les troupes d'Altdorf"};
        },
    ],
]);
