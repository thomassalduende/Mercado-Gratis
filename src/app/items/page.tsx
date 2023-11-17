import { api } from "@/service/api";
import Products from "@/components/Productos";

export default async function ItemsPageBusqueda({ searchParams }: { searchParams: { search: string } }) {

    const { results } = await api.item.search(searchParams.search)

    return (
        <section>
            <article className="grid gap-4">
                {results.map((item) => (
                    <Products item={item} key={item.id} />
                ))}
            </article>
        </section>
    );
}