import { IoIosArrowDropdownCircle } from "react-icons/io";

const Hero = () => {
  return (
    <>
      <div className="bg-[url('/banner.png')] h-[80dvh] bg-center bg-cover relative lg:mx-12">
        <div className="bg-[#00000081] h-[80dvh] relative">
          <div className="absolute  font-bold bottom-48 lg:left-16 left-8">
            <span className="text-white text-5xl"> Discover, Cook, Enjoy:</span>
            <br />
            <br />
            <span className="text-3xl text-white">
              Your Ultimate Culinary Companion
            </span>
            <br />
            <br />
            <div className="flex items-center text-white gap-3">
              <span>See All Recipes</span>
              <IoIosArrowDropdownCircle size={25} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
