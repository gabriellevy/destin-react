import {Box, Typography, List, ListItem, ListItemText, Paper, Button} from '@mui/material';
import {Perso} from "../types/Perso.ts";

interface AffichagePersoProps {
    perso: Perso;
    exporter: () => void;
}

export default function AffichagePerso({ perso, exporter }: Readonly<AffichagePersoProps>) {
    return (
        <Paper elevation={3} sx={{ p: 2, mt: 4, height: '100%', overflowY: 'auto' }}>
            <List dense>
                <ListItem>
                    <Typography variant="h5" gutterBottom>
                        <ListItemText primary="Nom" secondary={perso.nom} />
                    </Typography>
                </ListItem>
                <ListItem>
                    <ListItemText primary="Sexe" secondary={perso.sexe} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Travail" secondary={perso.travail} />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Âge"
                        secondary={`${perso.age} ans`/*TODO : trouver une fonction d'arrondi de perso.age*/}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Lieu" secondary={perso.lieu} />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Compétences"
                        secondary={perso.skills.join(', ')}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Histoire"
                        secondary={perso.backstory}
                    />
                </ListItem>
            </List>
            <Box mt={2}>
            </Box>
            <Box mt={2}>
                <Button variant="contained" color="primary" onClick={exporter} size="small">
                    Exporter le perso
                </Button>
            </Box>
        </Paper>
    );
}
