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
import {Perso, defaultCharacter} from "../types/Perso.ts";

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
            <Typography variant="h4" gutterBottom>Create a Character</Typography>

            <Controller
                name="name"
                control={control}
                rules={{ required: "Name is required" }}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Name"
                        fullWidth
                        margin="normal"
                        error={!!errors.name}
                        helperText={errors.name?.message}
                    />
                )}
            />

            <Controller
                name="sex"
                control={control}
                rules={{ required: "Sex is required" }}
                render={({ field }) => (
                    <FormControl fullWidth margin="normal" error={!!errors.sex}>
                        <InputLabel>Sex</InputLabel>
                        <Select {...field} label="Sex">
                            <MenuItem value="male">Male</MenuItem>
                            <MenuItem value="female">Female</MenuItem>
                            <MenuItem value="other">Other</MenuItem>
                        </Select>
                        <FormHelperText>{errors.sex?.message}</FormHelperText>
                    </FormControl>
                )}
            />

            <Controller
                name="job"
                control={control}
                rules={{ required: "Job is required" }}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Job"
                        fullWidth
                        margin="normal"
                        error={!!errors.job}
                        helperText={errors.job?.message}
                    />
                )}
            />

            <Controller
                name="age"
                control={control}
                rules={{ required: "Age is required", min: 0 }}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Age"
                        type="number"
                        fullWidth
                        margin="normal"
                        error={!!errors.age}
                        helperText={errors.age?.message}
                    />
                )}
            />

            <Controller
                name="height"
                control={control}
                rules={{ required: "Height is required", min: 0 }}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Height (cm)"
                        type="number"
                        fullWidth
                        margin="normal"
                        error={!!errors.height}
                        helperText={errors.height?.message}
                    />
                )}
            />

            <Controller
                name="weight"
                control={control}
                rules={{ required: "Weight is required", min: 0 }}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Weight (kg)"
                        type="number"
                        fullWidth
                        margin="normal"
                        error={!!errors.weight}
                        helperText={errors.weight?.message}
                    />
                )}
            />

            <Controller
                name="nationality"
                control={control}
                rules={{ required: "Nationality is required" }}
                render={({ field }) => (
                    <TextField
                        {...field}
                        label="Nationality"
                        fullWidth
                        margin="normal"
                        error={!!errors.nationality}
                        helperText={errors.nationality?.message}
                    />
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


