import {
  CollegeLogo,
  Navbar,
  GeneralHeadingBox,
  SearchBar,
  SelectButton,
  Footer,
  GeneralButton,
  SolutionBox
} from "../index";
function SolutionPage() {
  const screenWidth = window.innerWidth;
  let lg = screenWidth > 768 ? true : false;
  return (
    <div className="h-auto w-auto  gap-1 relative flex flex-col items-center">
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
      <GeneralHeadingBox heading={"checkout this solution"} />
      <SearchBar />
      <SolutionBox/>
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
      <Footer/>
    </div>
  );
}

export default SolutionPage;
