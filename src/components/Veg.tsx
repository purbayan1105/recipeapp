import { vegAtom } from "@/utils/atoms";
import { Spinner } from "@nextui-org/react";
import axios from "axios";
import { useAtom } from "jotai";
import Link from "next/link";
import { useEffect, useState } from "react";

const Veg = () => {
  const [vegData, setVegData] = useAtom(vegAtom);
  const [isLoading, setLoading] = useState(true);
  const fetchEggData = async () => {
    const response = await axios.get(
      "https://api.edamam.com/search?q=veg&app_id=a2e4113b&app_key=991bb26508016be9311f2757f778c67b"
    );
    const info = response.data.hits.slice(2, 6);
    console.log(info);
    return info;
  };

  useEffect(() => {
    setTimeout(() => {
      const getEggData = async () => {
        const data = await fetchEggData();
        setVegData(data);
      };
      getEggData();
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <div className="my-10">
        <div className="text-3xl font-bold mx-12 mt-10 ">
          Vegetarian Food Items
        </div>
        {isLoading ? (
          <div className="text-xl grid grid-cols-4  justify-center items-center">
            <Spinner label="Loading..." color="warning" />
            <Spinner label="Loading..." color="warning" />
            <Spinner label="Loading..." color="warning" />
            <Spinner label="Loading..." color="warning" />
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:mx-12 mt-8 gap-5 ">
            {vegData.map((item: any) => {
              return (
                <>
                  <Link href={`/veg-items/${item.recipe.label}`}>
                    <div
                      className="flex justify-center items-center mt-8 mx-5 bg-slate-100 rounded-xl"
                      key={item.recipe.label}>
                      <div className="">
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
                          {item.recipe.healthLabels
                            ?.slice(0, 4)
                            .map((label: any) => {
                              return (
                                <>
                                  <div className="bg-blue-300 rounded-md text-xs px-3 py-1">
                                    {label}
                                  </div>
                                </>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                  </Link>
                </>
              );
            })}
          </div>
        )}

        <div className="flex justify-center items-center mt-8">
          <Link href="/allveg">
            <button className="bg-green-400 text-lg font-semibold px-6 py-2 rounded-lg">
              See All
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Veg;
