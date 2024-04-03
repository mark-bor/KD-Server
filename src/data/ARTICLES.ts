  export type ArticleData = { 
    id: string, 
    url: string, 
    title: string,
    date: string,
    readingTime: number,
    image?: string,
    type: string
}

export const ARTICLES: ArticleData[] = []