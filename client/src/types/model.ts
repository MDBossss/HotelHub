export interface OfferModel{
    id:number,
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
    lng: number
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