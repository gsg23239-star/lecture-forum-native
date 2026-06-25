export type PaginationResponseType<T> = {
    pega: number;
    size: number;
    total: number;
    list: T[]
}