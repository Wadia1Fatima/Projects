import { Link } from "react-router-dom"

export default function RecipeItem({ item }) {
    return (
        <div className="flex w-80 flex-col overflow-hidden rounded-2xl border border-white bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">

            <div className="flex h-48 items-center justify-center overflow-hidden">
                <img
                    src={item?.image_url}
                    alt={item?.title}
                    className="h-full w-full object-cover transition duration-300 hover:scale-105"
                />
            </div>

            <div className="flex flex-col gap-2 p-5">

                <span className="text-sm font-medium text-red-500">
                    {item?.publisher}
                </span>

                <h3 className="truncate text-lg font-semibold text-gray-800">
                    {item?.title}
                </h3>

                <Link
                    to={`/recipe-item/${item?.id}`}
                    className="mt-3 inline-block rounded-lg bg-gray-800 px-5 py-2.5 text-center text-sm font-medium uppercase tracking-wide text-white transition duration-300 hover:bg-red-500"
                >
                    Recipe Details
                </Link>

            </div>
        </div>
    )
}