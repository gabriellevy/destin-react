import {useState, useEffect, useContext, useCallback, useRef} from 'react';
import {evts_ubersreik} from "../donnees/evts/lieux/reikland/ubersreik/evts_ubersreik.ts";
import {Evt, EvtExecute, filtrerEtPreparerEvts} from "../types/Evt.ts";
import {jourStr, leTempsPasse} from "../types/Date.ts";
import {evts_calendrier} from "../donnees/evts/evts_calendrier.ts";
import {evts_dunkelbild} from "../donnees/evts/lieux/evts_dunkelbild.ts";
import {evts_sylvanie} from "../donnees/evts/lieux/evts_sylvanie.ts";
import {evts_wissenland} from "../donnees/evts/lieux/evts_wissenland.ts";
import {evts_altdorf} from "../donnees/evts/lieux/reikland/evts_altdorf.ts";
import {evts_talabecland} from "../donnees/evts/lieux/evts_talabecland.ts";
import {evts_ostermark} from "../donnees/evts/lieux/evts_ostermark.ts";
import {evts_stirland} from "../donnees/evts/lieux/evts_stirland.ts";
import {evts_crime} from "../donnees/evts/carrieres/evts_crime.ts";
import {evts_pretres} from "../donnees/evts/carrieres/evts_pretres.ts";
import {evts_ubersreik_nains} from "../donnees/evts/lieux/reikland/ubersreik/evts_ubersreik_nains.ts";
import {evts_ingenieur} from "../donnees/evts/carrieres/evts_ingenieur.ts";
import {evts_batelier} from "../donnees/evts/carrieres/evts_bateliers.ts";
import {evts_carnaval} from "../donnees/evts/lieux/middenland/middenheim/evts_carnaval.ts";
import {PersoContexte, PersoContexteType} from "../contexte/ContexteTypes.ts";
import {evts_empireEI} from "../donnees/evts/histoire/ennemi_intérieur/evts_empireEI.ts";
import {evts_middenland} from "../donnees/evts/lieux/middenland/evts_middenland.ts";
import {evts_tout} from "../donnees/evts/evts_tout.ts";
import {evts_serveur} from "../donnees/evts/carrieres/evts_serveur.ts";
import {evts_bourgmestre} from "../donnees/evts/carrieres/evts_bourgmestre.ts";
import {evts_forgeron} from "../donnees/evts/carrieres/evts_forgeron.ts";
import {evts_brasseur} from "../donnees/evts/carrieres/evts_brasseur.ts";
import { Box, Typography, Dialog, IconButton, Grid2 } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {evts_macon} from "../donnees/evts/carrieres/evts_macon.ts";
import {evts_boulanger} from "../donnees/evts/carrieres/evts_boulanger.ts";
import {evts_barbierChirurgien} from "../donnees/evts/carrieres/evts_barbierChirurgien.ts";
import {evts_boucher} from "../donnees/evts/carrieres/evts_boucher.ts";
import {descriptionVille} from "../donnees/geographie/villes.ts";
import {evts_gotheim} from "../donnees/evts/lieux/reikland/ubersreik/evts_gotheim.ts";

let demarre:boolean = false; // le destin a été lancé et est en cours

