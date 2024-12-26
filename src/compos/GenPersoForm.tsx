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
import {Perso, defaultCharacter, Sexe} from "../types/Perso.ts";
import {getVilles, Option, provinceOptions} from "../types/Lieu.ts";
import {metalStatutOptions} from "../types/Statut.ts";

interface CharacterFormProps {
    onSubmit: SubmitHandler<Perso>;
    onLoadCharacter: (character: Perso) => void;
}

export default function GenPersoForm({ onSubmit, onLoadCharacter }: CharacterFormProps) {
    const { control, watch, handleSubmit, formState: { errors }, reset } = useForm<Perso>({
        defaultValues: defaultCharacter
    });

    const provinceSelectionnee = watch("lieu.province");

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
            <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
                <Typography variant="h4" gutterBottom>Créer un personnage</Typography>
                <Grid2 container spacing={1} sx={{ mb: 2 }} columns={12}>
                    <Grid2 item size={8}>
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
                                />
                            )}
                        />
                    </Grid2>
                    <Grid2 item size={4}>
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

                    {/* lieux (TODO : refactoriser*/}
                    <Grid2 item size={6}>
                        <Controller
                            control={control}
                            name="lieu.province"
                            render={({ field }) => (
                                <FormControl margin="normal" error={!!errors.lieu?.province}>
                                    <InputLabel>Province</InputLabel>
                                    <Select {...field}>
                                        {Object.values(provinceOptions).map((provinceOption: Option) => (
                                            <MenuItem value={provinceOption.value} key={provinceOption.value}>
                                                {provinceOption.label}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            )}
                        />
                    </Grid2>
                    <Grid2 item size={6}>
                        <Controller
                            control={control}
                            name="lieu.ville"
                            render={({ field }) => (
                                <FormControl margin="normal" error={!!errors.lieu?.ville}>
                                    <InputLabel>Ville</InputLabel>
                                    <Select {...field}>
                                        {Object.values(getVilles(provinceSelectionnee)).map((villeOption: Option) => (
                                            <MenuItem value={villeOption.value} key={villeOption.value}>
                                                {villeOption.label}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            )}
                        />
                    </Grid2>
                    {/* statut (TODO : refactoriser*/}
                    <Grid2 item size={6}>
                        <Controller
                            control={control}
                            name="statut.metalStatut"
                            render={({ field }) => (
                                <FormControl margin="normal" error={!!errors.statut?.metalStatut}>
                                    <InputLabel>Statut</InputLabel>
                                    <Select {...field}>
                                        {Object.values(metalStatutOptions).map((metalOption: Option) => (
                                            <MenuItem value={metalOption.value} key={metalOption.value}>
                                                {metalOption.label}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            )}
                        />
                    </Grid2>
                    <Grid2 item size={6}>
                        <Controller
                            name="statut.rang"
                            control={control}
                            rules={{ required: "Rang de statut obligatoire", min: 0, max: 10 }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Rang de statut"
                                    type="number"
                                    fullWidth
                                    margin="normal"
                                    error={!!errors.statut?.rang}
                                    helperText={errors.statut?.message}
                                />
                            )}
                        />
                    </Grid2>

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

                    <Grid2 item size={6}>
                        <Button type="submit" variant="contained" color="primary">
                            Commencer
                        </Button>
                    </Grid2>
                    <Grid2 item size={6}>
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



