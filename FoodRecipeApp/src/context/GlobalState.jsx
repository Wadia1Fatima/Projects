import { useState } from "react"
import GlobalContext from "./GlobalContext"
import { useNavigate } from "react-router-dom"

export default function GlobalState({ children }) {

    const [searchParams, setSearchParams] = useState('')
    const [loading, setLoading] = useState(false)
    const [recipeList, setRecipeList] = useState([])
    const [recipeDetailsData, setRecipeDetailsData] = useState(null)
    const [favoritesList, setFavoritesList] =  useState([])

    const navigate = useNavigate()

    async function handleSubmit(event) {

        event.preventDefault()

        try {
            const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParams}`)
            const data = await response.json()

            if (data?.data?.recipes) {
                setRecipeList(data?.data?.recipes)
                setLoading(false)
                setSearchParams('')
                navigate('/')
            }

            console.log(data)
        } catch (e) {
            console.log(e)
            setLoading(false)
            setSearchParams('')
        }
    }

    function handleAddToFvrt(getCurrentItem){
        console.log(getCurrentItem);

        let cpyFavoritesList = [...favoritesList]
        const index = cpyFavoritesList.findIndex(item => item.id === getCurrentItem.id)

        if(index === -1){
            cpyFavoritesList.push(getCurrentItem)
        }else{
            cpyFavoritesList.splice(index)
        }
        

        setFavoritesList(cpyFavoritesList)
    }

    return (
        <GlobalContext.Provider value={{ 
            searchParams, 
            loading, 
            recipeList, 
            setSearchParams, 
            handleSubmit, 
            recipeDetailsData, 
            setRecipeDetailsData,
            handleAddToFvrt,
            favoritesList
        }}>
            {children}
        </GlobalContext.Provider>
    )
}