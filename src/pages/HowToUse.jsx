import {
  CollegeLogo,
  Navbar,
  GeneralHeadingBox,
  SearchBar,
  GeneralPara,
  SelectDropdown,
  GeneralButton,
  Footer
} from "../index";

function HowToUse() {
  const screenWidth = window.innerWidth;
  let lg = screenWidth > 768 ? true : false;
  let pointsPara =
    "Search the desire routes above.\n OR \n 1. Select the most nearby “Start-spot” below.\n2. Select the most nearby “End-spot” below.\n3. Click on NAVIGATE to get routed!";
  return (
    <div className="h-auto w-auto gap-1 relative flex flex-col items-center">
      {lg ? (
        <>
          <Navbar />
        </>
      ) : (
        <div className=" flex justify-center h-auto items-start w-full relative ">
          <CollegeLogo />
          <Navbar />
        </div>
      )}
      <GeneralHeadingBox heading={"how to get routes"} />
      <SearchBar />
      <GeneralPara
        matter={pointsPara}
        width={`${lg ? "w-4/5" : "w-11/12"}`}
        classes={
          "fredoka font-semibold text-product-color text-base lg:text-xl text-center"
        }
      />
      <div className="w-11/12 md:w-2/3 lg:w-2/3 xl:w-1/2 p-4 flex justify-between ">
        <SelectDropdown optionsArray={["start-spot",'2','3','4','5']}/>
        <SelectDropdown optionsArray={["end-spot",'2','3','4','5']}/>
      </div>
      <GeneralButton
        styleObject={{
          fontFamily: "Poppins",
          fontWeight: "semi-bold",
          bottom: lg ? "15%" : "%",
          right: lg ? "10%" : "",
          margin: "20px",
          textTransform: "uppercase",
          borderRadius: "50px",
          letterSpacing: "0.5px",
          fontSize: lg ? "15px" : "13px",
        }}
        text={"Navigate"}
      />
      <Footer/>
    </div>
  );
}
export default HowToUse;
