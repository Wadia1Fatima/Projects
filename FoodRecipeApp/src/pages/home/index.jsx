import { useContext } from "react"
import GlobalContext from "../../context/GlobalContext"
import RecipeItem from "../../components/RecipeItem"

export default function Home() {

    const { loading, recipeList } = useContext(GlobalContext)

    if (loading) {
        return (
            <div>Loading...  Please Wait!!</div>
        )
    }

    return (
        <div className="py-8 max-auto container flex flex-wrap justify-center gap-10">
            {
                recipeList && recipeList.length > 0
                    ? recipeList.map(item => <RecipeItem item={item} />)
                    : <div>
                        <p className="text-grey-2xl font-semibold text-center">Nothing to show, Please search something to get started!</p>
                    </div>
            }
        </div>
    )
}