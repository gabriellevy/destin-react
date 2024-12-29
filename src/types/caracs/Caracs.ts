import {d10} from "../../fonctions/des.ts";


export function caracDeDepartAleatoire(): number {
    return 20 + d10() + d10();
}