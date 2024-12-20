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
import {Lieu} from "../types/Lieu.ts";

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
                name="ageInDays"
                control={control}
                rules={{ required: "Age is required", min: 0 }}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Age (in days)"
                        type="number"
                        fullWidth
                        margin="normal"
                        error={!!errors.ageInDays}
                        helperText={errors.ageInDays?.message}
                    />
                )}
            />

            <Controller
                name="lieu"
                control={control}
                rules={{ required: "Un lieu de départ est requis" }}
                render={({ field }) => (
                    <FormControl fullWidth margin="normal" error={!!errors.lieu}>
                        <InputLabel>Lieu</InputLabel>
                        <Select {...field} label="Lieu">
                            <MenuItem value={Lieu.ubersreik}>Ubersreik</MenuItem>
                            <MenuItem value={Lieu.altdorf}>Altdorf</MenuItem>
                        </Select>
                        <FormHelperText>{errors.lieu?.message}</FormHelperText>
                    </FormControl>
                )}
            />

            <Controller
                name="skills"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Skills (comma-separated)"
                        fullWidth
                        margin="normal"
                        error={!!errors.skills}
                        helperText={errors.skills?.message || "Enter skills separated by commas"}
                    />
                )}
            />

            <Controller
                name="backstory"
                control={control}
                rules={{ required: "Backstory is required" }}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Backstory"
                        fullWidth
                        margin="normal"
                        multiline
                        rows={4}
                        error={!!errors.backstory}
                        helperText={errors.backstory?.message}
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



