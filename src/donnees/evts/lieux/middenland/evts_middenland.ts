import {GroupeEvts} from "../../../../types/Evt.ts";
import {Perso} from "../../../../types/Perso.ts";
import {Province} from "../../../geographie/provinces.ts";

export const evts_middenland: GroupeEvts = {
    evts: [
        {
            id: "evts_middenland1",
            description: (): string => "TODO :!!!",
            conditions: (perso: Perso): boolean => perso.lieu.province === Province.middenland,
        },
    ],
    probaParDefaut: 2,
}
