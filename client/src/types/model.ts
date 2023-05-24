export interface OfferModel{
    id:number,
    location:string,
    name: string,
    description: string,
    images: string[],
    price:number,
    rating: number,
    dateStart: Date,
    dateEnd: Date,
    duration: number,
    beds: number,
    people: number,
    size: number
    lat: number,
    lng: number,
    createdAt: string
}

export interface ReviewModel{
    publishedBy: string,
    text: string,
    userImage: string,
    userProfession: string
}

export interface RecentModel{
    title: string,
    description: string,
    image: string,
    readTime: string,
    date: string,

}

export interface Filters{
    location:string | null,
    date:{startDate: Date | undefined, endDate: Date | undefined} | null,
    sleeps:string | null,
}

export interface SearchFilters{
    destination?: string | null,
    date?: {startDate: Date | undefined, endDate: Date | undefined}
}