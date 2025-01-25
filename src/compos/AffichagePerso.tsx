import {Box, Button, List, ListItem, ListItemText, Stack, Typography} from '@mui/material';
import {age} from "../types/Date.ts";
import {getCaracValue, TypeCarac} from "../types/caracs/Caracs.ts";
import {useContext} from "react";
import {PersoContexte, PersoContexteType} from "../contexte/ContexteTypes.ts";
import {Carriere, metiersEnum} from "../types/metiers/metiers.ts";

interface AffichagePersoProps {
    exporter: () => void;
}

export default function AffichagePerso({ exporter }: Readonly<AffichagePersoProps>) {
    const { perso } = useContext(PersoContexte) as PersoContexteType;

    const affichageCarriere = (carriere: Carriere) => {
        let intituleMetier: string = carriere.metier.intitule(perso, carriere);
        if (carriere.guilde) {
            intituleMetier += ' ('+carriere.guilde+')';
        }

        return (carriere.metier && carriere.actif &&
            <ListItem>
                <ListItemText primary={intituleMetier}
                              secondary={`(${carriere.duree} jours)`}/>
            </ListItem>
        );
    }

    return (
        <Box component="nav" sx={{ flexGrow: 1 }}>
            <List dense>
                <ListItem>
                    <Typography variant="h5" gutterBottom>
                        <ListItemText primary={perso.nom} secondary={`${age(perso)} ans`}/>
                    </Typography>
                </ListItem>
                {
                    Array.from(perso.carrieres).map(([key, value]: [metiersEnum, Carriere]) => {
                        return (key && value &&
                            affichageCarriere(value)
                        );
                    })
                }
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
            <Box mt={2}>
                <Button variant="contained" color="primary" onClick={exporter} size="small">
                    Exporter le perso
                </Button>
            </Box>
        </Box>
    );
}
