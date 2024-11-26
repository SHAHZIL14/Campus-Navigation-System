import { useState } from "react";
import {
  Navbar,
  CollegeLogo,
  GeneralPara,
  GeneralContainer,
  GeneralButton,
  Footer,
} from "../index.js";
function Home() {
 
  const screenWidth = window.innerWidth;
  let lg = screenWidth > 768 ? true : false;

  let paragraphOne =
    "Campus Navigator helps students easily navigate their college campus with  interactive maps and real-time location tracking. It provides directions to buildings and facilities, along with event schedules and campus resources. User-friendly and efficient, it enhances the overall campus experience Campus Navigator helps students easily navigate their college campus with  interactive maps and real-time location tracking. It provides directions to buildings and facilities, along with event ";

  let paragraphTwo =
    "schedules and campus resources. User-friendly and efficient, it enhances the overall campus experienceCampus Navigator helps students easily navigate their college campus with  interacti and efficient, it enhances the overall campus experienceschedules and campus resources. User-friendly and efficient, it enhances the overall campus experienceCampus Navigator helps students easily navigate helps students easily navigate  navigate  easily but  key act navigate  full  ";

  return (
    <div className="h-auto  border-2 w-full bg-home bg-cover  gap-1 relative flex flex-col items-center">
      {lg ? (
        <>
          <Navbar />
          <CollegeLogo />
        </>
      ) : (
        <div className=" flex justify-center h-auto items-start w-full static ">
          <CollegeLogo />
          <Navbar />
        </div>
      )}

      <GeneralPara
        matter={paragraphOne}
        width={`${lg ? "w-4/5" : "w-11/12"}`}
      />
      <GeneralContainer
        styleObject={{
          boxSizing: "border-box",
          width: "80.5%",
          height: "auto",
          margin: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
          overFlow: "hidden",
        }}
      >
        {lg ? <GeneralPara matter={paragraphTwo} width={"w-3/5"} /> : null}
      </GeneralContainer>

      <GeneralButton
        styleObject={{
          fontFamily: "Poppins",
          fontWeight: "semi-bold",
          padding: lg ? `10px 30px` : `5px 20px`,
          position: "absolute",
          bottom: lg ? "15%" : "10%",
          right: lg ? "10%" : "",
          margin: lg ? "0px auto" : "",
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
export default Home;
