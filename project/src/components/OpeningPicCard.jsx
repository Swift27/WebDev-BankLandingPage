import { imageMockups, bgIntroDesktop, bgIntroMobile } from "../assets/images";
import { useContext, useEffect } from "react";
import { AppContext } from "../App";

const OpeningPicCard = () => {
  const { showMenu } = useContext(AppContext);

  return (
    <div className="basis-[70%] z-0">
      <div className="max-md:hidden w-full">
        <img
          src={imageMockups}
          alt="Mockups"
          className="absolute z-10 w-[50%] max-w-[800px] h-auto top-[-1.5vw] right-[-8.5vw]"
        />
        <img
          src={bgIntroDesktop}
          alt="Background Intro"
          className="absolute z-0  w-[75%] max-w-[1150px] h-auto top-[-9vw] right-[-18vw]"
        />
      </div>
      <div className="md:hidden w-full">
        {!showMenu && (
          <img
            src={imageMockups}
            alt="Mockups"
            width="90%"
            height="90%"
            className="absolute z-10 top-[-16vw] left-1/2 transform -translate-x-1/2"
            onClick={() => console.log(showMenuCard)}
          />
        )}
        <img
          src={bgIntroMobile}
          alt="Background Intro"
          width="1000%"
          height="1000%"
          className="absolute z-0 top-[-15vw] right-0 scale-[130%]"
        />
      </div>
    </div>
  );
};

export default OpeningPicCard;
