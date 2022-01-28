export interface Actor {
    name: string,
    image: string
}


export interface Movie {
    title: string
    actors: Actor[]
    poster: string
}