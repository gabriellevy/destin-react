import {Box, Typography, List, ListItem, ListItemText, Button} from '@mui/material';
import {Perso} from "../types/Perso.ts";
import {age} from "../types/Date.ts";

interface AffichagePersoProps {
    perso: Perso;
    exporter: () => void;
}

export default function AffichagePerso({ perso, exporter }: Readonly<AffichagePersoProps>) {
    return (
        <>
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
                    <ListItemText primary="Travail" secondary={perso.carriere.metier.nom} />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Âge"
                        secondary={`${age(perso)} ans`}
                    />
                </ListItem>
            </List>
            <Box mt={2}>
                <Button variant="contained" color="primary" onClick={exporter} size="small">
                    Exporter le perso
                </Button>
            </Box>
        </>
    );
}
