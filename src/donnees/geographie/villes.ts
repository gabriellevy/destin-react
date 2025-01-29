export enum Ville {
    ubersreik = 'Ubersreik',
    altdorf = 'Altdorf',
    frederheim = 'Frederheim',
    kutenholz = 'Kutenholz',
    coeurDeLaForet = 'Coeur de la forêt',
    brockel = 'Bröckel',
    mittelweg = 'Mittelweg',
    delberz = 'Delberz',
    sotturn = 'Sotturn',
    malstedt = 'Malstedt',
    grubentreich = 'Grubentreich',
    schoninghagen = 'Schoninghagen',
    dunkelbild = 'Dunkelbild',
    waldenhof = 'Waldenhof',
    heisenberg = 'Heisenberg',
    halstedt = 'Halstedt',
    middenheim = 'Middenheim',
}

export enum tailleVilles {
    petit_village = 1, // moins de 50 habitants
    village = 2, // => 200
    petite_ville = 3, // => 2000
    grande_ville = 4, // => 12000
    metropole = 5,
}

export function tailleVille(ville: Ville): tailleVilles {
    switch (ville) {

        case Ville.coeurDeLaForet:
            return tailleVilles.petit_village;

        case Ville.brockel:
        case Ville.mittelweg:
        case Ville.sotturn:
        case Ville.schoninghagen:
        case Ville.dunkelbild:
        case Ville.waldenhof:
        case Ville.heisenberg:
        case Ville.halstedt:
            return tailleVilles.village;

        case Ville.frederheim:
        case Ville.kutenholz:
        case Ville.delberz:
        case Ville.malstedt:
        case Ville.grubentreich:
            return tailleVilles.petite_ville;

        case Ville.ubersreik:
            return tailleVilles.grande_ville;

        case Ville.altdorf:
        case Ville.middenheim:
            return tailleVilles.metropole;
    }
}
