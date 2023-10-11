const FeaturesCard = ({ img, heading, text }) => {
  return (
    <div className="flex flex-col justify-between items-start max-md:items-center">
      <img src={img} alt="heading" className="mb-10" />
      <h2 className="font-publicSans text-xl text-dark-blue mb-7 max-md:text-center">
        {heading}
      </h2>
      <p className="font-publicSans text-basis text-grayish-blue max-md:text-center">
        {text}
      </p>
    </div>
  );
};

export default FeaturesCard;
