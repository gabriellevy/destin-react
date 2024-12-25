import { useState, useEffect } from 'react';
import {Box, Typography, Paper, Grid} from '@mui/material';
import {Perso} from "../types/Perso.ts";
import {evts_remplissage} from "../donnees/histoire/evts_remplissage.ts";
import {evts_ubersreik} from "../donnees/histoire/evts_ubersreik.ts";
import {Evt, EvtExecute, filtrerEtPreparerEvts} from "../types/Evt.ts";
import {leTempsPasse} from "../types/Date.ts";
import {evts_calendrier} from "../donnees/histoire/evts_calendrier.ts";
import {evts_dunkelbild} from "../donnees/histoire/evts_dunkelbild.ts";

interface StoryProps {
    initialCharacter: Perso;
    onCharacterUpdate: (updatedCharacter: Perso) => void;
    key: string; // Add this line
}

export default function Histoire({ initialCharacter, onCharacterUpdate }: StoryProps) {
    const [character, setCharacter] = useState<Perso>(initialCharacter);
    const [storyEvents, setStoryEvents] = useState<EvtExecute[]>([]);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        let isMounted = true;
        let perso = { ...initialCharacter };
        let timeoutId: NodeJS.Timeout;

        const processNextEvent = () => {
            if (!isMounted) return;

            perso = leTempsPasse(perso);

            // filtrer les evts non applicables
            let evtsApplicables: Evt[] = [
                ...filtrerEtPreparerEvts(evts_remplissage, perso),
                ...filtrerEtPreparerEvts(evts_ubersreik, perso),
                ...filtrerEtPreparerEvts(evts_calendrier, perso),
                ...filtrerEtPreparerEvts(evts_dunkelbild, perso),
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
                let evtExecute:Evt;
                evtsApplicables.forEach(evt => {
                    if (evt.proba) {
                        randomProba -= evt.proba;
                        if (!evtExecute && randomProba <= 0) {
                            evtExecute = evt;
                        }
                    }
                })
                const nouvEvt: EvtExecute = {
                    id: evtExecute.id,
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

                setCharacter(perso);
                onCharacterUpdate(perso);

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
            <Box>
                {storyEvents.map((evt: EvtExecute, index: number) => (
                    <Grid container spacing={2} key={index} sx={{ mb: 2 }}>
                        {evt.image && (
                            <Grid item xs={4}>
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
                            </Grid>
                        )}
                        <Grid item xs={evt.image ? 8 : 12}>
                            <Typography paragraph>{evt.texteFinal}</Typography>
                        </Grid>
                    </Grid>
                ))}
                {isComplete && (
                    <Typography paragraph fontWeight="bold">
                        Vous êtes mort. TODO : faire un truc un peu adapté !!
                    </Typography>
                )}
            </Box>
        </Paper>
    );
}
