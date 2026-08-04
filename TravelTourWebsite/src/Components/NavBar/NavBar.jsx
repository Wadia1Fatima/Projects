import React from "react";

const NavBar = () => {
    return (
        <header className=" sticky mx-auto top-0 transition-all py-6 bg-transparent">
            <div className="bg-transparent/75 px-4 fixed w-ful z-50 top-0 py-2">
                <div className="max-w-7xl mx-autopy-2 px-5 flex bg-transparent justify-between items-center">
                    <h1 className="text-2xl text-white font-bold">Travel<span className="text-red-500">Friend</span></h1>
                </div>
                <div className="flex items-center gap-5">
                    <nav className="hidden md:flex gap-7">
                        <ul className="flex items-center font-semibold text-white text-xl gap-7">
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Tours</li>
                            <li>Gallery</li>
                            <li>Contact</li>
                        </ul>
                        <button className="bg-red-500 text-white px-4 pu-1 rounded-md font-semibold">Book Now</button>
                    </nav>
                </div>
            </div>
        </header>        
    )
}

export default NavBar