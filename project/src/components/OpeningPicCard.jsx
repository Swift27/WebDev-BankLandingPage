import { imageMockups, bgIntroDesktop, bgIntroMobile } from "../assets/images";

const OpeningPicCard = () => {
  return (
    <div className="basis-[70%] z-0">
      <img
        src={imageMockups}
        alt="Mockups"
        width="50%"
        height="50%"
        className="absolute z-10 top-[-1.5vw] right-[-8.5vw]"
      />
      <img
        src={bgIntroDesktop}
        alt="Background Intro"
        width="75%"
        height="75%"
        className="absolute z-0 top-[-9vw] right-[-18vw]"
      />
    </div>
  );
};

export default OpeningPicCard;
