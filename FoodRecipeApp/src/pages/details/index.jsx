import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import GlobalContext from "../../context/GlobalContext"

export default function Details() {

    const { id } = useParams()

    const {
        recipeDetailsData,
        setRecipeDetailsData,
        favoritesList,
        handleAddToFvrt
    } = useContext(GlobalContext)

    useEffect(() => {
        async function getRecipeDetails() {
            const response = await fetch(
                `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
            )

            const data = await response.json()

            if (data?.data) {
                setRecipeDetailsData(data.data)
            }
        }

        getRecipeDetails()
    }, [id])

    return (
        <div className="container mx-auto grid grid-cols-1 items-start gap-10 px-5 py-10 lg:grid-cols-2">

            <div className="group h-[450px] overflow-hidden rounded-2xl shadow-md">
                <img
                    src={recipeDetailsData?.recipe?.image_url}
                    alt={recipeDetailsData?.recipe?.title}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
            </div>

            <div className="flex flex-col gap-5 rounded-2xl bg-white p-7 shadow-md">

                <span className="text-sm font-medium uppercase tracking-wide text-red-500">
                    {recipeDetailsData?.recipe?.publisher}
                </span>

                <h3 className="text-3xl font-bold text-gray-800">
                    {recipeDetailsData?.recipe?.title}
                </h3>

                <button
                    onClick={() => handleAddToFvrt(recipeDetailsData?.recipe)}
                    className="w-fit rounded-lg bg-gray-800 px-6 py-3 text-sm font-medium uppercase tracking-wide text-white transition duration-300 hover:bg-red-500"
                >
                    {
                        favoritesList &&
                            favoritesList.length > 0 &&
                            favoritesList.findIndex(
                                (item) => item.id === recipeDetailsData?.recipe?.id
                            ) !== -1
                            ? "Remove from favorites"
                            : "Add to favorites"
                    }
                </button>

                <div className="mt-3">

                    <h4 className="mb-4 text-2xl font-semibold text-gray-800">
                        Ingredients
                    </h4>

                    <ul className="flex flex-col gap-3">
                        {
                            recipeDetailsData?.recipe?.ingredients?.map(
                                (ingredient, index) => (
                                    <li
                                        key={index}
                                        className="flex gap-2 border-b border-gray-100 pb-2 text-gray-600"
                                    >
                                        <span className="font-medium text-gray-800">
                                            {ingredient.quantity} {ingredient.unit}
                                        </span>

                                        <span>
                                            {ingredient.description}
                                        </span>
                                    </li>
                                )
                            )
                        }
                    </ul>

                </div>

            </div>

        </div>
    )
}