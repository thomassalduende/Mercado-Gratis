import React from 'react';
import Productos from '@/components/Productos';
import { Products } from '@/types/types';

const ItemsList = ({ products }: { products: Products[] }) => {
    return (
        <section>
            <div className="grid gap-4">
                {products && products.map((item) => (
                    <Productos key={item.id} item={item} />
                ))}
            </div>
        </section>
    );
};

export default ItemsList;
