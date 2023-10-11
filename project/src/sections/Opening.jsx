import { imageMockups } from "../assets/images";
import { OpeningTextCard, OpeningPicCard } from "../components";

const Opening = () => {
  return (
    <div className="container flex flex-row justify-between items-center">
      <OpeningTextCard />
      <OpeningPicCard />
    </div>
  );
};

export default Opening;
