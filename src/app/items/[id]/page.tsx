import { api } from "@/service/api";


export default async function ItemPage({ params: { id } }: { params: { id: string } }) {

    const item = await api.item.fetch(id);

    return (
        <section className="grid gap-2" key={item.id}>
            <img src={item.thumbnail} alt={item.title} />
            <p className="text-xl font-bold">
                {Number(item.price).toLocaleString("es-AR", { style: 'currency', currency: item.currency_id })}
            </p>
            <p>{item.title}</p>
            <hr />
            <p>{item.description}</p>
        </section>
    )
}