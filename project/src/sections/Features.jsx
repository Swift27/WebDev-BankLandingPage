import { FeaturesCard } from "../components";
import { features } from "../constants";

const Features = () => {
  return (
    <div
      id="about"
      className="container flex flex-col mt-3 py-[7em] max-md:py-[4em]"
    >
      <div className="flex flex-col justify-start max-md:justify-center">
        <h1 className="font-publicSans text-3xl text-dark-blue mb-5 max-md:text-center">
          Why choose Easybank?
        </h1>
        <p className="font-publicSans text-basis text-grayish-blue max-md:text-center max-md:px-5">
          We leverage Open Banking to turn your bank account into your financial
          hub.
        </p>
        <p className="font-publicSans text-basis text-grayish-blue max-md:text-center">
          Control your finances like never before.
        </p>
      </div>
      <div className="flex justify-between gap-7 mt-20 max-md:flex-col max-md:mt-10">
        {features.map((feature, index) => (
          <FeaturesCard
            key={index}
            img={feature.img}
            heading={feature.heading}
            text={feature.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
