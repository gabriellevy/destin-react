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
import {Perso} from "../types/Perso.ts";

export default function GenPersoForm() {
    const { control, handleSubmit, formState: { errors } } = useForm<Perso>();

    const onSubmit: SubmitHandler<Perso> = (data) => {
        console.log(data);
        // Here you would typically send the data to an API or perform some other action
    };

    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
            <Typography variant="h4" gutterBottom>Créer un personnage</Typography>

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

            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                Submit
            </Button>
        </Box>
    );
}

