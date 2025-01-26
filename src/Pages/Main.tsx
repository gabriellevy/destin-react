import {useState} from 'react';
import {CssBaseline, Container, Grid, Paper} from '@mui/material';
import GenPersoForm from "../compos/creation_perso/GenPersoForm.tsx";
import AffichagePerso from "../compos/AffichagePerso.tsx";
import Histoire from "../compos/Histoire.tsx";
import InfosMonde from "../compos/InfosMonde.tsx";

export default function Main() {
    const [afficherForm, setAfficherForm] = useState(true);

    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg">
                {afficherForm ? (
                    <GenPersoForm
                        setAfficherForm={setAfficherForm}
                    />
                ) : (
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={4}>
                            <Paper elevation={3} sx={{ p: 3, mt: 4, height: '100%', overflowY: 'auto' }}>
                                <InfosMonde/>
                                <AffichagePerso />
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Histoire />
                        </Grid>
                    </Grid>
                )}
            </Container>
        </>
    );
}
