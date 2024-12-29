import {Box, Typography, List, ListItem, ListItemText, Button, Stack} from '@mui/material';
import {Perso} from "../types/Perso.ts";
import {age} from "../types/Date.ts";

interface AffichagePersoProps {
    perso: Perso;
    exporter: () => void;
}

export default function AffichagePerso({ perso, exporter }: Readonly<AffichagePersoProps>) {
    return (
        <Box component="nav" aria-label="My site" sx={{ flexGrow: 1 }}>
            <List dense>
                <ListItem>
                    <Typography variant="h5" gutterBottom>
                        <ListItemText primary={perso.nom} secondary={`${age(perso)} ans`}/>
                    </Typography>
                </ListItem>
                {perso.carriere &&
                    <ListItem>
                        <ListItemText primary={perso.carriere.metier.intitule(perso)} secondary={`(${perso.carriere.duree} jours)`} />
                    </ListItem>
                }
                <ListItem>
                    <ListItemText primary="Talents" secondary={perso.talents.join(', ')} />
                </ListItem>
            </List>
            <Stack direction="row" spacing={0}>
                <ListItemText primary="CC" secondary={perso.cc}/>
                <ListItemText primary="CT" secondary={perso.ct}/>
                <ListItemText primary="F" secondary={perso.f}/>
                <ListItemText primary="E" secondary={perso.e}/>
                <ListItemText primary="I" secondary={perso.i}/>
                <ListItemText primary="Ag" secondary={perso.ag}/>
                <ListItemText primary="Dex" secondary={perso.dex}/>
                <ListItemText primary="Int" secondary={perso.int}/>
                <ListItemText primary="FM" secondary={perso.fm}/>
                <ListItemText primary="Soc" secondary={perso.soc}/>
            </Stack>
            <Box mt={2}>
                <Button variant="contained" color="primary" onClick={exporter} size="small">
                    Exporter le perso
                </Button>
            </Box>
        </Box>
    );
}
