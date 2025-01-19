import {createContext, useState} from "react";
import {Perso} from "../types/Perso.ts";
import {jeuneHommeEnVoyageAUbersreik} from "../donnees/persos/persos.ts";

export type PersoContexteType = {
    perso: Perso;
    setPerso: (perso: Perso) => void;
};

export const PersoContexte = createContext<PersoContexteType | null>(null);

const PersoContexteProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [perso, setPerso] = useState<Perso>(jeuneHommeEnVoyageAUbersreik);

    return (
        <PersoContexte.Provider value={{ perso, setPerso }}>
            {children}
        </PersoContexte.Provider>
    );
};

export default PersoContexteProvider;