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
                        <ListItemText primary={perso.nom} secondary={`${age(perso)} ans`}/>
                    </Typography>
                </ListItem>
                {perso.carriere &&
                    <ListItem>
                        <ListItemText primary={perso.carriere.metier.nom} secondary={perso.carriere.groupeLieu??""} />
                    </ListItem>
                }
            </List>
            <Box mt={2}>
                <Button variant="contained" color="primary" onClick={exporter} size="small">
                    Exporter le perso
                </Button>
            </Box>
        </>
    );
}
