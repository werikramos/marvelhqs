export interface Response {
    code: number,
    status?: string,
    copyright: string,
    attributionText: string,
    attributionHTML: string,
    data: {
        offset: number,
        limit: number,
        total: number,
        count: number,
        results: []
    },
    etag: string
}
