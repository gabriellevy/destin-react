import {useContext, useState} from 'react';
import {ThemeProvider, createTheme, CssBaseline, Container, Grid, Paper} from '@mui/material';
import GenPersoForm from "../compos/GenPersoForm.tsx";
import AffichagePerso from "../compos/AffichagePerso.tsx";
import Histoire from "../compos/Histoire.tsx";
import InfosMonde from "../compos/InfosMonde.tsx";
import {PersoContexte, PersoContexteType} from "../contexte/PersoContexte.tsx";
import {Perso} from "../types/Perso.ts";

const theme = createTheme();

export default function Main() {
    const [afficherForm, setAfficherForm] = useState(true);
    const { perso, setPerso } = useContext(PersoContexte) as PersoContexteType;

    const soumettrePerso = (data: Perso) => {
        setPerso(data);
        setAfficherForm(false);
    };

    const chargerPerso = (persoCharge: Perso) => {
        setPerso(persoCharge);
        setAfficherForm(false);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="lg">
                {afficherForm ? (
                    <GenPersoForm onSubmit={soumettrePerso} onLoadCharacter={chargerPerso} />
                ) : (
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={4}>
                            <Paper elevation={3} sx={{ p: 3, mt: 4, height: '100%', overflowY: 'auto' }}>
                                <InfosMonde/>
                                <AffichagePerso
                                    exporter={() => {
                                        const persoStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(perso));
                                        const baliseTelechargement = document.createElement('a');
                                        baliseTelechargement.setAttribute("href", persoStr);
                                        baliseTelechargement.setAttribute("download", "character.json");
                                        document.body.appendChild(baliseTelechargement);
                                        baliseTelechargement.click();
                                        baliseTelechargement.remove();
                                    }}
                                />
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Histoire />
                        </Grid>
                    </Grid>
                )}
            </Container>
        </ThemeProvider>
    );
}
