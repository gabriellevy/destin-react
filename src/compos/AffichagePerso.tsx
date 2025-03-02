import {Box, Button, List, ListItem, ListItemText, Stack, Typography} from '@mui/material';
import {age, joursToAnnees} from "../types/Date.ts";
import {getCaracValue, TypeCarac} from "../types/caracs/Caracs.ts";
import {useContext} from "react";
import {PersoContexte, PersoContexteType} from "../contexte/ContexteTypes.ts";
import {Carriere, metiersEnum} from "../types/metiers/metiers.ts";
import {JOURS_PAR_AN} from "../donnees/dates/calendrier.ts";

export default function AffichagePerso() {
    const { perso } = useContext(PersoContexte) as PersoContexteType;

    const exporter = () => {
        const persoStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(perso));
        const baliseTelechargement = document.createElement('a');
        baliseTelechargement.setAttribute("href", persoStr);
        baliseTelechargement.setAttribute("download", "character.json");
        document.body.appendChild(baliseTelechargement);
        baliseTelechargement.click();
        baliseTelechargement.remove();
    };

    const affichageCarriere = (carriere: Carriere) => {
        let intituleMetier: string = carriere.metier.intitule(perso, carriere);
        if (carriere.guilde) {
            intituleMetier += ' ('+carriere.guilde+')';
        }
        const dureeCarriere: string = carriere.duree >= JOURS_PAR_AN ?
            `(${joursToAnnees(carriere.duree)} années)` : `(${carriere.duree} jours)`;

        // TODO : afficher niveau de compétence dans ce métier

        return (carriere.metier && carriere.actif &&
            <ListItem>
                <ListItemText primary={intituleMetier} secondary={dureeCarriere}/>
            </ListItem>
        );
    }

    return (
        <Box component="nav" sx={{ flexGrow: 1 }}>
            <List dense>
                <ListItem>
                    <Typography variant="h5" gutterBottom>
                        <ListItemText primary={`${perso.prenom} ${perso.nom}`} secondary={`${age(perso)} ans`}/>
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
            {
                perso.corruption > 0 && (
                    <ListItem>
                        <ListItemText primary="Corruption" secondary={perso.corruption}/>
                    </ListItem>
                )
            }
            <Box mt={2}>
                <Button variant="contained" color="primary" onClick={exporter} size="small">
                    Exporter le perso
                </Button>
            </Box>
        </Box>
    );
}
