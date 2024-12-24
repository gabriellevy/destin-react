import {Perso} from "../types/Perso.ts";
import {List, ListItem, ListItemText} from "@mui/material";
import {jourStr} from "../types/Date.ts";

interface InfosMondeProps {
    perso: Perso;
}

export default function InfosMonde({ perso }: Readonly<InfosMondeProps>) {
    return (
        <List dense>
            <ListItem>
                <ListItemText primary="Lieu" secondary={perso.lieu.ville} />
            </ListItem>
            <ListItem>
                <ListItemText
                    primary="Date"
                    secondary={`${jourStr(perso.date)}`}
                />
            </ListItem>
        </List>
    );
}