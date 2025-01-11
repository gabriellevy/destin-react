import {Box, Button, List, ListItem, ListItemText, Stack, Typography} from '@mui/material';
import {Perso} from "../types/Perso.ts";
import {age} from "../types/Date.ts";
import {getCaracNbDeTestsFaits, getCaracValue, TypeCarac} from "../types/caracs/Caracs.ts";

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
                <ListItemText primary="CC" secondary={getCaracValue(perso, TypeCarac.cc)}/>
                <ListItemText primary="CT" secondary={getCaracValue(perso, TypeCarac.ct)}/>
                <ListItemText primary="F" secondary={getCaracValue(perso, TypeCarac.f)}/>
                <ListItemText primary="E" secondary={getCaracValue(perso, TypeCarac.e)}/>
                <ListItemText primary="I" secondary={getCaracValue(perso, TypeCarac.i)}/>
                <ListItemText primary="Ag" secondary={getCaracValue(perso, TypeCarac.ag)}/>
                <ListItemText primary="Dex" secondary={getCaracValue(perso, TypeCarac.dex)}/>
                <ListItemText primary="Int" secondary={getCaracValue(perso, TypeCarac.int)}/>
                <ListItemText primary="FM" secondary={getCaracValue(perso, TypeCarac.fm)}/>
                <ListItemText primary="Soc" secondary={getCaracValue(perso, TypeCarac.soc)}/>
            </Stack>
            <Stack direction="row" spacing={0}>
                <ListItemText primary="CC" secondary={getCaracNbDeTestsFaits(perso, TypeCarac.cc)}/>
                <ListItemText primary="CT" secondary={getCaracNbDeTestsFaits(perso, TypeCarac.ct)}/>
                <ListItemText primary="F" secondary={getCaracNbDeTestsFaits(perso, TypeCarac.f)}/>
                <ListItemText primary="E" secondary={getCaracNbDeTestsFaits(perso, TypeCarac.e)}/>
                <ListItemText primary="I" secondary={getCaracNbDeTestsFaits(perso, TypeCarac.i)}/>
                <ListItemText primary="Ag" secondary={getCaracNbDeTestsFaits(perso, TypeCarac.ag)}/>
                <ListItemText primary="Dex" secondary={getCaracNbDeTestsFaits(perso, TypeCarac.dex)}/>
                <ListItemText primary="Int" secondary={getCaracNbDeTestsFaits(perso, TypeCarac.int)}/>
                <ListItemText primary="FM" secondary={getCaracNbDeTestsFaits(perso, TypeCarac.fm)}/>
                <ListItemText primary="Soc" secondary={getCaracNbDeTestsFaits(perso, TypeCarac.soc)}/>
            </Stack>
            <Box mt={2}>
                <Button variant="contained" color="primary" onClick={exporter} size="small">
                    Exporter le perso
                </Button>
            </Box>
        </Box>
    );
}
