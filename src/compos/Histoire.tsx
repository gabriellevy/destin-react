import {useState, useEffect, useContext, useCallback} from 'react';
import {Box, Typography, Paper, Grid2} from '@mui/material';
import {evts_ubersreik} from "../donnees/evts/lieux/reikland/ubersreik/evts_ubersreik.ts";
import {Evt, EvtExecute, filtrerEtPreparerEvts} from "../types/Evt.ts";
import {jourStr, leTempsPasse} from "../types/Date.ts";
import {evts_calendrier} from "../donnees/evts/evts_calendrier.ts";
import {evts_dunkelbild} from "../donnees/evts/lieux/evts_dunkelbild.ts";
import {evts_sylvanie} from "../donnees/evts/lieux/evts_sylvanie.ts";
import {evts_wissenland} from "../donnees/evts/lieux/evts_wissenland.ts";
import {evts_altdorf} from "../donnees/evts/lieux/reikland/evts_altdorf.ts";
import {evts_talabecland} from "../donnees/evts/lieux/evts_talabecland.ts";
import {evts_ostermark} from "../donnees/evts/lieux/evts_ostermark.ts";
import {evts_stirland} from "../donnees/evts/lieux/evts_stirland.ts";
import {evts_crime} from "../donnees/evts/carrieres/evts_crime.ts";
import {evts_pretres} from "../donnees/evts/carrieres/evts_pretres.ts";
import {evts_ubersreik_nains} from "../donnees/evts/lieux/reikland/ubersreik/evts_ubersreik_nains.ts";
import {evts_ingenieur} from "../donnees/evts/carrieres/evts_ingenieur.ts";
import {evts_batelier} from "../donnees/evts/carrieres/evts_bateliers.ts";
import {evts_carnaval} from "../donnees/evts/lieux/middenland/middenheim/evts_carnaval.ts";
import {PersoContexte, PersoContexteType} from "../contexte/ContexteTypes.ts";
import {evts_empireEnGeneral} from "../donnees/evts/histoire/ennemi_intérieur/empireEnGeneral.ts";
import {evts_middenland} from "../donnees/evts/lieux/middenland/evts_middenland.ts";

export default function Histoire() {
    const [evtsExecutes, setEvtsExecutes] = useState<EvtExecute[]>([]); // événements déjà exécutés
    const [plusDEvts, setPlusDEvts] = useState(false); // true si il n'y a plus aucun evt exécutable
    const { perso, setPerso } = useContext(PersoContexte) as PersoContexteType;

    const executerEvt = useCallback((evtExecute: Evt) => {
        const texte = evtExecute.description(perso);
        const nouvEvt: EvtExecute = {
            id: evtExecute.id,
            dateStr: jourStr(perso.date),
            texteFinal: texte, // l'exécution elle-même
            image: evtExecute.image,
        };

        setEvtsExecutes((prev: EvtExecute[]) => [
            ...prev,
            nouvEvt
        ]);

        setPerso({
            ...perso,
        });
    }, [perso, setPerso]);

    const determinerEvtSuivant = useCallback(() => {
        leTempsPasse(perso, executerEvt);
        setPerso({
            ...perso,
        });

        // filtrer les evts non applicables
        const evtsApplicables: Evt[] = [
            ...filtrerEtPreparerEvts(evts_ubersreik, perso),
            ...filtrerEtPreparerEvts(evts_ubersreik_nains, perso),
            ...filtrerEtPreparerEvts(evts_calendrier, perso),
            ...filtrerEtPreparerEvts(evts_dunkelbild, perso),
            ...filtrerEtPreparerEvts(evts_sylvanie, perso),
            ...filtrerEtPreparerEvts(evts_wissenland, perso),
            ...filtrerEtPreparerEvts(evts_altdorf, perso),
            ...filtrerEtPreparerEvts(evts_talabecland, perso),
            ...filtrerEtPreparerEvts(evts_ostermark, perso),
            ...filtrerEtPreparerEvts(evts_stirland, perso),
            ...filtrerEtPreparerEvts(evts_crime, perso),
            ...filtrerEtPreparerEvts(evts_pretres, perso),
            ...filtrerEtPreparerEvts(evts_ingenieur, perso),
            ...filtrerEtPreparerEvts(evts_carnaval, perso),
            ...filtrerEtPreparerEvts(evts_batelier, perso),
            ...filtrerEtPreparerEvts(evts_empireEnGeneral, perso),
            ...filtrerEtPreparerEvts(evts_middenland, perso),
        ];

        if (evtsApplicables.length > 0) {
            // sélectionner un des evts en fonction de leur proba
            let completeProba: number = 0;
            evtsApplicables.forEach(evt => {
                if (evt.proba) {
                    completeProba += evt.proba;
                }
            })
            let randomProba: number = Math.random() * completeProba;

            evtsApplicables.every(evt => {
                if (evt.proba) {
                    randomProba -= evt.proba;
                    if (randomProba <= 0) {
                        executerEvt(evt);
                        return false;
                    }
                }
                return true
            })

            setTimeout(determinerEvtSuivant, 5000);
        } else {
            setPlusDEvts(true);
        }
    }, [executerEvt, perso, setPerso]);

    // démarrer la boucle d'événements
    useEffect(() => {
        return ()=> {
            determinerEvtSuivant()
        }
    }, []);

    return (
        <Paper elevation={3} sx={{ p: 3, mt: 4, height: '100%', overflowY: 'auto' }}>
            {evtsExecutes.map((evt: EvtExecute, index: number) => (
                <Grid2 container spacing={2} key={index} sx={{ mb: 2 }} columns={12}>
                    {evt.image && (
                        <Grid2 size={4}>
                            <Box
                                component="img"
                                sx={{
                                    height: 150,
                                    width: 200,
                                    maxHeight: { xs: 233, md: 167 },
                                    maxWidth: { xs: 350, md: 250 },
                                }}
                                alt={`image de l'événement ${evt.id}`}
                                src={evt.image}
                            />
                        </Grid2>
                    )}
                    <Grid2 size={evt.image ? 8 : 12}>
                        <Typography mb={1} align="left" sx={{ fontSize: 18 }}>{evt.dateStr}</Typography>
                        <Typography mb={2} align="left">
                            <span dangerouslySetInnerHTML={{ __html: evt.texteFinal}} />
                        </Typography>
                    </Grid2>
                </Grid2>
            ))}
            {plusDEvts && (
                <Typography mb={2} fontWeight="bold">
                    Vous êtes mort. TODO : faire un truc un peu adapté !!
                </Typography>
            )}
        </Paper>
    );
}
