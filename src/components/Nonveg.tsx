import { nonvegAtom } from "@/utils/atoms";
import { Spinner } from "@nextui-org/react";
import axios from "axios";
import { useAtom } from "jotai";
import Link from "next/link";
import { useEffect, useState } from "react";

const Nonveg = () => {
  const [nonvegData, setNonvegData] = useAtom(nonvegAtom);
  const [isLoading, setLoading] = useState(true);
  const fetchEggData = async () => {
    const response = await axios.get(
      "https://api.edamam.com/search?q=non-veg&app_id=a2e4113b&app_key=991bb26508016be9311f2757f778c67b"
    );
    const info = response.data.hits.slice(2, 6);
    console.log(info);
    return info;
  };

  useEffect(() => {
    setTimeout(() => {
      const getEggData = async () => {
        const data = await fetchEggData();
        setNonvegData(data);
      };
      getEggData();
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <div className="my-10 poppins">
        <div className="text-3xl font-bold mx-12 mt-10 ">
          Non-veg Food Items
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
            {nonvegData.map((item: any) => {
              return (
                <>
                  <Link href={`/non-veg-items/${item.recipe.label}`}>
                    <div
                      className="bg-[#00000012] px-3 py-3"
                      key={item.recipe.label}>
                      <img
                        src={item.recipe.image}
                        alt=""
                        className="flex mx-auto"
                      />
                      <div className="text-lg mt-3 font-semibold">
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
          <Link href="/allNonveg">
            <button className="bg-green-400 text-lg font-semibold px-6 py-2 rounded-lg">
              See All
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nonveg;
