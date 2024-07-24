import { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { ImInsertTemplate } from "react-icons/im";
import { PiChefHatDuotone } from "react-icons/pi";
import {
  RiArrowDownSLine,
  RiArrowDownWideFill,
  RiArrowUpSLine,
} from "react-icons/ri";

const Navbar = () => {
  //   const [arrow, setArrow] = useState(false);

  const navbarArray = [
    {
      id: 1,
      menu: "Homepage",
    },
    {
      id: 2,
      menu: "Recipes",
      arrow: false,
      menuoption: ["veg", "Non-Veg", "Breakfast", "Lunch", "Dinner"],
    },
    {
      id: 3,
      menu: "Page",
    },
    {
      id: 4,
      menu: "Buy",
      arrow: false,
      menuoption: ["Books", "Recipes"],
    },
  ];
  const menuref = useRef();
  const [navbBar, setNavbar] = useState(navbarArray);
  const arrowHandler = (key: number) => {
    setNavbar(
      navbBar.map((item: any) => {
        return item.id === key ? { ...item, arrow: !item.arrow } : item;
      })
    );

    // console.log(navbarArray);
  };
  // const clickOutsideHandle = (event: any) => {
  //   if (menuref.current && !menuref.current.contains(event.target)) {
  //     setNavbar(navbBar.map((item: any) => ({ ...item, arrow: false })));
  //   }
  // };
  // useEffect(() => {
  //   document.addEventListener("mousedown", clickOutsideHandle);
  //   return () => {
  //     document.removeEventListener("mousedown", clickOutsideHandle);
  //   };
  //   return;
  // }, [navbBar]);

  return (
    <>
      <div className="grid grid-cols-4 items-center poppins">
        <img
          src="/Tastebites.png"
          alt="tastebiteslogo-png"
          className="w-72 lg:w-56 h-16  col-span-2 lg:col-span-1"
        />
        <div className="hidden lg:block lg:col-span-2 font-semibold text-lg cursor-pointer select-none">
          <div className="flex justify-center items-center gap-10">
            {navbBar.map((item) => {
              return (
                <>
                  <div
                    className="lg:flex items-center relative hidden"
                    onClick={() => arrowHandler(item.id)}>
                    <p>{item.menu}</p>
                    {item.menuoption &&
                      (item.arrow ? <RiArrowUpSLine /> : <RiArrowDownSLine />)}

                    {item.menuoption && item.arrow && (
                      <div className="absolute top-14 space-y-5 bg-indigo-400 w-44 px-2 py-2 rounded-lg">
                        {item.menuoption.map((option) => {
                          return (
                            <>
                              <div className="border-b-2 border-solid border-gray-400 hover:bg-gray-200 w-full px-2 rounded-lg">
                                {option}
                              </div>
                            </>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <div className="flex items-center lg:justify-center justify-end gap-3 ">
          <div className="">
            <CiSearch size={20} />
          </div>
          <div className="">
            <PiChefHatDuotone size={20} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
