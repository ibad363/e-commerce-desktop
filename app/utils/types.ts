export interface CardData {
    _id: string;
    imageUrl:string;
    name: string;
    price: number;
    rating: number;
    stockLevel:number;
    isFeaturedProduct?:boolean;
    category?:string;
}

export interface Product {
    _id: string
    name: string
    price: number
    imageUrl: string
    category?: string
}