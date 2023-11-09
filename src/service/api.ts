import { type Category, type Products } from "@/types/types";

export const api = {
    item: {
        fetch: async (id: string) => {
            const item = await fetch(`https://api.mercadolibre.com/items/${id}`).then(res => res.json() as Promise<{
                id: string;
                title: string;
                thumbnail: string;
                price: number;
                currency_id: string;
            }>)

            const { plain_text } = await fetch(`https://api.mercadolibre.com/items/${id}/description`).then(res => res.json() as Promise<{
                plain_text: string;
            }>)

            return { ...item, description: plain_text }
        },
        search: (query: string) =>
            fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
                .then(response => response.json()) as Promise<{ results: Products[] }>
        ,
        items: async (category?: string) => {

            const url = new URL('https://api.mercadolibre.com/sites/MLA/search?seller_id=179571326');
            if (category) url.searchParams.append("category", category);

            return fetch(url)
                .then((res) => res.json() as Promise<{ results: Products[] }>)
                .then((res) => {
                    return res.results;
                })
        },
        categories: async (products: Products[]) => {
            const ids = Array.from(new Set(products.map((product) => product.category_id)));

            const categories = await Promise.all(
                ids.map((id) =>
                    fetch(`https://api.mercadolibre.com/categories/${id}`)
                        .then((response) => response.json() as Promise<{ path_from_root: { id: string, name: string }[] }>)
                        .then((response) => response.path_from_root)
                )
            );

            const drafs: Record<string, Category> = {};

            categories.forEach((category) => {
                category.forEach((singleCategory, index) => {
                    const { id } = singleCategory;
                    const parent = category[index - 1] as Category || undefined;
                    const parentId = parent?.id ?? null;

                    drafs[id] = { ...singleCategory, parentId }
                })
            })
            return Object.values(drafs);
        }
    }
}
