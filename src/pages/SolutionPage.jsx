import {
  CollegeLogo,
  Navbar,
  GeneralHeadingBox,
  SearchBar,
  SelectButton,
  Footer,
  GeneralButton,
  SolutionBox,
} from "../index";
import { useEffect } from "react";
function SolutionPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  const screenWidth = window.innerWidth;
  let lg = screenWidth > 768 ? true : false;
  return (
    <div className="h-auto w-auto  gap-1 relative flex flex-col items-center my-5">
      <GeneralHeadingBox heading={"checkout this solution"} />
      <SearchBar />
      <SolutionBox />
      <SelectButton />
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

    </div>
  );
}

export default SolutionPage;
