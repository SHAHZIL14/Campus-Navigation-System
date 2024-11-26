function Navbar() {
  const navItems = ["home", "most searched", "how to use", "about", "contact"];
  return (
    <div className="lg:w-screen sticky ">
      <ul className= " shadow-md py-5  px-1 flex justify-evenly">
        {navItems.map((eachItem) => (
          <li key={eachItem} className=" hover:cursor-pointer hover:text-[#54ad5a] uppercase roboto-bold font-semibold text-sm/[18px] tracking-wider font- text-[#39773D] ">{eachItem}</li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
