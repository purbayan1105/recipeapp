import CustomCard from "./CustomCard";

const Spacer = () => {
  return (
    <>
      {" "}
      <div className="flex">
        <CustomCard />
        <Spacer />
        <CustomCard />
        <Spacer />
        <CustomCard />
      </div>
    </>
  );
};

export default Spacer;
