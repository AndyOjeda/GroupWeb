export interface ProductUser {
    id:          number;
    image:       File|string;
    title:       string;
    description: string;
    colors:      string;
    price:       string;
    category:    Category;
}

export interface Category {
    id:       number;
    name:     string;
    division: Division;
}

export interface Division {
    id:   number;
    name: string;
}

export interface CategoryPlain{
    id: number;
    name: string;
}

export interface RequestProduct{
    image:       File|string;
    title:       string;
    description: string;
    colors:      string;
    price:       string;
    category:    Category;
}

export const EMPTY_PRODUCT: ProductUser = {
    id: 0,
    image: '', // o una imagen predeterminada
    title: '',
    description: '',
    colors: '',
    price: '',
    category: {
        id: 0,
        name: '',
        division: {
            id: 0,
            name: ''
        }
    }
}