import { Link } from "react-router-dom";
import { navLinks } from "../resusables";
import { MainButton } from "../components/custom/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Profile } from "../components/custom/profile";
import { useState } from "react";
import { SearchInput } from "../components/custom/formControls";

export const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const ToggleNav = () => {
    setNavOpen(!navOpen);
  };
  return (
    <div className="w-full border-b fixed top-0 shadow-sm bg-white z-[999]">
      <div className="flex justify-between items-center px-3 sm:px-0 container mx-auto py-4">
        <h3 className="logo">Travelsy</h3>
        <div className="flex gap-14 items-center">
          <div className="hidden lg:flex gap-5">
            {navLinks.map((link, index) => (
              <Link key={index} to={link.path} className="text-[#4a4a4a] text-[13px]">
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex gap-6 items-center">
            <div className="hidden lg:flex">
              <MainButton
                text={"Reservations"}
                round
                icon={"material-symbols-light:bookmark-outline"}
              />
            </div>

            <Icon
              icon="iconamoon:search-light"
              width="24"
              height="24"
              color="#4a4a4a"
              className="hidden lg:flex"
            />
            <Profile img={"/images/Oval.png"} />
            <div
              className={`menu-toggle flex md:hidden ${
                navOpen
                  ? "after:-rotate-45 before:rotate-45 after:w-full after:mt-0"
                  : "rotate-0 after:w-[70%] after:mt-2"
              }`}
              onClick={ToggleNav}
            />
          </div>
        </div>
      </div>
      <div
        className={`bg-white p-4 flex flex-col  fixed text-black md:hidden h-[calc(100vh-56px)] w-screen z-30 transition-all duration-200 ${
          navOpen ? "ml-0" : "-ml-[1000px]"
        }`}
      >
        <div className="flex flex-col gap-3 mt-10">
          {navLinks.map((navlink, index) => (
            <Link to={navlink.link} key={index} className="text-xl">
              {navlink.name}
            </Link>
          ))}

        </div>
<SearchInput/>
        </div>
    </div>
  );
};
