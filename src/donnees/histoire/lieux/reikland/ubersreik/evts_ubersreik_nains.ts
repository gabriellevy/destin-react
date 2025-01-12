import {GroupeEvts} from "../../../../../types/Evt.ts";
import {Perso} from "../../../../../types/Perso.ts";
import {Ville} from "../../../../../types/lieux/Lieu.ts";
import {ResidenceDeVoyage} from "../../../../../types/lieux/ResidenceDeVoyage.ts";
import {compareStatut, MetalStatut} from "../../../../../types/Statut.ts";
import {Race} from "../../../../races/Races.ts";
import {metiersEnum, metiersObjs} from "../../../../../types/metiers/metiers.ts";
import {aUneCarriere} from "../../../../../types/metiers/metiersUtils.ts";

export const evts_ubersreik_nains: GroupeEvts = {
    evts: [

        {
            id: "evts_ubersreik_nains_1",
            description: (perso: Perso): string => {
                perso.lieu.residenceVoyage = ResidenceDeVoyage.hache_et_le_marteau;
                return "De passage à ubersreik et sans logement vous décidez de vous installer à 'La hache et le marteau'. " +
                    "Elle est située en plein Dawihafen, la quartier nain. ";
            },
            conditions: (perso: Perso): boolean => perso.lieu.ville === Ville.ubersreik
                && compareStatut(perso.statut, {metalStatut: MetalStatut.argent, rang: 1})
                && perso.race === Race.nain
                && perso.lieu.enVoyage
                && perso.lieu.residenceVoyage === null,
            proba: 100,
        },
        {
            id: "evts_ubersreik_nains_2",
            description: (): string => {
                return "Aujourd'hui vous vous offrez un petit plaisir: vous allez diner et boire un bon coup à 'La hache et le marteau'. " +
                    "La cuisine y est bonne, les portions généreuses, et surtout la bière y est aux standards nains. ";
            },
            conditions: (perso: Perso): boolean => perso.lieu.ville === Ville.ubersreik
                && compareStatut(perso.statut, {metalStatut: MetalStatut.argent, rang: 1})
                && perso.race === Race.nain,
        },
        {
            id: "evts_ubersreik_nains_3",
            description: (perso: Perso): string => {
                // TODO : faire une fonction spécifique au changement de métier qui inclut le changement de statut et la maj de la compétence
                perso.carrieres.set(metiersEnum.serveur, {
                    metier: metiersObjs[metiersEnum.serveur],
                    groupeLieu: "La hache et le marteau",
                    duree: 0,
                    competence: 1, // TODO stocker les compétences passées de chaque métier dans un tableau quelque part
                    actif: true,
                    nbDeTestsFaits : 0,
                });
                perso.lieu.residenceVoyage = null;
                perso.lieu.maison = ResidenceDeVoyage.auberge_de_la_maison_du_pont;
                return "Vous avez réussi à vous trouver un travail de serveur à 'La hache et le marteau'. " +
                    "C'est une auberge de qualité dans laquelle vous devriez être assez payé pour subvenir à vos besoins. " +
                    "Vous avez surtout la chance de pouvoir loger dans une chambre de l'auberge pour les domestiques. "
            },
            conditions: (perso: Perso): boolean => perso.lieu.ville === Ville.ubersreik
                && !aUneCarriere(perso)
                && perso.race === Race.nain,
        },
    ],
    probaParDefaut: 5, // ^plus que le standard à cause de la condition plus spécifique nain (et les nains préfèrent les evts nains)
};
