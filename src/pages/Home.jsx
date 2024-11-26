import {
  Navbar,
  CollegeLogo,
  GeneralPara,
  GeneralContainer,
  GeneralButton,
  Footer,
} from "../index.js";
function Home() {
  let paragraphOne =
    "Campus Navigator helps students easily navigate their college campus with  interactive maps and real-time location tracking. It provides directions to buildings and facilities, along with event schedules and campus resources. User-friendly and efficient, it enhances the overall campus experience Campus Navigator helps students easily navigate their college campus with  interactive maps and real-time location tracking. It provides directions to buildings and facilities, along with event ";

  let paragraphTwo =
    "schedules and campus resources. User-friendly and efficient, it enhances the overall campus experienceCampus Navigator helps students easily navigate their college campus with  interacti and efficient, it enhances the overall campus experienceschedules and campus resources. User-friendly and efficient, it enhances the overall campus experienceCampus Navigator helps students easily navigate helps students easily navigate  navigate  easily but  key act navigate  full  ";

  return (
    <div className="h-auto w-full bg-home bg-cover  gap-1 relative flex flex-col items-center">
      <Navbar />
      <CollegeLogo />
      <GeneralPara matter={paragraphOne} width={"w-4/5"} />
      <GeneralContainer
        styleObject={{
          boxSizing: "border-box",
          width: "80.5%",
          height: "auto",
          margin: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position:"relative",
          overFlow:"hidden"
        }}>
        <GeneralPara matter={paragraphTwo} width={"w-3/5"} />
        <GeneralButton styleObject={{
          backgroundColor:"#39773D",
          fontFamily:"Poppins",
          fontWeight:"semi-bold",
          color:"white",
          padding:"5px 40px",
          position:"absolute",
          right:"0px",
          bottom:"28px",
          textTransform:"uppercase",
          borderRadius:"50px",
          letterSpacing:"0.5px"
        }}
        text={"start navigation"}
         />
      </GeneralContainer>
      <Footer/>
    </div>
  );
}
export default Home;
