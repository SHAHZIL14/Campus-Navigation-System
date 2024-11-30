import { CollegeLogo, Footer, GeneralHeadingBox, GeneralPara, Navbar, WaterMark } from "../index";
function About() {
  let aboutPara =
    "Guest it he tears aware as. Make my no cold of need. He been past in by my hard. Warmly thrown oh he common future. Otherwise concealed favourite frankness on be at dashwoods defective at. Sympathize interested simplicity at do projecting increasing terminated. As edward settle limits at in.Ye on properly handsome returned throwing am no whatever. In without wishing he of picture no exposed talking minutes. Curiosity continual belonging offending so explained it exquisite. Do remember to followed yourself material mr recurred carriage. High drew west we no or at john. About or given on witty event. Or sociable up material bachelor bringing landlord confined. Busy so many in hung easy find well up. So of exquisite my an explained remainder. Dashwood denoting securing be on perceive my laughing so.Advantage old had otherwise sincerity dependent additions. It in adapted natural hastily is justice. Six draw you him full not mean evil. Prepare garrets it expense windows shewing do an. She projection advantages resolution son indulgence. Part sure on no long life am at ever. In songs above he as drawn to. Gay was outlived peculiar rendered led six.Affronting discretion as do is announcing. Now months esteem oppose nearer enable too six. She numerous unlocked you perceive speedily. Affixed offence spirits or ye of offices between. Real on shot it were four an as. Absolute bachelor rendered six nay you juvenile. Vanity entire  Six draw you him full not mean evil. Prepare garrets it expense windows shewing do an. She projection advantages resolution son indulgence. Part sure on no long life am at ever. In songs above he as drawn to. Gay was outlived peculiar rendered led six.Affronting discretion as do is announcing. Now months esteem oppose nearer enable too six. She numerous unlocked you perceive speedily. Affixed offence spirits or ye of offices between. Real on shot it were four an as. Absolute bachelor rendered six nay you juvenile. Vanity entire";
  const screenWidth = window.innerWidth;
  let lg = screenWidth > 768 ? true : false;
  return (
    <div className="h-auto w-full  gap-1 relative flex flex-col items-center my-5">
     
      <GeneralHeadingBox heading={"about ourselves"} />
      <GeneralPara
        matter={aboutPara}
        width={`${lg ? "w-4/5" : "w-11/12"}`}
        classes={"baloo bhai 2 text-sm lg:text-base text-justify lg:text-center "}
      />
      <WaterMark text={"Branch cse \n 2022-26"}/>
    </div>
  );
}
export default About;
