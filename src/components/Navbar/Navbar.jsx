import React from "react";
import navLogoImg from "../../assets/logo.png";
import githubLogo from "../../assets/githubLogo.png";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const navLinksData = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "App", path: "/app" },
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
    <div className="bg-white shadow-2xs py-4">
      <div className="flex items-center justify-between max-w-[1440px] mx-auto">
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

        <ul className="space-x-8">{links}</ul>

        <Link to="https://github.com/hafiz-al-asad-code">
          <button className="border flex items-center gap-2.5 text-white font-semibold bg-linear-to-br from-[#632EE3] to-[#9F62F2] rounded-[4px] py-3 px-4 cursor-pointer">
            <img src={githubLogo} className="w-[20px] h-[20px]" alt="" />
            Contribute
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
