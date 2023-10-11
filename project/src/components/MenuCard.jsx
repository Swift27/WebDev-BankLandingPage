import { navLinks } from "../constants";
import { useState } from "react";

const MenuCard = () => {
  const [showMenuCard, setShowMenuCard] = useState(false);

  return (
    <div
      className="z-10 w-full h-[16em] bg-white md:hidden animate-scale-up-ver-top rounded-md"
      onAnimationEnd={() => setShowMenuCard(true)}
    >
      {showMenuCard && (
        <ul className="flex flex-col justify-center items-center gap-4 py-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a className="link text-basis text-dark-blue" href={link.href}>
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
