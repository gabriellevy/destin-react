import { useState, useEffect } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import {Perso} from "../types/Perso.ts";
import {evts} from "../donnees/histoire/evts.ts";

interface StoryProps {
    initialCharacter: Perso;
}

export default function Histoire({ initialCharacter }: StoryProps) {
    const [character, setCharacter] = useState<Perso>(initialCharacter);
    const [storyEvents, setStoryEvents] = useState<string[]>([]);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        let currentCharacter = { ...initialCharacter };
        let timeoutId: NodeJS.Timeout;

        const processNextEvent = () => {
            const applicableEvents = evts.filter(event => event.conditions(currentCharacter));

            if (applicableEvents.length > 0) {
                const event = applicableEvents[Math.floor(Math.random() * applicableEvents.length)];
                setStoryEvents(prev => [...prev, event.description]);

                if (event.effect) {
                    currentCharacter = event.effect(currentCharacter);
                    setCharacter(currentCharacter);
                }

                timeoutId = setTimeout(processNextEvent, 5000);
            } else {
                setIsComplete(true);
            }
        };

        processNextEvent();

        return () => {
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [initialCharacter]);

    return (
        <Paper elevation={3} sx={{ p: 3, mt: 4, height: '100%', overflowY: 'auto' }}>
            <Typography variant="h4" gutterBottom>Your Character's Story</Typography>
            <Box>
                {storyEvents.map((event, index) => (
                    <Typography key={index}>
                        {event}
                    </Typography>
                ))}
                {isComplete && (
                    <Typography fontWeight="bold">
                        This is the end of your life.
                    </Typography>
                )}
            </Box>
        </Paper>
    );
}

