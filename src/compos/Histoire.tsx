import { useState, useEffect } from 'react';
import {Box, Typography, Paper, Grid} from '@mui/material';
import {Perso} from "../types/Perso.ts";
import {evts_remplissage} from "../donnees/histoire/evts_remplissage.ts";
import {evts_ubersreik} from "../donnees/histoire/evts_ubersreik.ts";
import {Evt, filtrerEtPreparerEvts} from "../types/Evt.ts";
import {leTempsPasse} from "../types/Date.ts";
import {evts_calendrier} from "../donnees/histoire/evts_calendrier.ts";

interface StoryProps {
    initialCharacter: Perso;
    onCharacterUpdate: (updatedCharacter: Perso) => void;
    key: string; // Add this line
}

interface StoryEvent {
    description: string;
    image?: string;
}

export default function Histoire({ initialCharacter, onCharacterUpdate }: StoryProps) {
    const [character, setCharacter] = useState<Perso>(initialCharacter);
    const [storyEvents, setStoryEvents] = useState<StoryEvent[]>([]);
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
                        if (randomProba <= 0) {
                            evtExecute = evt;
                        }
                    }
                })

                setStoryEvents(prev => [...prev, { description: evtExecute.description(perso), image: evtExecute.image }]);

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
                {storyEvents.map((event, index) => (
                    <Grid container spacing={2} key={index} sx={{ mb: 2 }}>
                        {event.image && (
                            <Grid item xs={4}>
                                <Box
                                    component="img"
                                    sx={{
                                        height: 150,
                                        width: 200,
                                        maxHeight: { xs: 233, md: 167 },
                                        maxWidth: { xs: 350, md: 250 },
                                    }}
                                    alt={`Event ${index + 1}`}
                                    src={event.image}
                                />
                            </Grid>
                        )}
                        <Grid item xs={event.image ? 8 : 12}>
                            <Typography paragraph>{event.description}</Typography>
                        </Grid>
                    </Grid>
                ))}
                {isComplete && (
                    <Typography paragraph fontWeight="bold">
                        Vous êtes mort. TODO : faire un truc un peu dapté !!
                    </Typography>
                )}
            </Box>
        </Paper>
    );
}
