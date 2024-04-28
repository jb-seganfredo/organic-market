export interface IProduct {
    id: number;
    title: string;
    brand: string;
    description: string;
    expirationDate: Date;
    price: number;
    totalInStock: number;
    totalAddedToCart: number;
    imageUrl: string;
}
