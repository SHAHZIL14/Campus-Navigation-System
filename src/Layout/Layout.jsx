import { Outlet } from "react-router-dom";
import { CollegeLogo, Navbar,Footer } from "../index";
function Layout() {
  const screenWidth = window.innerWidth;
  let lg = screenWidth > 768 ? true : false;
  return (
    <div className="w-screen bg-home bg-cover">
      {lg ? (
        <>
          <Navbar />
        </>
      ) : (
        <div className=" flex justify-center h-auto items-start overflow-y-visible w-full relative ">
          <CollegeLogo />
          <Navbar />
        </div>
      )}

      <Outlet />
            
      <Footer />
    </div>
  );
}

export default Layout;
