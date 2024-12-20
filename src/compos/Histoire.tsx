import { useState, useEffect } from 'react';
import {Box, Typography, Paper, Grid} from '@mui/material';
import {Perso} from "../types/Perso.ts";
import {evts} from "../donnees/histoire/evts.ts";

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
        let currentCharacter = { ...initialCharacter };
        let timeoutId: NodeJS.Timeout;

        const processNextEvent = () => {
            if (!isMounted) return;

            const applicableEvents = evts.filter(event => event.conditions(currentCharacter));

            if (applicableEvents.length > 0) {
                const event = applicableEvents[Math.floor(Math.random() * applicableEvents.length)];
                setStoryEvents(prev => [...prev, { description: event.description(), image: event.image }]);

                if (event.effets) {
                    currentCharacter = event.effets(currentCharacter);
                }

                // ajouter 1D20 jours à l'âge du personnage // TODO : quelle vitesse ? paramétrable ?
                const daysToAdd = Math.floor(Math.random() * 20) + 1;
                currentCharacter.ageInDays += daysToAdd;
                currentCharacter.age = currentCharacter.ageInDays/400;

                setCharacter(currentCharacter);
                onCharacterUpdate(currentCharacter);

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
            <Typography variant="h4" gutterBottom>Your Character's Story</Typography>
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
                        This is the end of your life.
                    </Typography>
                )}
            </Box>
        </Paper>
    );
}
