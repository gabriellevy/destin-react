import {GroupeEvts} from "../../../types/Evt.ts";
import {Perso} from "../../../types/Perso.ts";
import {Metier, metiersObjs} from "../../../types/metiers/metiers.ts";

export const evts_pretres: GroupeEvts = {
    evts: [
        {
            id: "evts_pretres1",
            description: (perso: Perso): string => {
                let metier: Metier = metiersObjs.initie_pretre;
                if (Math.random() > 0.5) {
                    metier = metiersObjs.novice;
                }
                let dieu = "Sigmar";
                // TODO : faire une fonction spécifique au changement de métier qui inclut le changement de statut et la maj de la compétence
                perso.carriere = {
                    metier: metier,
                    groupeLieu: undefined,
                    duree: 0,
                    competence: 1, // TODO stocker les compétences passées de chaque métier dans un tableau quelque part
                }
                return `Un jour vous êtes frappé par la révélation de ${dieu} et sentez que ${dieu} a un destin pour vous et réponds à vos prières. ` +
                    `À partir de ce jour vous ne rêvez plus que de servir ${dieu} et parvenez à vous faire accepter comme ${metier.nom}. `
            },
            conditions: (perso: Perso): boolean =>
                perso.carriere?.metier != metiersObjs.initie_pretre
            && perso.carriere?.metier != metiersObjs.novice
            && perso.carriere?.metier != metiersObjs.pretre
            && perso.carriere?.metier != metiersObjs.moine,
            proba: 0.1,
        },
    ],
    probaParDefaut: 10,
};