import ItemsList from "@/components/ItemsList";
import { api } from "@/service/api"

export default async function ProductsPage({ params: { segments } }: { params: { segments?: string[] } }) {
    const category = segments?.[0];
    const products = await api.item.items(category)

    return <ItemsList products={products} />
}