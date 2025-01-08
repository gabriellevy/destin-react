import { useState, useEffect } from 'react';
import {Box, Typography, Paper, Grid2} from '@mui/material';
import {Perso} from "../types/Perso.ts";
import {evts_ubersreik} from "../donnees/histoire/lieux/reikland/ubersreik/evts_ubersreik.ts";
import {Evt, EvtExecute, filtrerEtPreparerEvts} from "../types/Evt.ts";
import {jourStr, leTempsPasse} from "../types/Date.ts";
import {evts_calendrier} from "../donnees/histoire/evts_calendrier.ts";
import {evts_dunkelbild} from "../donnees/histoire/lieux/evts_dunkelbild.ts";
import {evts_sylvanie} from "../donnees/histoire/lieux/evts_sylvanie.ts";
import {evts_wissenland} from "../donnees/histoire/lieux/evts_wissenland.ts";
import {evts_altdorf} from "../donnees/histoire/lieux/reikland/evts_altdorf.ts";
import {evts_talabecland} from "../donnees/histoire/lieux/evts_talabecland.ts";
import {evts_ostermark} from "../donnees/histoire/lieux/evts_ostermark.ts";
import {evts_stirland} from "../donnees/histoire/lieux/evts_stirland.ts";
import {evts_crime} from "../donnees/histoire/carrieres/evts_crime.ts";
import {evts_pretres} from "../donnees/histoire/carrieres/evts_pretres.ts";
import {evts_ubersreik_nains} from "../donnees/histoire/lieux/reikland/ubersreik/evts_ubersreik_nains.ts";
import {evts_ingenieur} from "../donnees/histoire/carrieres/evts_ingenieur.ts";

interface StoryProps {
    persoInitial: Perso;
    onCharacterUpdate: (updatedCharacter: Perso) => void;
    key: string; // Add this line
}

export default function Histoire({ persoInitial, onCharacterUpdate }: StoryProps) {
    const [storyEvents, setStoryEvents] = useState<EvtExecute[]>([]);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        let isMounted = true;
        let perso = { ...persoInitial };
        let timeoutId: number;

        function executerEvt(evtExecute: Evt, perso: Perso) {
            const nouvEvt: EvtExecute = {
                id: evtExecute.id,
                dateStr: jourStr(perso.date),
                texteFinal: evtExecute.description(perso),
                image: evtExecute.image,
            };

            setStoryEvents((prev: EvtExecute[]) => [
                ...prev,
                nouvEvt
            ]);

            if (evtExecute.effets) {
                perso = evtExecute.effets(perso);
            }

            onCharacterUpdate(perso);
        }

        const processNextEvent = () => {
            if (!isMounted) return;

            perso = leTempsPasse(perso);

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
                            executerEvt(evt, perso);
                            return false;
                        }
                    }
                    return true
                })

                timeoutId = setTimeout(processNextEvent, 5000);
            } else {
                setIsComplete(true);
            }
        };

        processNextEvent();

        return () => {
            isMounted = false;
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, []);

    return (
        <Paper elevation={3} sx={{ p: 3, mt: 4, height: '100%', overflowY: 'auto' }}>
            {storyEvents.map((evt: EvtExecute, index: number) => (
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
                        <Typography mb={1} align="left">{evt.dateStr}</Typography>
                        <Typography mb={2} align="left">{evt.texteFinal}</Typography>
                    </Grid2>
                </Grid2>
            ))}
            {isComplete && (
                <Typography mb={2} fontWeight="bold">
                    Vous êtes mort. TODO : faire un truc un peu adapté !!
                </Typography>
            )}
        </Paper>
    );
}
