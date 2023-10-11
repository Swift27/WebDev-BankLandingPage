import { logo, iconHamburger, iconClose } from "../assets/images";
import { navLinks } from "../constants";
import { Button } from "../components";
import { useContext } from "react";
import { AppContext } from "../App";

const Nav = () => {
  const { showMenu, setShowMenu } = useContext(AppContext);

  return (
    <nav className="container relative z-30 flex flex-col gap-6">
      <div className="w-full flex justify-between items-center py-5">
        <img src={logo} alt="logo" />
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
          className="md:hidden hover:cursor-pointer"
          src={showMenu ? iconClose : iconHamburger}
          alt="hamburger"
          onClick={() => setShowMenu(!showMenu)}
        />
        <div className="max-md:hidden">
          <Button label="Request Invite" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
