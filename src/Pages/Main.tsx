import {useState} from 'react';
import {CssBaseline, Paper, Grid2} from '@mui/material';
import GenPersoForm from "../compos/creation_perso/GenPersoForm";
import AffichagePerso from "../compos/AffichagePerso";
import Histoire from "../compos/Histoire";
import InfosMonde from "../compos/InfosMonde";

export default function Main() {
    const [afficherForm, setAfficherForm] = useState(true);

    return (
        <>
            <CssBaseline />
            {afficherForm ? (
                <GenPersoForm
                    setAfficherForm={setAfficherForm}
                />
            ) : (
                <Grid2 container spacing={3} sx={{ height: '100vh' }}>
                    <Grid2 size={4}>
                        <Paper elevation={3} sx={{ p: 3, mt: 4, height: 'calc(100vh - 64px)', overflowY: 'hidden', position: 'sticky', top: 0 }}>
                            <InfosMonde/>
                            <AffichagePerso />
                        </Paper>
                    </Grid2>
                    <Grid2 size={8}>
                        <Paper elevation={3} sx={{ p: 3, mt: 4, height: 'calc(100vh - 64px)', overflowY: 'auto' }}>
                            <Histoire />
                        </Paper>
                    </Grid2>
                </Grid2>
            )}
        </>
    );
}
