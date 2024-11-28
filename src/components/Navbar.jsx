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
  const navItems = ["home", "most searched", "how to use", "about"];
  return (
    <div className={` absolute lg:sticky lg:top-0 bottom-20 right-5  shadow-md  ${scrollY>50?"lg:bg-white z-10":"lg:bg-transparent"} lg:w-full flex justify-center px-6 `}>
        <div
        className={`hamburger z-10  absolute top-10 right-3  ${isMenuOpen ? "open" : ""}`}
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
        } py-3 lg:w-4/5 absolute top-7 right-2 lg:static  bg-white  lg:bg-transparent lg:py-3 lg:px-0  transition-opacity ease-in-out delay-200  rounded-2xl lg:rounded-none flex  px-1 justify-between lg:justify-between`}
      >
        {navItems.map((eachItem) => (
          <li
          onClick={toggleMenu}
            key={eachItem}
            className=" p-5 w-44 lg:w-auto lg:relative transition-all ease-in-out delay-75 px-5 lg:p-2 text-center text-product-color  hover:text-white hover:bg-product-color rounded-lg  hover:cursor-pointer  uppercase roboto-bold font-semibold text-sm/[18px] tracking-wider"
          >
            {eachItem}
          </li>
        ))}
      </ul>
    
    </div>
  );
}

export default Navbar;
