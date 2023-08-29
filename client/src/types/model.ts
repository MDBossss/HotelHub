export interface OfferModel{
    id:string,
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
    id:string,
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
    destination?: string | undefined,
    date?: {startDate: Date | undefined, endDate: Date | undefined}
}

export interface PersonalInfoInputs{
    fullName: string | null,
    email: string | null,
    phoneNumber: string | null,
    additionalInfo: string | null
}

export interface PaymentInfoInputs{
    cardholderName: string | null;
    cardNumber: string | null;
    expiryDate: string | null;
    cvv: string | null;
}

export interface User{
    id: string,
    emailAddress: string,
    fullName: string,
    phoneNumber: string
}

export interface LoginInputs{
    emailAddress: string,
    password:string,
    rememberMe: boolean,
}

export interface RegisterInputs{
    emailAddress:string,
    password:string,
    fullName:string,
    phoneNumber:string
}