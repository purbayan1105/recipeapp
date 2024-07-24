import { eggAtom } from "@/utils/atoms";
import { Spacer, Spinner } from "@nextui-org/react";
import axios from "axios";
import { useAtom } from "jotai";
import Link from "next/link";
import { useEffect, useState } from "react";

const EggsRecipe = () => {
  const [eggData, setEggData] = useAtom(eggAtom);
  const [isLoading, setLoading] = useState(true);
  const fetchEggData = async () => {
    const response = await axios.get(
      "https://api.edamam.com/search?q=egg&app_id=a2e4113b&app_key=991bb26508016be9311f2757f778c67b"
    );
    const info = response.data.hits;
    console.log(info);
    return info;
  };

  useEffect(() => {
    const getEggData = async () => {
      const data = await fetchEggData();
      setEggData(data);
      setLoading(false);
    };

    setTimeout(getEggData, 2000);
  }, []);

  return (
    <>
      <div className="mb-10">
        <div className="text-3xl font-bold mx-12 mt-10 ">
          Make Food With Eggs
        </div>

        {isLoading ? (
          <div className="text-xl grid grid-cols-4  justify-center items-center">
            <Spinner label="Loading..." color="warning" />
            <Spinner label="Loading..." color="warning" />
            <Spinner label="Loading..." color="warning" />
            <Spinner label="Loading..." color="warning" />
          </div>
        ) : (
          <div className="grid lg:grid-cols-4 mx-4 lg:mx-12 mt-8 gap-5 ">
            {eggData.slice(0, 4).map((item: any) => {
              return (
                <>
                  <Link href={`/egg-items/${item.recipe.label}`}>
                    <div
                      className="bg-[#00000012] py-3 px-3"
                      key={item.recipe.label}>
                      <img
                        src={item.recipe.image}
                        alt=""
                        className="flex mx-auto hover:scale-110 duration-1000"
                      />
                      <div className="text-lg mt-3 font-semibold ">
                        {item.recipe.label}
                      </div>
                    </div>
                  </Link>
                </>
              );
            })}
          </div>
        )}
        <div className="flex justify-center items-center mt-8">
          <Link href="/all-eggs-recipe">
            <button className="bg-green-400 text-lg font-semibold px-6 py-2 rounded-lg">
              See All
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default EggsRecipe;
