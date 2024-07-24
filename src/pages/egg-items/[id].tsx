import { eggAtom } from "@/utils/atoms";
import axios from "axios";
import { useAtom } from "jotai";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { RiOpenSourceFill } from "react-icons/ri";
import { SiOpensourceinitiative, SiOrigin } from "react-icons/si";

// Define the type for each item in eggData
export type EggItem = {
  recipe: {
    label: string;
    image: string;
    source: string;
    url: string;
    // Add other properties as needed
  };
};

const EggItemComponent: FC = () => {
  const [eggData, setEggData] = useAtom<EggItem[]>(eggAtom);

  const fetchData = async () => {
    const response = await axios.get(
      "https://api.edamam.com/search?q=egg&app_id=a2e4113b&app_key=991bb26508016be9311f2757f778c67b"
    );
    const data = response.data.hits;
    return data;
  };

  useEffect(() => {
    const getData = async () => {
      const newData = await fetchData();
      setEggData(newData);
    };
    getData();
  }, []);

  const router = useRouter();
  const { id } = router.query;
  const eachEgg = eggData.find((item) => item.recipe.label === id);

  if (!eachEgg) {
    return <></>;
  }

  return (
    <div className="poppins">
      <div className="">
        <div className="bg-[#00000012] py-3 px-3" key={eachEgg.recipe.label}>
          <img
            src={eachEgg.recipe.image}
            alt={eachEgg.recipe.label}
            className="flex mx-auto hover:scale-110 duration-1000"
          />
          <div className="text-lg mt-3 font-semibold">
            {eachEgg.recipe.label}
          </div>
          <Link href={eachEgg.recipe.url} target="__blank">
            <div className="flex items-center gap-2 mt-3">
              <SiOrigin />
              <div className="text-lg  font-semibold text-blue-700">
                {eachEgg.recipe.source}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EggItemComponent;
