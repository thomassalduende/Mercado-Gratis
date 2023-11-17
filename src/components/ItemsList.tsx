import Productos from "@/components/Productos";
import { type Products } from "@/types/types";

export async function ItemsList({ products }: { products: Products[] }) {

    return (
        <section>
            <article className="grid gap-4">
                {products && products.map((item) => (
                    <Productos key={item.id} item={item} />
                ))}
            </article>
        </section>
    );
}