export default function Histoire() {
    const [evtsExecutes, setEvtsExecutes] = useState<EvtExecute[]>([]); // événements déjà exécutés
    const [plusDEvts, setPlusDEvts] = useState(false); // true si il n'y a plus aucun evt exécutable
    const { perso, setPerso } = useContext(PersoContexte) as PersoContexteType;
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const messagesEndRef = useRef<null | HTMLDivElement>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [perso.date]);

    const handleClickOpen = (image: string): void => {
        setSelectedImage(image);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedImage(null);
    };

    const executerEvt = useCallback((evtExecute: Evt, dateDejaAffichee: boolean) => {
        const texte = evtExecute.description(perso);
        const nouvEvt: EvtExecute = {
            id: evtExecute.id,
            dateStr: dateDejaAffichee ? '' : jourStr(perso.date),
            texteFinal: texte, // l'exécution elle-même
            image: evtExecute.image,
        };

        setEvtsExecutes((prev: EvtExecute[]) => [
            ...prev,
            nouvEvt
        ]);

        setPerso({
            ...perso,
        });
    }, [perso, setPerso]);

    const determinerEvtSuivant = useCallback(() => {
        const dateDejaAffichee: boolean = leTempsPasse(perso, executerEvt);
        setPerso({
            ...perso,
        });

        // filtrer les evts non applicables
        const evtsApplicables: Evt[] = [
            ...filtrerEtPreparerEvts(evts_ubersreik, perso),
            ...filtrerEtPreparerEvts(evts_gotheim, perso),
            ...filtrerEtPreparerEvts(evts_ubersreik_nains, perso),
            ...filtrerEtPreparerEvts(evts_calendrier, perso),
            ...filtrerEtPreparerEvts(evts_dunkelbild, perso),
            ...filtrerEtPreparerEvts(evts_sylvanie, perso),
            ...filtrerEtPreparerEvts(evts_wissenland, perso),
            ...filtrerEtPreparerEvts(evts_altdorf, perso),
            ...filtrerEtPreparerEvts(evts_talabecland, perso),
            ...filtrerEtPreparerEvts(evts_ostermark, perso),
            ...filtrerEtPreparerEvts(evts_stirland, perso),
            ...filtrerEtPreparerEvts(evts_crime, perso),
            ...filtrerEtPreparerEvts(evts_pretres, perso),
            ...filtrerEtPreparerEvts(evts_ingenieur, perso),
            ...filtrerEtPreparerEvts(evts_carnaval, perso),
            ...filtrerEtPreparerEvts(evts_batelier, perso),
            ...filtrerEtPreparerEvts(evts_serveur, perso),
            ...filtrerEtPreparerEvts(evts_macon, perso),
            ...filtrerEtPreparerEvts(evts_bourgmestre, perso),
            ...filtrerEtPreparerEvts(evts_boulanger, perso),
            ...filtrerEtPreparerEvts(evts_boucher, perso),
            ...filtrerEtPreparerEvts(evts_empireEI, perso),
            ...filtrerEtPreparerEvts(evts_middenland, perso),
            ...filtrerEtPreparerEvts(evts_forgeron, perso),
            ...filtrerEtPreparerEvts(evts_brasseur, perso),
            ...filtrerEtPreparerEvts(evts_barbierChirurgien, perso),
            ...filtrerEtPreparerEvts(evts_tout, perso),
        ];

        if (evtsApplicables.length > 0) {
            // sélectionner un des evts en fonction de leur proba
            let completeProba: number = 0;
            evtsApplicables.forEach(evt => {
                if (evt.proba) {
                    completeProba += evt.proba;
                }
            })
            let randomProba: number = Math.random() * completeProba;

            evtsApplicables.every(evt => {
                if (evt.proba) {
                    randomProba -= evt.proba;
                    if (randomProba <= 0) {
                        executerEvt(evt, dateDejaAffichee);
                        return false;
                    }
                }
                return true
            })

            if (demarre) {
                if (perso.mort) {
                    const evt: Evt = {
                        id: "mort",
                        description: () => "Vous êtes mort.",
                    };
                    executerEvt(evt, true);
                } else {
                    setTimeout(determinerEvtSuivant, perso.vitesseExecution);
                }
            }
        } else {
            setPlusDEvts(true);
            demarre= false;
        }
    }, [executerEvt, perso, setPerso]);

    // démarrer la boucle d'événements
    useEffect(() => {
        if (!demarre) {
            demarre = true;
            // événement d'intro :
            const texte = descriptionVille(perso.lieu.ville);
            const nouvEvt: EvtExecute = {
                id: "intro",
                dateStr: jourStr(perso.date),
                texteFinal: texte, // l'exécution elle-même
                //image: evtExecute.image,
            };

            setEvtsExecutes((prev: EvtExecute[]) => [
                ...prev,
                nouvEvt
            ]);

            setTimeout(determinerEvtSuivant, perso.vitesseExecution);
        }
    }, [determinerEvtSuivant, perso.date, perso.lieu.ville, perso.vitesseExecution]);

    return (
        <>
            {evtsExecutes.map((evt: EvtExecute, index: number) => (
                <Grid2 container spacing={2} key={index} sx={{ mb: 2 }} columns={12}>
                    {evt.image && (
                        <Grid2 size={4} order={{ xs: index % 2 === 0 ? 1 : 2, md: index % 2 === 0 ? 1 : 2 }}>
                            <Box
                                component="img"
                                sx={{
                                    width: '100%',
                                    height: 'auto',
                                    cursor: 'pointer',
                                }}
                                alt={`image de l'événement ${evt.id}`}
                                src={evt.image}
                                onClick={() => evt.image && handleClickOpen(evt.image)}
                            />
                        </Grid2>
                    )}
                    <Grid2 size={evt.image ? 8 : 12} order={{ xs: index % 2 === 0 ? 2 : 1, md: index % 2 === 0 ? 2 : 1 }}>
                        {evt.dateStr != '' &&
                            <Typography mb={1} align="left" sx={{ fontSize: 18 }}>{evt.dateStr}</Typography>
                        }
                        <Typography mb={2} align="left">
                            <span dangerouslySetInnerHTML={{ __html: evt.texteFinal}} />
                        </Typography>
                    </Grid2>
                </Grid2>
            ))}
            <div ref={messagesEndRef} />
            {plusDEvts && (
                <Typography mb={2} fontWeight="bold">
                    Plus d'événements à exécuter !!!! Faut en ajouter mon vieux !!
                </Typography>
            )}
            {selectedImage &&
                <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
                    <IconButton
                        edge="end"
                        color="inherit"
                        onClick={handleClose}
                        aria-label="close"
                        sx={{ position: 'absolute', right: 8, top: 8 }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <Box
                        component="img"
                        sx={{ width: '100%', height: 'auto' }}
                        alt="Image agrandie"
                        src={selectedImage}
                    />
                </Dialog>
            }
        </>
    );
}
