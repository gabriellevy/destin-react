import {Perso} from "../types/Perso.ts";
import {List, ListItem, ListItemText} from "@mui/material";

interface InfosMondeProps {
    perso: Perso;
}

export default function InfosMonde({ perso }: Readonly<InfosMondeProps>) {
    return (
        <List dense>
            <ListItem>
                <ListItemText primary="Lieu" secondary={perso.lieu.ville} />
            </ListItem>
        </List>
    );
}