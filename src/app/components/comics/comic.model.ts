export interface Comic {

    id: number,
    digitalId: number,
    title: string,
    issueNumber: number,
    variantDescription: string,
    description: string,
    modified: Date,
    isbn: string,
    upc: string,
    diamondCode: string,
    ean: string,
    issn: string,
    format: string,
    pageCount: number,
    textObjects: [
        {
            type: string,
            language: string,
            text: string
        }
    ],
    resourceURI: string,
    urls: [
        {
            type: string,
            url: string
        }
    ],
    series: {
        resourceURI: string,
        name: string
    },
    variants: [
        {
            resourceURI: string,
            name: string
        }
    ],
    collections: [
        {
            resourceURI: string,
            name: string
        }
    ],
    collectedIssues: [
        {
            resourceURI: string,
            name: string
        }
    ],
    dates: [
        {
            type: string,
            date: Date
        }
    ],
    prices: [
        {
            type: string,
            price: number
        }
    ],
    thumbnail: {
        path: string,
        extension: string
    },
    images: [
        {
            path: string,
            extension: string
        }
    ],
    creators: {
        available: number,
        returned: number,
        collectionURI: string,
        items: [
            {
                resourceURI: string,
                name: string,
                role: string
            }
        ]
    },
    characters: {
        available: number,
        returned: number,
        collectionURI: string,
        items: [
            {
                resourceURI: string,
                name: string,
                role: string
            }
        ]
    },
    stories: {
        available: number,
        returned: number,
        collectionURI: string,
        items: [
            {
                resourceURI: string,
                name: string,
                type: string
            }
        ]
    },
    events: {
        available: number,
        returned: number,
        collectionURI: string,
        items: [
            {
                resourceURI: string,
                name: string
            }
        ]
    }

}
