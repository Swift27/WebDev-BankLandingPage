const ArticleCard = ({ img, heading, author, text }) => {
  return (
    <div className="flex flex-col bg-white relative rounded-md overflow-hidden cursor-pointer">
      <div className="flex-1 h-[50%] overflow-hidden">
        <img src={img} alt="Article Img" />
      </div>
      <div className="flex flex-col justify-between items-start flex-1 h-[50%] py-8 px-5 max-md:gap-2">
        <p className="font-publicSans text-sm text-grayish-blue">By {author}</p>
        <h3 className="font-publicSans text-xl text-dark-blue">{heading}</h3>
        <p className="font-publicSans text-sm text-grayish-blue">{text}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
