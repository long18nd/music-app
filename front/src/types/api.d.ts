export interface ApiResponse<T> {
    err: boolean;
    data: T;
    msg: string;
}

export interface PaginatedData<T> {
    data: T[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
}
