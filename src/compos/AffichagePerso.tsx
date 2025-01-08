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
                <ListItem>
                {
                    perso.carriere.map((carriere) => (carriere.metier &&
                                <ListItemText primary={carriere.metier.intitule(perso, carriere)}
                                              secondary={`(${carriere.duree} jours)`}/>
                    )
                )}
                </ListItem>
                <ListItem>
                    <ListItemText primary="Talents" secondary={perso.talents.join(', ')}/>
                </ListItem>
            </List>
            <Stack direction="row" spacing={0}>
                <ListItemText primary="CC" secondary={perso.cc.val}/>
                <ListItemText primary="CT" secondary={perso.ct.val}/>
                <ListItemText primary="F" secondary={perso.f.val}/>
                <ListItemText primary="E" secondary={perso.e.val}/>
                <ListItemText primary="I" secondary={perso.i.val}/>
                <ListItemText primary="Ag" secondary={perso.ag.val}/>
                <ListItemText primary="Dex" secondary={perso.dex.val}/>
                <ListItemText primary="Int" secondary={perso.int.val}/>
                <ListItemText primary="FM" secondary={perso.fm.val}/>
                <ListItemText primary="Soc" secondary={perso.soc.val}/>
            </Stack>
            <Stack direction="row" spacing={0}>
                <ListItemText primary="CC" secondary={perso.cc.nbDeTestsFaits}/>
                <ListItemText primary="CT" secondary={perso.ct.nbDeTestsFaits}/>
                <ListItemText primary="F" secondary={perso.f.nbDeTestsFaits}/>
                <ListItemText primary="E" secondary={perso.e.nbDeTestsFaits}/>
                <ListItemText primary="I" secondary={perso.i.nbDeTestsFaits}/>
                <ListItemText primary="Ag" secondary={perso.ag.nbDeTestsFaits}/>
                <ListItemText primary="Dex" secondary={perso.dex.nbDeTestsFaits}/>
                <ListItemText primary="Int" secondary={perso.int.nbDeTestsFaits}/>
                <ListItemText primary="FM" secondary={perso.fm.nbDeTestsFaits}/>
                <ListItemText primary="Soc" secondary={perso.soc.nbDeTestsFaits}/>
            </Stack>
            <Box mt={2}>
                <Button variant="contained" color="primary" onClick={exporter} size="small">
                    Exporter le perso
                </Button>
            </Box>
        </Box>
    );
}
