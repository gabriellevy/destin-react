import {GroupeEvts} from "../../../../../types/Evt.ts";
import {Perso} from "../../../../../types/Perso.ts";
import {Province} from "../../../../geographie/provinces.ts";
import {compareStatut, MetalStatut} from "../../../../../types/Statut.ts";
import {Ville} from "../../../../geographie/villes.ts";
import {vaA} from "../../../../../types/lieux/Lieu.ts";

const arriveeMiddenheim: (perso: Perso)=>string = (perso: Perso) => {
    const texte: string =  "Vous arrivez enfin à <b>Middenheim</b>. "
    +"Quatre viaducs gigantesques en pierre s'enroulent autour de la base du rocher, en pente douce. "
    +"Ils font plus d'un km de long et il va vous falloir longtemps pour atteindre le haut, surtout qu'une longue file d'attente s'y trouve et que croiser les véhicules arrivant en sens inverse est laborieux car personne ne veut s'approcher des rebords. "
    +"Arrivé au bout on vous fait payer <i>une couronne par jambe</i> pour entrer dans la ville.";
    // TODO arrivée, installation, description, taxes??
    vaA(perso, Ville.middenheim);
    return texte;
}

export const evts_carnaval: GroupeEvts = {
    evts: [
        {
            id: "aller_au_carnaval",
            description: (perso: Perso): string => {
                let texte: string = "C'est bientôt le carnaval de Middenheim et vous avez une grande envie d'aller vous y changer les idées. ";
                if (compareStatut(perso.statut, {metalStatut: MetalStatut.bronze, rang: 5})) {
                    texte += "C'est décidé : vous prendrez la diligence depuis Altdorf et de là direction Middenheim. ";
                    perso.lieu.enVoyage = true;
                    perso.lieu.residenceVoyage= null;
                    texte += "Dans la diligence les voyageurs sont entousiastes, surtout un marchand nommé Alex Eisen. <br/> "
                        + "<i>Je ne raterais cela pour rien au monde ! "
                        + "Ces gens du nord sont une vraie bande de coincés à tous les autres moments de l'année mais faites leur boire quelques verres pendant le carnaval et c'est parti ! Oh que oui ! "
                        + "Si vous voyez ce que je veux dire ? "
                        + "</i>";

                    // ajout des evts du voyage jour par jour
                    const etapeSchoninghagen: (perso: Perso)=>string = (perso: Perso) => {
                        const texte: string =  "La diligence s'arrête à <b>Schoninghagen</b>. ";
                        vaA(perso, Ville.schoninghagen);
                        perso.evtsProgrammes.set(perso.date + 1, arriveeMiddenheim);
                        return texte;
                    }
                    const etapeGrubentreich: (perso: Perso)=>string = (perso: Perso) => {
                        const texte: string =  "La diligence s'arrête à <b>Grubentreich</b>, une petite ville marchande réputée pour son succulent fromage de chèvre. ";
                        vaA(perso, Ville.grubentreich);
                        perso.evtsProgrammes.set(perso.date + 1, etapeSchoninghagen);
                        return texte;
                    }
                    const etapeMalstedt: (perso: Perso)=>string = (perso: Perso) => {
                        const texte: string =  "La diligence sort enfin de la grande forêt oppressante de la Drakwald et s'arrête à <b>Malstedt</b>, au milieu des Collines Ondoyantes. "
                        +"Au loin vous pouvez appercevoir l'imposant Fauschlag ainsi que la ville fortifiée de Middenheim perchée à son sommet. ";
                        vaA(perso, Ville.malstedt);
                        perso.evtsProgrammes.set(perso.date + 1, etapeGrubentreich);
                        return texte;
                    }
                    const etapeSotturn: (perso: Perso)=>string = (perso: Perso) => {
                        const texte: string =  "Vous vous arrêtez à <b>Sotturn</b>, une petite ville marchande. ";
                        vaA(perso, Ville.sotturn);
                        perso.evtsProgrammes.set(perso.date + 1, etapeMalstedt);
                        return texte;
                    }
                    const etapeDelberz: (perso: Perso)=>string = (perso: Perso) => {
                        const texte: string =  "Vous vous arrêtez à <b>l'auberge du grand chêne</b> de <b>Delberz</b>. ";
                        vaA(perso, Ville.delberz);
                        perso.evtsProgrammes.set(perso.date + 1, etapeSotturn);
                        return texte;
                    }
                    const etapeMittelweg: (perso: Perso)=>string = (perso: Perso) => {
                        const texte: string =  "L'auberge <b>La maison à Mi-Chemin</b> est la plus ancienne auberge de la route qui relie Altdork à Middenheim. "
                        + "Son large mur d'enceinte porte encore les marques des attaques subies par les force du chaos deux siècles plus tôt. "
                        + "La maison à Mi-chemin porte avec fierté son histoire et son emplacement à Mi chemin des deux grandes villes. "
                        + "Une grande fête de la mi-trajet est organisée avec un repas raffiné (quoique coûteux) , de la boisson à volonté et des souvenirs, y compris les fameuses choppes de demi-pintes. "
                        + "Ces contenants semblent normal d'un côté mais sont plats de l'autre, comme s'ils étaient coupés en deux verticalement. "
                        + "Traditionnellement ils sont servis à table par paire avec des pinces en bois qui maintiennent les deux côtés ensemble. ";
                        vaA(perso, Ville.mittelweg);
                        perso.evtsProgrammes.set(perso.date + 1, etapeDelberz);
                        return texte;
                    }
                    const etapeBrockel: (perso: Perso)=>string = (perso: Perso) => {
                        const texte: string =  "Vous vous arrêtez dans l'auberge <b>Les armes de Bröckel</b>. ";
                        vaA(perso, Ville.brockel);
                        perso.evtsProgrammes.set(perso.date + 1, etapeMittelweg);
                        return texte;
                    }
                    const etapeCoeurDeLaForet: (perso: Perso)=>string = (perso: Perso) => {
                        const texte: string =  "Vous vous arrêtez dans l'auberge relais fortifiée appelée <b>Le coeur de la forêt</b>. "
                            + "Ses murs garnis de pointes font 6 mètres de haut. De quoi décourager les homme-bêtes de la Drakwald";
                        vaA(perso, Ville.coeurDeLaForet);
                        perso.evtsProgrammes.set(perso.date + 1, etapeBrockel);
                        return texte;
                    }
                    const etapeKutenholz: (perso: Perso)=>string = (perso: Perso) => {

                        const texte: string =  "La diligence s'arrête à <b>Kutenholz</b>, le premier arrêt dans le middenland. "
                            + "Un grand sanctuaire dédié à Ulric se trouve à proximité, sans doute est-ce pour cela que l'auberge s'appelle 'la tête du loup'";
                        vaA(perso, Ville.kutenholz);
                        perso.evtsProgrammes.set(perso.date + 1, etapeCoeurDeLaForet);
                        return texte;
                    }
                    const etapeFrederheim: (perso: Perso)=>string = (perso: Perso) => {
                        const texte: string =  "La diligence s'arrête à <b>Frederheim</b>, connue principalement pour le grand hospice de Shallya. ";
                        vaA(perso, Ville.frederheim);
                        perso.evtsProgrammes.set(perso.date + 1, etapeKutenholz);
                        return texte;
                    }
                    perso.evtsProgrammes.set(perso.date + 1, etapeFrederheim);
                } else {
                    texte += "Malheureusement vous n'avez pas les moyens de vous payer le voyage."
                }
                return texte;
            },
            conditions: (perso: Perso): boolean => perso.lieu.province === Province.reikland && !perso.lieu.enVoyage,
            image: "https://raw.githubusercontent.com/gabriellevy/destin-react/refs/heads/main/images/Alex_Eisen.webp",
            proba: 10,
        },
    ],
    probaParDefaut: 5,
};