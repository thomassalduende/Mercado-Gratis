export interface Products {
    id: string;
    title: string;
    price: number;
    permalink: string;
    category_id: string;
    thumbnail: string;
    currency_id: string;
    seller_address: {
        city: {
            name: string;
        }
    }
}


export interface Category {
    id: string;
    name: string;
    parentId?: string | null;
}