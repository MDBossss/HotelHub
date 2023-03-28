export interface SpecialOfferModel{
    name: string,
    description: string,
    image: string,
    price:number,
    rating: number,
    dateStart: string,
    dateEnd: string,
    duration: number,
    beds: number,
    people: number,
    size: number
}


export interface ReviewModel{
    publishedBy: string,
    text: string,
    userImage: string,
    userProfession: string
}