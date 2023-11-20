export interface Paginator {
    currentPage: number,    // Page courante
    totalItems: number,     // Nombre Total d'enregistrement
    itemsPerPage: number,   // Nombre d'enregistrement par page = limit
    offset: number          // numero de l'enregistrement
}
