import { navLinks } from "../constants";
import { iconClose } from "../assets/images";
import { useState } from "react";

const MenuCard = () => {
  const [showMenuCard, setShowMenuCard] = useState(false);

  return (
    <div
      className="z-10 w-full h-[13.5em] bg-white md:hidden border-2 border-black animate-scale-up-ver-top rounded-lg"
      onAnimationEnd={() => setShowMenuCard(true)}
    >
      {showMenuCard && (
        <ul className="flex flex-col justify-center items-center gap-3 py-5">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a className="link font-sm text-dark-blue" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MenuCard;
