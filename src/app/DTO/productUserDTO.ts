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