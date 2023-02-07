
export interface TableHeader {
    name: string;
    key: string;
    sortable: boolean;
}

export interface TableData {
    headers: TableHeader[];
    data: object[];
    limit?: number;
    currentPage?: number;
    totalResults?: number;
    totalPages?: number;
    onPageChange: (page: number) => void;
    onLimitChange: (limit: number) => void;
    sortKey?: string;
    searchKey?: string;
}

export interface filterState {
    key: string | null,
    direction: 'asc' | 'dsc' | null
}
