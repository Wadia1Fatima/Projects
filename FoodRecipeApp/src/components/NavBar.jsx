import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { FaUtensils } from 'react-icons/fa'
import GlobalContext from '../context/GlobalContext'

export default function NavBar() {

    const { searchParams, setSearchParams, handleSubmit } = useContext(GlobalContext)

    return (
        <nav className="w-full">
            <div className="w-full flex items-center justify-between px-8 py-8 gap-8">

                <h2 className="flex items-center gap-3 text-3xl font-semibold whitespace-nowrap">
                    <FaUtensils className="text-red-500" size={26} />

                    <NavLink to="/">
                        Yum Recipes
                    </NavLink>
                </h2>

                <form onSubmit={handleSubmit} className="flex-1 max-w-2xl">
                    <input
                        type="text"
                        name="search"
                        value={searchParams}
                        onChange={(e) => setSearchParams(e.target.value)}
                        placeholder="Search your favorite recipes..."
                        className="w-full bg-white/75 p-3 px-8 rounded-full outline-none shadow-lg shadow-red-100 focus:shadow-red-200"
                    />
                </form>

                <ul className="flex items-center gap-8 whitespace-nowrap">
                    <li>
                        <NavLink
                            to="/"
                            className="text-lg font-medium text-black hover:text-gray-700 duration-300"
                        >
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/favorites"
                            className="text-lg font-medium text-black hover:text-gray-700 duration-300"
                        >
                            Favorites ♡
                        </NavLink>
                    </li>
                </ul>

            </div>
        </nav>
    )
}