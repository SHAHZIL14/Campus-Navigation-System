import { useState,useEffect } from "react";

function Navbar() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let lg = window.innerWidth > 768 ? true : false;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navItems = ["home", "most searched", "how to use", "about", "contact"];
  return (
    <div className={` absolute lg:sticky lg:top-0 top-1/4 right-10 bg-white ${scrollY>50?"lg:bg-white z-10":"lg:bg-transparent"} lg:w-screen `}>
        <div
        className={`hamburger  absolute top-7 right-2  ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="line  "></div>
        <div className="line  "></div>
        <div className="line  "></div>
      </div>
      <ul
        className={` ${
          lg?
          "flex-row"
          :
          isMenuOpen ? " flex-col" : "hidden"
        } shadow-md py-3 lg:py-4 transition-opacity ease-in-out delay-200  rounded-2xl lg:rounded-none flex  px-1 justify-between lg:justify-evenly`}
      >
        {navItems.map((eachItem) => (
          <li
          onClick={toggleMenu}
            key={eachItem}
            className=" p-5 transition-all ease-in-out delay-75 px-7 lg:p-2 text-center text-[#39773D]  hover:text-white hover:bg-[#39773D] rounded-lg  hover:cursor-pointer  uppercase roboto-bold font-semibold text-sm/[18px] tracking-wider"
          >
            {eachItem}
          </li>
        ))}
      </ul>
    
    </div>
  );
}

export default Navbar;
