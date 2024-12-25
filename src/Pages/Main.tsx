import { useState } from 'react';
import {ThemeProvider, createTheme, CssBaseline, Container, Typography, Grid, Paper} from '@mui/material';
import GenPersoForm from "../compos/GenPersoForm.tsx";
import {Perso} from "../types/Perso.ts";
import AffichagePerso from "../compos/AffichagePerso.tsx";
import Histoire from "../compos/Histoire.tsx";
import InfosMonde from "../compos/InfosMonde.tsx";

const theme = createTheme();

export default function Main() {
    const [persoSoumis, setPersoSoumis] = useState<Perso | null>(null);
    const [afficherForm, setAfficherForm] = useState(true);

    const soumettrePerso = (data: Perso) => {
        setPersoSoumis(data);
        setAfficherForm(false);
    };

    const chargerPerso = (persoCharge: Perso) => {
        setPersoSoumis(persoCharge);
        setAfficherForm(false);
    };

    const majPerso = (updatedCharacter: Perso) => {
        setPersoSoumis(updatedCharacter);
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
                                <InfosMonde
                                    perso={persoSoumis!}
                                />
                                <AffichagePerso
                                    perso={persoSoumis!}
                                    exporter={() => {
                                        const persoStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(persoSoumis));
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
                            <Histoire
                                key={persoSoumis!.nom}
                                persoInitial={persoSoumis!}
                                onCharacterUpdate={majPerso}
                            />
                        </Grid>
                    </Grid>
                )}
            </Container>
        </ThemeProvider>
    );
}
