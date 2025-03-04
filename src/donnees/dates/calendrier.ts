export const JOURS_PAR_AN = 400;
export const JOURS_PAR_SEMAINE = 8;

export enum enumMois {
    HEXENSTAG = "Hexenstag",
    NACHEXEN = "Nachexen",
    JAHRDRUNG = "Jahrdrung",
    PFLUGZEIT = "Pflugzeit",
    SIGMARZEIT = "Sigmarzeit",
    SOMMERZEIT = "Sommerzeit",
    MITTERFRUHL = "Mitterfruhl",
    SONNSTILL = "Sonnstill",
    VORGEHEIM = "Vorgeheim",
    GEHEIMISTAG = "Geheimnistag",
    NACHGEHEIM = "Nachgeheim",
    ERNTEZEIT = "Erntezeit",
    MITTHERBST = "Mittherbst",
    BRAUZEIT = "Brauzeit",
    KALDEZEIT = "Kaldezeit",
    ULRICZEIT = "Ulriczeit",
    MONDSTILLE = "Mondstille",
    VORHEXEN = "Vorhexen",
}

export const nbJoursDansMois:Record<enumMois, number> = {
    [enumMois.HEXENSTAG]: 1,
    [enumMois.NACHEXEN]: 32,
    [enumMois.JAHRDRUNG]: 33,
    [enumMois.MITTERFRUHL]: 1,
    [enumMois.PFLUGZEIT]: 33,
    [enumMois.SIGMARZEIT]: 33,
    [enumMois.SOMMERZEIT]: 33,
    [enumMois.SONNSTILL]: 1,
    [enumMois.VORGEHEIM]: 33,
    [enumMois.GEHEIMISTAG]: 1,
    [enumMois.NACHGEHEIM]: 32,
    [enumMois.ERNTEZEIT]: 33,
    [enumMois.MITTHERBST]: 1,
    [enumMois.BRAUZEIT]: 33,
    [enumMois.KALDEZEIT]: 33,
    [enumMois.ULRICZEIT]: 33,
    [enumMois.MONDSTILLE]: 1,
    [enumMois.VORHEXEN]: 33,
};

// numéro du jour du dernier jour de chaque mois (sur l'échelle de jours dans une année)
export const nbJourDuDernierJourDuMois:Record<enumMois, number> = {
    [enumMois.HEXENSTAG]: 1,
    [enumMois.NACHEXEN]: 33,
    [enumMois.JAHRDRUNG]: 66,
    [enumMois.MITTERFRUHL]: 67,
    [enumMois.PFLUGZEIT]: 100,
    [enumMois.SIGMARZEIT]: 133,
    [enumMois.SOMMERZEIT]: 166,
    [enumMois.SONNSTILL]: 167,
    [enumMois.VORGEHEIM]: 200,
    [enumMois.GEHEIMISTAG]: 201,
    [enumMois.NACHGEHEIM]: 233,
    [enumMois.ERNTEZEIT]: 266,
    [enumMois.MITTHERBST]: 267,
    [enumMois.BRAUZEIT]: 300,
    [enumMois.KALDEZEIT]: 333,
    [enumMois.ULRICZEIT]: 366,
    [enumMois.MONDSTILLE]: 367,
    [enumMois.VORHEXEN]: 400,
};