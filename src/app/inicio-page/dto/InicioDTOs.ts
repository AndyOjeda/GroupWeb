export interface ProductResponse {
    id: number,
    image: string,
    title: string,
    description: string,
    colors: string,
    price: string,
    category: {
        id: number,
        name: string,
    }
}