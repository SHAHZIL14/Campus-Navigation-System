import { Link } from "react-router-dom";
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
    <div className="h-auto w-auto  gap-1 relative flex flex-col items-center my-5">
      <GeneralHeadingBox heading={"mostly searched"} />
      <VideoBox />
      <Link
      to="/how-to-use">
        <GeneralButton
          styleObject={{
            fontFamily: "Poppins",
            fontWeight: "semi-bold",
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
      </Link>
    </div>
  );
}

export default MostSearched;
