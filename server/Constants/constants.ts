export interface actors {
    id: string,
    name: string,
    image: string,
    asCharacter: string
}
export interface results {
    id: string,
    title: string,
    originalTitle: string,
    fullTitle: string,
    type: string,
    year: string,
    image: string,
    releaseDate: string,
    runtimeMins: string,
    runtimeStr: string,
    plot: string,
    plotLocal: string,
    plotLocalIsRtl: boolean,
    awards: string,
    directors: string,
    directorList: any[],
    writers: string,
    writerList: any[],
    stars: string,
    starList: any[],
    actorList: actors[],
    fullCast: any,
    genres: string,
    genreList: any[],
    companies: string,
    companyList: any[],
    countries: string,
    countryList: any[],
    languages: string,
    languageList: any[],
    contentRating: string,
    imDbRating: string,
    imDbRatingVotes: string,
    metacriticRating: string,
    ratings: any,
    wikipedia: any,
    posters: any,
    images: any,
    trailer: any,
    boxOffice: any,
    tagline: string,
    keywords: string,
    keywordList: string[],
    similars: any[],
    tvSeriesInfo: any[],
    tvEpisodeInfo: any[],
    errorMessage?: string
}