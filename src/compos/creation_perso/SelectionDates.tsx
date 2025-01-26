import {Controller, useForm} from "react-hook-form";
import {Perso} from "../../types/Perso.ts";
import {bourgeoisDAltdorf} from "../../donnees/persos/persos.ts";
import {Grid2, TextField} from "@mui/material";

export default function SelectionDates() {
    const { control } = useForm<Perso>({
        defaultValues: bourgeoisDAltdorf
    });

    return (
        <>
            <Grid2 size={6}>
                <Controller
                    name="date"
                    control={control}
                    rules={{ required: "Date de départ", min: 0 }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Date (en jours depuis l'an 0 du calendrier impérial)"
                            type="number"
                            fullWidth
                            margin="normal"
                        />
                    )}
                />
            </Grid2>
            <Grid2 size={6}>
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
                        />
                    )}
                />
            </Grid2>
        </>
    );
}