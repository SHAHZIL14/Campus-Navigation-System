import {
  CollegeLogo,
  Navbar,
  GeneralHeadingBox,
  SearchBar,
  GeneralPara,
  GeneralButton,
  Footer,
  SelectButton
} from "../index";

function HowToUse() {
  const screenWidth = window.innerWidth;
  let lg = screenWidth > 768 ? true : false;
  let pointsPara =
    "Search the desire routes above.\n OR \n 1. Select the most nearby “Start-spot” below.\n2. Select the most nearby “End-spot” below.\n3. Click on NAVIGATE to get routed!";
  return (
    <div className="h-auto w-auto gap-1 relative flex flex-col items-center my-5">
     
      <GeneralHeadingBox heading={"how to get routes"} />
      <SearchBar />
      <GeneralPara
        matter={pointsPara}
        width={`${lg ? "w-4/5" : "w-11/12"}`}
        classes={
          "fredoka font-semibold text-product-color text-base lg:text-xl text-center"
        }
      />
      <SelectButton/>
      
      <GeneralButton
        styleObject={{
          fontFamily: "Poppins",
          fontWeight: "semi-bold",
          padding: lg ? `10px 50px` : `5px 20px`,
        //   position: lg?"":"absolute",
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
    </div>
  );
}
export default HowToUse;
