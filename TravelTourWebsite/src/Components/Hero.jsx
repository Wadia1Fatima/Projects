import { Search } from "lucide-react";
import banner1 from "../assets/Hero1.jpg";

const Hero = () => {
  return (
    <div className="relative -mt-12 overflow-hidden">
      <div
        className="h-[650px] lg:h-[800px] relative"
        style={{
          backgroundImage: `url(${banner1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="flex h-[650px] justify-center items-center lg:pt-0 pt-20">
            <div className="flex flex-col space-y-8 justify-center items-center text-center px-5 md:px-0">
              <h1 className="text-white font-bold text-4xl lg:text-6xl">
                Discover Your Next Adventure
              </h1>

              <p className="text-white lg:text-lg lg:w-[700px]">
                Explore breathtaking destinations, create unforgettable
                memories and embark on the journey of a lifetime.
              </p>

              <button className="bg-red-500 px-3 py-2 text-white rounded-md font-semibold">
                Start Exploring
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-300 shadow-lg rounded-md z-10 left-[15%] absolute hidden lg:block bottom-[15%] w-[1050px] mx-auto p-4">
        <div className="flex gap-3 items-center">
          <div className="grid gap-5 grid-cols-4 flex-grow">
            <div className="flex flex-col gap-2">
              <label className="flex font-semibold gap-1 items-center">
                <Search className="w-4 h-4" />
                Location
              </label>

              <select className="border border-gray-300 rounded-sm p-1">
                <option>Select Options</option>
                <option>Bali</option>
                <option>India</option>
                <option>Tokyo</option>
                <option>Venice</option>
                <option>Paris</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-semibold">Check In</label>
              <input
                type="date"
                className="border p-1 border-gray-300 rounded-sm"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-semibold">Check Out</label>
              <input
                type="date"
                className="border p-1 border-gray-300 rounded-sm"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="flex font-semibold gap-1 items-center">
                <Search className="w-4 h-4" />
                Guest
              </label>

              <select className="border border-gray-300 rounded-sm p-1">
                <option>Select Options</option>
                <option>2 Guests 1 Child</option>
                <option>2 Guests 2 Children</option>
                <option>3 Guests</option>
                <option>4 Guests</option>
                <option>5 Guests</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-white">.</label>

            <button className="bg-red-500 transition-all text-white hover:bg-black px-3 h-8 py-1 rounded-md">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;