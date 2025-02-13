export enum Ville {
    ubersreik = 'Ubersreik',
    gotheim = 'Gotheim',
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
        case Ville.gotheim:
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

export function descriptionVille(ville: Ville) {
    switch (ville) {
        case Ville.altdorf:
            return "Altdorf, la majestueuse capitale de l'Empire, se dresse fièrement au cœur du Vieux Monde de Warhammer. Surnommée la \"Cité des Sigmarites\", elle est le centre politique, religieux et culturel de l'Empire. Ses rues pavées et ses bâtiments imposants témoignent de son riche passé et de son importance stratégique. Le Grand Temple de Sigmar, un édifice monumental, domine la ville et attire des pèlerins de tout l'Empire. Les quartiers d'Altdorf sont variés, allant des somptueuses demeures des nobles aux ruelles étroites et animées des quartiers marchands.\n" +
                "<br>" +
                "La ville est également un carrefour commercial dynamique, où les marchands de toutes les provinces viennent échanger leurs biens. Le fleuve Reik, qui traverse Altdorf, est une artère vitale pour le commerce fluvial, reliant la ville à d'autres grandes cités comme Nuln et Marienburg. Malgré sa splendeur, Altdorf n'est pas épargnée par les intrigues politiques et les complots. Les grandes familles nobles y exercent une influence considérable, et les luttes de pouvoir sont monnaie courante. La présence de l'Empereur et de sa cour ajoute une dimension de prestige et de danger à la vie quotidienne de ses habitants."
        case Ville.gotheim:
            return "Vous vivez à <b>Gotheim</b>.<br>"
        + "Gotheim est une petite communauté agricole vivant essentiellement de la culture du blé et de l'élevage de chèvres. "
        + "Le village sert également de centre local pour les fermiers des environs, qui y apportent leurs récoltes pour les y moudre ou pour les vedre avant qu'elles ne partent pour des marchés plus éloignés.<br> "
        + "Grâce à sa position sur une importante route commerciale, Gotheim a l'air d'une petite ville, offrant divers services que l'on ne trouve normalement pas dans les villages. "
        + "Les fermiers du coin aiment plaisanter en appelant Gotheim 'la ville', même si elle ne compte en réalité qu'une poignée de bâtiments. "
        + "Gotheim dispose d'une forge bien équipée, de son propre cabinet de barbier-chirurgien, d'une grande auberge relais, et d'un temple de Sigmar qui fait aussi office d'école. "
        + "Au nord du village, une digue de pierre brute retient les eaux d'un ruisseau forestier, fournissant au village un réservoir et une source d'énergie pour les moulins.<br> "
        + "Mais ce vernis de raffinement urbain est bien mince."
        + "Les traditions et les modes de vie ruraux prédominent encore. "
        + "Pendant les mois d'hiver, le village est silencieux, comme endormi. "
        + "Un petit cercle de pierres levées à proximité est dédié à l'Ancienne foi. "
        + "À chaque Mitterfruhl, les villageois s'y rassemblent afin de prendre part à des rites de fertilité rustiques qui provoquent suspicien, mépris et embarras chez les viciteurs enus de la ville. "
        + "<br>Gotheim est défendue par une grande palissade en bois et une grande porte entre deux tours de pierre sèche. "
        + "La porte est gardée par des archers qui patrouillent le périmère et guettent les environs du haut des tours.";
        default:
            switch (tailleVille(ville)) {
                case tailleVilles.petit_village: return ville + " est un petit village.";
                case tailleVilles.village: return ville + " est un village.";
                case tailleVilles.petite_ville: return ville + " est une petite ville.";
                case tailleVilles.grande_ville: return ville + " est une grande ville.";
                case tailleVilles.metropole: return ville + " est un ville gigantesque.";
            }
    }
}
