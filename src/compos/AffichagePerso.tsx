import {Box, Typography, List, ListItem, ListItemText, Paper, Button} from '@mui/material';
import {Perso} from "../types/Perso.ts";

interface CharacterDisplayProps {
    character: Perso;
    onExport: () => void;
}

export default function AffichagePerso({ character, onExport }: CharacterDisplayProps) {
    return (
        <Paper elevation={3} sx={{ p: 3, mt: 4, height: '100%' }}>
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
                    <ListItemText
                        primary="Age"
                        secondary={`${character.ageInDays} days (${Math.floor(character.ageInDays / 365)} years)`}
                    />
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
            <Box mt={2}>
                <Button variant="contained" color="primary" onClick={onExport}>
                    Export Character
                </Button>
            </Box>
        </Paper>
    );
}
