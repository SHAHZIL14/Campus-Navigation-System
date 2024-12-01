import { useState } from "react";
import {
  Navbar,
  CollegeLogo,
  GeneralPara,
  GeneralContainer,
  GeneralButton,
  Footer,
} from "../index.js";
import { Link } from "react-router-dom";
function Home() {
  const screenWidth = window.innerWidth;
  let lg = screenWidth > 768 ? true : false;

  let paragraphOne =
    "Campus Navigator helps students easily navigate their college campus with  interactive maps and real-time location tracking. It provides directions to buildings and facilities, along with event schedules and campus resources. User-friendly and efficient, it enhances the overall campus experience Campus Navigator helps students easily navigate their college campus with  interactive maps and real-time location tracking. It provides directions to buildings and facilities, along with event  ";

  let paragraphTwo =
    "schedules and campus resources. User-friendly and efficient, it enhances the overall campus experienceCampus Navigator helps students easily navigate their college campus with  interacti and efficient, it enhances the overall campus experienceschedules and campus resources. User-friendly and efficient, it enhances the overall campus experienceCampus Navigator helps students easily navigate helps students easily navigate  navigate  easily but  key act navigate  full  ";

  return (
    <div className="h-auto w-full  gap-1 relative flex flex-col items-center my-5">
      {lg ? (
        <CollegeLogo />
      ) : (
        <div className=" flex justify-center h-auto items-start w-full relative "></div>
      )}
      <GeneralPara
        matter={paragraphOne}
        width={`${lg ? "w-4/5" : "w-11/12"}`}
        classes={"baloo bhai 2 text-base lg:text-lg text-justify"}
      />
      <GeneralContainer
        styleObject={{
          boxSizing: "border-box",
          width: "80.5%",
          height: "auto",
          // margin: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
          overFlow: "hidden",
        }}
      >
        {lg ? (
          <GeneralPara
            matter={paragraphTwo}
            width={"w-3/5"}
            classes={"baloo bhai 2 text-base lg:text-lg text-justify"}
          />
        ) : null}
      </GeneralContainer>
      
      <Link
      to="/how-to-use">
      <GeneralButton
        styleObject={{
          fontFamily: "Poppins",
          fontWeight: "semi-bold",
          position: lg ? "absolute" : "",
          bottom: lg ? "10%" : "10%",
          right: lg ? "10%" : "",
          margin: "30px",
          textTransform: "uppercase",
          borderRadius: "50px",
          letterSpacing: "0.5px",
          fontSize: lg ? "15px" : "13px",
        }}
        text={"start navigation"}
      />
      </Link>
    </div>
  );
}
export default Home;
