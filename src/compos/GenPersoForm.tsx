import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import {
    TextField,
    Button,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    FormHelperText,
    Box,
    Typography
} from '@mui/material';
import {Perso, defaultCharacter, Sexe} from "../types/Perso.ts";

interface CharacterFormProps {
    onSubmit: SubmitHandler<Perso>;
    onLoadCharacter: (character: Perso) => void;
}

export default function GenPersoForm({ onSubmit, onLoadCharacter }: CharacterFormProps) {
    const { control, handleSubmit, formState: { errors }, reset } = useForm<Perso>({
        defaultValues: defaultCharacter
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
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
            <Typography variant="h4" gutterBottom>Créer un personnage</Typography>

            <Controller
                name="nom"
                control={control}
                rules={{ required: "Vous devez avoir un nom" }}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Nom"
                        fullWidth
                        margin="normal"
                        error={!!errors.nom}
                        helperText={errors.nom?.message}
                    />
                )}
            />

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

            <Controller
                name="travail"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Travail"
                        fullWidth
                        margin="normal"
                        error={!!errors.travail}
                        helperText={errors.travail?.message}
                    />
                )}
            />

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

            <Box mt={2} display="flex" justifyContent="space-between">
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
                <Button
                    component="label"
                    variant="contained"
                    color="secondary"
                >
                    Load Character
                    <input
                        type="file"
                        hidden
                        accept=".json"
                        onChange={handleLoadCharacter}
                    />
                </Button>
            </Box>
        </Box>
    );
}



