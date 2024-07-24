import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";

// ***************Copy Pasted Component may be  some terms are wrong ** but will work absolutely fine....
const allveg = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [vegData, setVegData] = useState([]);
  const fetchAllEggs = async () => {
    const response = await axios.get(
      "https://api.edamam.com/search?q=non-veg&app_id=a2e4113b&app_key=991bb26508016be9311f2757f778c67b"
    );
    const data = response.data.hits;
    return data;
  };
  useEffect(() => {
    const getEggData = async () => {
      const data = await fetchAllEggs();
      setVegData(data);
    };
    getEggData();
  }, []);

  const filteredArray = vegData.filter((item: any) =>
    item.recipe.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="lg:flex justify-around items-center h-[10dvh] poppins">
        <div className="text-2xl font-bold flex justify-center items-center ">
          All Non-Veg Recipes
        </div>
        <div className="w-64 grid grid-cols-5 items-center rounded-lg bg-slate-100 ml-8 mt-8 lg:ml-0 lg:mt-0">
          <div className="w-[80%] col-span-4">
            <input
              type="search"
              className="border-none outline-none px-3 bg-slate-100"
              value={searchTerm}
              onChange={(e: any) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="w-[20% px-3 py-2 bg-green-500 rounded-r-lg cursor-pointer">
            <BiSearch className="flex mx-auto" />
          </div>
        </div>
      </div>

      {filteredArray ? (
        <div className="grid lg:grid-cols-3 lg:mx-12 mt-8 items-center justify-center">
          {filteredArray.map((item: any) => {
            return (
              <>
                <div
                  className="flex justify-center items-center mt-8 mx-5 bg-slate-100 rounded-xl px-3 py-3"
                  key={item.recipe.label}>
                  <div className="space-y-4">
                    <img
                      src={item.recipe.image}
                      alt=""
                      className="w-full h-[300px] mt-5 rounded-xl"
                    />
                    <div className="h-20">
                      <div className="text-xl font-semibold">
                        {item.recipe.label}
                      </div>
                      <Link
                        href={item.recipe.url}
                        target="__blank"
                        className="cursor-pointer text-blue-700 font-semibold underline">
                        Get In Details
                      </Link>
                    </div>
                    <div className="grid grid-cols-3 items-center gap-5 mx-6 my-6 ">
                      {item.recipe.healthLabels
                        ?.slice(0, 4)
                        .map((label: any) => {
                          return (
                            <>
                              <div className="bg-blue-300 px-2 py-1 rounded-md text-xs flex justify-center">
                                {label}
                              </div>
                            </>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      ) : (
        <div className="grid grid-cols-3 mx-12 mt-8 items-center justify-center px-3 py-3">
          {vegData.map((item: any) => {
            return (
              <>
                <div
                  className="flex justify-center items-center mt-8 mx-5 bg-slate-100 rounded-xl"
                  key={item.recipe.label}>
                  <div className="space-y-4">
                    <img
                      src={item.recipe.image}
                      alt=""
                      className="w-full h-[300px] mt-5 rounded-xl"
                    />
                    <div className="h-20">
                      <div className="text-xl font-semibold">
                        {item.recipe.label}
                      </div>
                      <Link
                        href={item.recipe.url}
                        target="__blank"
                        className="cursor-pointer text-blue-700 font-semibold underline">
                        Get In Details
                      </Link>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 items-center gap-5 px-3 mb-3">
                    {item.recipe.healthLabels?.slice(0, 4).map((label: any) => {
                      return (
                        <>
                          <div className="bg-blue-300 rounded-md text-xs">
                            {label}
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      )}
    </>
  );
};

export default allveg;
