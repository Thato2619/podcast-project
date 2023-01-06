export type preview = {
    id:string
    title: string
    seasons: string
    images: string
    genres:string[]
    updated:string
}

export type episode = {
    episode: number
    description: string
    title: string
    file: string
}

export type season = {
    season: number
    title: string
    images: string
    episode:episode[]
}

export type show = {
    id:string
    title: string
    seasons: string[]
    images: string
    genres:string[]
    updated:string
}

export type phase = "loading"| "lists"| "single"|"error"
export type sorting = 'a-z'| 'z-a'|'oldest-latest'|'latest-oldest'

export type state = {
    phase: phase
    previews: preview[]
    single: null | show
    sorting: sorting
    search: string
}

export type subscription = (state: state) => void



