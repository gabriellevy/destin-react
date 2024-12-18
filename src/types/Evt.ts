import {Perso} from "./Perso.ts";

export type Evt = {
    id: string;
    description: string;
    conditions: (character: Perso) => boolean;
    effect?: (character: Perso) => Perso;
    image?: string;
};