import {useForm, Controller, SubmitHandler} from 'react-hook-form';
import {
    TextField,
    Button,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    FormHelperText,
    Box,
    Typography, Paper, Grid2
} from '@mui/material';
import {Perso, Sexe} from "../../types/Perso.ts";
import {bourgeoisDAltdorf} from "../../donnees/persos/persos.ts";
import SelectionLieu from "./SelectionLieu.tsx";
import SelectionStatut from "./SelectionStatut.tsx";

interface CharacterFormProps {
    onSubmit: SubmitHandler<Perso>;
    onLoadCharacter: (perso: Perso) => void;
}

export default function GenPersoForm({ onSubmit, onLoadCharacter }: CharacterFormProps) {
    const { control, handleSubmit, formState: { errors }, reset } = useForm<Perso>({
        defaultValues: bourgeoisDAltdorf
    });

    const handleLoadCharacter = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const content = e.target?.result;
                if (typeof content === 'string') {
                    try {
                        const loadedCharacter = JSON.parse(content) as Perso;
                        reset(loadedCharacter);
                        onLoadCharacter(loadedCharacter);
                    } catch (error) {
                        console.error('Error parsing JSON:', error);
                    }
                }
            };
            reader.readAsText(file);
        }
    };

    return (
        <Paper elevation={3} sx={{ p: 3, mt: 4, height: '100%', overflowY: 'auto' }}>
            <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ maxWidth: 800, mx: 'auto', mt: 4 }}>
                <Typography variant="h4" gutterBottom>Créer un personnage</Typography>
                <Grid2 container spacing={1} sx={{ mb: 2 }} columns={12}>
                    <Grid2 size={8}>
                        <Controller
                            name="nom"
                            control={control}
                            rules={{ required: "Vous devez avoir un nom" }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Nom"
                                    margin="normal"
                                    error={!!errors.nom}
                                    helperText={errors.nom?.message}
                                    fullWidth
                                />
                            )}
                        />
                    </Grid2>
                    <Grid2 size={4}>
                        <Controller
                            name="sexe"
                            control={control}
                            render={({ field }) => (
                                <FormControl fullWidth margin="normal" error={!!errors.sexe}>
                                    <InputLabel>Sexe</InputLabel>
                                    <Select {...field} label="Sexe">
                                        <MenuItem value={Sexe.male}>{Sexe.male}</MenuItem>
                                        <MenuItem value={Sexe.femelle}>{Sexe.femelle}</MenuItem>
                                    </Select>
                                    <FormHelperText>{errors.sexe?.message}</FormHelperText>
                                </FormControl>
                            )}
                        />
                    </Grid2>
                    <SelectionLieu />
                    <SelectionStatut />
                    <Controller
                        name="dateNaissance"
                        control={control}
                        rules={{ required: "Date de naissance obligatoire", min: 0 }}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Date (en jours depuis l'an 0 du calendrier impérial)"
                                type="number"
                                fullWidth
                                margin="normal"
                                error={!!errors.dateNaissance}
                                helperText={errors.dateNaissance?.message}
                            />
                        )}
                    />

                    <Grid2 size={6}>
                        <Button type="submit" variant="contained" color="primary">
                            Commencer
                        </Button>
                    </Grid2>
                    <Grid2 size={6}>
                        <Button
                            component="label"
                            variant="contained"
                            color="secondary"
                        >
                            Charger un personnage
                            <input
                                type="file"
                                hidden
                                accept=".json"
                                onChange={handleLoadCharacter}
                            />
                        </Button>
                    </Grid2>
                </Grid2>
            </Box>
        </Paper>
    );
}



