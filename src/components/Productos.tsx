import { api } from "@/service/api"
import { type Products } from "@/types/types"
import Link from "next/link"

export default function Productos({ item }: { item: Products }) {
    return (
        <>
            <hr />
            <Link href={`/items/${item.id}`} key={item.id} className="flex gap-4 ">
                <img src={item.thumbnail} alt={item.title} />
                <div>
                    <p className="text-xl font-bold">{Number(item.price).toLocaleString("es-AR", { style: 'currency', currency: item.currency_id })}</p>
                    <p>{item.title}</p>
                </div>
                <span className="ml-auto text-sm opacity-50 capitalize">{item.seller_address.city.name}</span>
            </Link>
        </>
    )
}