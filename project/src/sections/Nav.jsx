import { logo, iconHamburger, iconClose } from "../assets/images";
import { navLinks } from "../constants";
import { MenuCard, Button } from "../components";
import { useState } from "react";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="container flex flex-col gap-6">
      <div className="w-full flex justify-between items-center py-5">
        <img src={logo} alt="logo" className="" />
        <ul className="flex justify-center items-center gap-5 max-md:hidden">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a className="link font-sm text-grayish-blue" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <img
          className="md:hidden"
          src={showMenu ? iconClose : iconHamburger}
          alt="hamburger"
          onClick={() => setShowMenu(!showMenu)}
        />
        <div className="max-md:hidden">
          <Button label="Request Invite" />
        </div>
      </div>
      {showMenu && (
        <div className="w-full">
          <MenuCard />
        </div>
      )}
    </nav>
  );
};

export default Nav;
