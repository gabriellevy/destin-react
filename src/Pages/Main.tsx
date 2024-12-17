import { useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Container, Typography } from '@mui/material';
import GenPersoForm from "../compos/GenPersoForm.tsx";
import {Perso} from "../types/Perso.ts";
import AffichagePerso from "../compos/AffichagePerso.tsx";
import Histoire from "../compos/Histoire.tsx";

const theme = createTheme();

export default function Main() {
    const [submittedCharacter, setSubmittedCharacter] = useState<Perso | null>(null);

    const handleSubmit = (data: Perso) => {
        setSubmittedCharacter(data);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="md">
                <Typography variant="h3" component="h1" gutterBottom sx={{ mt: 4 }}>
                    Générateur de personnage puis de leur destin
                </Typography>
                <GenPersoForm onSubmit={handleSubmit} />
                {submittedCharacter && (
                    <>
                        <AffichagePerso character={submittedCharacter} />
                        <Histoire initialCharacter={submittedCharacter} />
                    </>
                )}
            </Container>
        </ThemeProvider>
    );
}

