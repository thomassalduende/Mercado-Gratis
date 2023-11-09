'use client'
import { useState } from "react";
import { type Category } from "@/types/types";
import ListOfCategory from "./ListOfCategorys";
import Link from "next/link";

export default function CategoryItem({ category, categories }: { category: Category, categories: Category[] }) {

    const [expandex, setExpandex] = useState(false);
    const handleClick = () => setExpandex((value) => !value);

    const hasSubCategories = categories.filter(({ parentId }) => category.id == parentId).length

    return (
        <>
            <hr />
            <li key={category.id} className="ml-4 mt-3">
                {hasSubCategories ? (
                    <button className="mr-1" type="button" onClick={handleClick}>
                        {expandex ? "-" : "+"}
                    </button>
                ) : null}
                <Link href={`/${category.id}`}>
                    <span className="font-bold">{category.name}</span>
                </Link>
                {expandex ? <ListOfCategory categories={categories} parentCategory={category.id} /> : null}
            </li>
        </>
    )

}