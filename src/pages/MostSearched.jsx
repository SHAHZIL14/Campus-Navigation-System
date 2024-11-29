import {
  CollegeLogo,
  GeneralHeadingBox,
  GeneralPara,
  Navbar,
  VideoBox,
  GeneralButton,
  Footer,
} from "../index";

function MostSearched() {
  let paragraphOne =
    "Campus Navigator helps students easily navigate their college campus with  interactive maps and real-time location tracking. It provides directions to buildings and facilities, along with event schedules and campus resources. User-friendly and efficient, it enhances the overall campus experience Campus Navigator helps students easily navigate their college campus with  interactive maps and real-time location tracking. It provides directions to buildings and facilities, along with event ";
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
      <GeneralHeadingBox heading={"mostly searched"}/>
      <VideoBox />

      <GeneralButton
        styleObject={{
          fontFamily: "Poppins",
          fontWeight: "semi-bold",
          padding: lg ? `10px 30px` : `5px 20px`,
        //   position: lg?"":"absolute",
          bottom: lg ? "15%" : "%",
          right: lg ? "10%" : "",
          margin: "20px",
          textTransform: "uppercase",
          borderRadius: "50px",
          letterSpacing: "0.5px",
          fontSize: lg ? "15px" : "13px",
        }}
        text={"start navigation"}
      />
      <Footer />
    </div>
  );
}

export default MostSearched;
