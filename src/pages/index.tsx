import EggsRecipe from "@/components/EggsRecipe";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Nonveg from "@/components/Nonveg";
import Veg from "@/components/Veg";

const index = () => {
  return (
    <div className="poppins">
      <Navbar />
      <Hero />
      <EggsRecipe />
      <Veg />
      <Nonveg />
    </div>
  );
};

export default index;
