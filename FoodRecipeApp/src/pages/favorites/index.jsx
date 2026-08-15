import { useContext } from "react"
import RecipeItem from "../../components/RecipeItem"
import GlobalContext from "../../context/GlobalContext"



export default function Favorites() {

    const { favoritesList } = useContext(GlobalContext)

    return (
        <div className="py-8 max-auto container flex flex-wrap justify-center gap-10">
            {
                favoritesList && favoritesList.length > 0
                    ? favoritesList.map(item => <RecipeItem item={item} />)
                    : <div>
                        <p className="text-grey-2xl font-semibold text-center">Nothing is added to Favorites!!</p>
                    </div>
            }
        </div>
    )

}