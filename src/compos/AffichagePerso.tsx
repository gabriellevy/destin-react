import { Box, Typography, List, ListItem, ListItemText, Paper } from '@mui/material';
import {Perso} from "../types/Perso.ts";

interface CharacterDisplayProps {
    character: Perso;
}

export default function AffichagePerso({ character }: CharacterDisplayProps) {
    return (
        <Paper elevation={3} sx={{ p: 3, mt: 4, maxWidth: 400, mx: 'auto' }}>
            <Typography variant="h4" gutterBottom>Character Details</Typography>
            <List>
                <ListItem>
                    <ListItemText primary="Name" secondary={character.name} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Sex" secondary={character.sex} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Job" secondary={character.job} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Age" secondary={character.age} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Height" secondary={`${character.height} cm`} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Weight" secondary={`${character.weight} kg`} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Nationality" secondary={character.nationality} />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Skills"
                        secondary={character.skills.join(', ')}
                    />
                </ListItem>
            </List>
            <Box mt={2}>
                <Typography variant="h6">Backstory</Typography>
                <Typography variant="body1">{character.backstory}</Typography>
            </Box>
        </Paper>
    );
}

