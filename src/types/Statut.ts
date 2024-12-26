

export type Statut = {
    numero: number,
    metalStatut: MetalStatut,
}

export enum MetalStatut {
    bronze = 'Bronze',
    argent = 'Argent',
    or = 'Or',
}

/**
 * return true si statut 1 est supérieur à statut 2
 */
export function compare(statut1: Statut, statut2: Statut): boolean {
    if (statut1.metalStatut === statut2.metalStatut) return statut1.numero > statut2.numero;
    if (statut1.metalStatut === MetalStatut.or &&
        (statut2.metalStatut === MetalStatut.bronze || statut2.metalStatut === MetalStatut.argent)) return true;
    return statut1.metalStatut === MetalStatut.argent &&
        statut2.metalStatut === MetalStatut.bronze;

}