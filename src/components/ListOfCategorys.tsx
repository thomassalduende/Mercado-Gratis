import { type Category } from "@/types/types";
import CategoryItem from "./CategoryItem";

export default function ListOfCategory({ categories, parentCategory = null }: { categories: Category[], parentCategory?: string | null }) {

    const rootCategories = categories.filter(({ parentId }) => {
        return parentCategory == parentId;
    })

    return (
        <>
            <hr />
            <ul>
                {rootCategories.map((category) => (
                    <CategoryItem
                        key={category.id}
                        category={category}
                        categories={categories}
                    />
                ))}
            </ul>
        </>
    )
}