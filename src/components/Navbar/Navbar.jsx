import React, { useState } from "react";
import navLogoImg from "../../assets/logo.png";
import githubLogo from "../../assets/githubLogo.png";
import { Link, NavLink } from "react-router";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinksData = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Apps", path: "/apps" },
    { id: 3, name: "Installation", path: "/installation" },
  ];

  const links = (
    <>
      {navLinksData.map((navItem) => (
        <NavLink
          to={navItem.path}
          key={navItem.id}
          className={({ isActive }) =>
            isActive
              ? "font-semibold bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text underline underline-offset-2"
              : "font-medium hover:text-[#632EE3] transition-colors"
          }
        >
          {navItem.name}
        </NavLink>
      ))}
    </>
  );
  return (
    <div className="bg-white shadow-2xs py-4 mb-[80px]">
      <div className="flex items-center justify-between max-w-[1440px] mx-auto">
        <div className="relative flex items-center gap-2">
          <Menu
            onClick={() => setOpen(!open)}
            className="flex md:hidden border border-white rounded-[2px] bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white bg-clip-content w-[30px] h-[30px] "
          />

          <div
            className={`md:hidden absolute top-full left-0 shadow-md z-10 w-[110px] h-[100px] p-2 bg-[#F5F5F5] border border-[#632EE3] rounded-[4px] transition-all duration-300 ease-in-out ${open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"}`}
          >
            <ul className="flex flex-col gap-2">{links}</ul>
          </div>

          <Link to="/">
            <div className="flex items-center gap-1">
              <figure>
                <img src={navLogoImg} className="w-[40px]" alt="" />
              </figure>
              <span className="font-bold bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">
                HERO.IO
              </span>
            </div>
          </Link>
        </div>

        <ul className="hidden md:flex space-x-8">{links}</ul>

        <a href="https://github.com/hafiz-al-asad-code" target="_blank">
          <button className="border flex items-center gap-2.5 text-white font-semibold bg-linear-to-br from-[#632EE3] to-[#9F62F2] rounded-[4px] py-3 px-4 cursor-pointer">
            <img src={githubLogo} className="w-[20px] h-[20px]" alt="" />
            Contribute
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
