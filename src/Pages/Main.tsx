import { useState } from 'react';
import {ThemeProvider, createTheme, CssBaseline, Container, Typography, Grid} from '@mui/material';
import GenPersoForm from "../compos/GenPersoForm.tsx";
import {Perso} from "../types/Perso.ts";
import AffichagePerso from "../compos/AffichagePerso.tsx";
import Histoire from "../compos/Histoire.tsx";

const theme = createTheme();

export default function Main() {
    const [submittedCharacter, setSubmittedCharacter] = useState<Perso | null>(null);
    const [showForm, setShowForm] = useState(true);

    const handleSubmit = (data: Perso) => {
        setSubmittedCharacter(data);
        setShowForm(false);
    };

    const handleLoadCharacter = (loadedCharacter: Perso) => {
        setSubmittedCharacter(loadedCharacter);
        setShowForm(false);
    };

    const handleCharacterUpdate = (updatedCharacter: Perso) => {
        setSubmittedCharacter(updatedCharacter);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="lg">
                <Typography variant="h3" component="h1" gutterBottom sx={{ mt: 4 }}>
                    Character Creator and Story Generator
                </Typography>
                {showForm ? (
                    <GenPersoForm onSubmit={handleSubmit} onLoadCharacter={handleLoadCharacter} />
                ) : (
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={4}>
                            <AffichagePerso
                                character={submittedCharacter!}
                                onExport={() => {
                                    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(submittedCharacter));
                                    const downloadAnchorNode = document.createElement('a');
                                    downloadAnchorNode.setAttribute("href", dataStr);
                                    downloadAnchorNode.setAttribute("download", "character.json");
                                    document.body.appendChild(downloadAnchorNode);
                                    downloadAnchorNode.click();
                                    downloadAnchorNode.remove();
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Histoire
                                key={submittedCharacter!.nom}
                                initialCharacter={submittedCharacter!}
                                onCharacterUpdate={handleCharacterUpdate}
                            />
                        </Grid>
                    </Grid>
                )}
            </Container>
        </ThemeProvider>
    );
}
