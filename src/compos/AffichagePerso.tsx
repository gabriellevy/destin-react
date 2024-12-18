import {Box, Typography, List, ListItem, ListItemText, Paper, Button} from '@mui/material';
import {Perso} from "../types/Perso.ts";

interface CharacterDisplayProps {
    character: Perso;
    onExport: () => void;
}

export default function AffichagePerso({ character, onExport }: CharacterDisplayProps) {
    return (
        <Paper elevation={3} sx={{ p: 2, mt: 4, height: '100%', overflowY: 'auto' }}>
            <Typography variant="h5" gutterBottom>Character Details</Typography>
            <List dense>
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
                        secondary={`${character.age} ans`}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Height" secondary={`${character.height} cm`} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Weight" secondary={`${character.weight} kg`} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Lieu" secondary={character.lieu} />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Skills"
                        secondary={character.skills.join(', ')}
                    />
                </ListItem>
            </List>
            <Box mt={2}>
                <Typography variant="subtitle1">Backstory</Typography>
                <Typography variant="body2">{character.backstory}</Typography>
            </Box>
            <Box mt={2}>
                <Button variant="contained" color="primary" onClick={onExport} size="small">
                    Export Character
                </Button>
            </Box>
        </Paper>
    );
}
