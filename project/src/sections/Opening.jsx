import { useContext, useState } from "react";
import { imageMockups } from "../assets/images";
import { OpeningTextCard, OpeningPicCard, MenuCard } from "../components";

import App, { AppContext } from "../App";

const Opening = () => {
  const { showMenu, setShowMenu } = useContext(AppContext);

  return (
    <div
      id="home"
      className="container flex flex-row max-lg:flex-col justify-between items-start max-md:items-center"
    >
      {showMenu && (
        <div className="w-[90%] absolute z-20 top-[5em]">
          <MenuCard />
        </div>
      )}
      <OpeningTextCard />
      <OpeningPicCard />
    </div>
  );
};

export default Opening;
