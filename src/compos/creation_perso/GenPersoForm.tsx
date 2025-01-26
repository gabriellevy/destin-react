import {useForm, Controller} from 'react-hook-form';
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
import SelectionLieu from "./SelectionLieu.tsx";
import SelectionStatut from "./SelectionStatut.tsx";
import SelectionDates from "./SelectionDates.tsx";
import {anneesToJours} from "../../types/Date.ts";
import {d400} from "../../fonctions/des.ts";
import {bourgeoisDAltdorf, persoVide} from "../../donnees/persos/persos_pregens.ts";
import {useContext} from "react";
import {PersoContexte, PersoContexteType} from "../../contexte/ContexteTypes.ts";

interface CharacterFormProps {
    setAfficherForm: (afficher: boolean) => void;
}

export default function GenPersoForm({ setAfficherForm }: CharacterFormProps) {
    const { setPerso } = useContext(PersoContexte) as PersoContexteType;
    const { control, handleSubmit, formState: { errors }, reset } = useForm<Perso>({
        defaultValues: bourgeoisDAltdorf
    });

    const chargerPerso = (persoCharge: Perso) => {
        setPerso({...persoCharge});
        setAfficherForm(false);
    };

    const persoAleatoire = () => {
        const persoAl: Perso = persoVide;
        console.log(JSON.stringify(persoAl, null, 4));
        setPerso(persoAl);
        setAfficherForm(true);
    };

    const soumettrePerso = (data: Perso) => {
        let persoFinal: Perso = {
            ...data,
        }
        // conversions de données après soumission de perso :
        // date en jours est déduite de date en années
        if (data.anneeDeDepart) {
            const dateEnJours: number = anneesToJours(data.anneeDeDepart) + d400()-1;
            persoFinal = {
                ...persoFinal,
                date: dateEnJours,
            }
        }
        // date de naissance est déduite de l'âge
        if (data.age) {
            const dateNaissance: number = persoFinal.date - anneesToJours(data.age) - d400() + 1;
            persoFinal = {
                ...persoFinal,
                dateNaissance: dateNaissance,
            }
        }
        setPerso(persoFinal);
        setAfficherForm(false);
    };

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
                        chargerPerso(loadedCharacter);
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
            <Box component="form" onSubmit={handleSubmit(soumettrePerso)} sx={{ maxWidth: 800, mx: 'auto', mt: 4 }}>
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
                    <SelectionDates />
                    <Grid2 size={4}>
                        <Button type="submit" variant="contained" color="primary">
                            Commencer
                        </Button>
                    </Grid2>
                    <Grid2 size={4}>
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
                    <Grid2 size={4}>
                        <Button
                            component="label"
                            variant="contained"
                            color="secondary"
                            onClick={persoAleatoire}
                        >
                            Personnage aléatoire
                        </Button>
                    </Grid2>
                </Grid2>
            </Box>
        </Paper>
    );
}
