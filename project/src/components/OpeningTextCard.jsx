import { Button } from "../components";

const OpeningTextCard = () => {
  return (
    <div className="basis-[33%] max-lg:basis-[80%] max-md:w-full flex flex-col justify-center items-start gap-5 max-md:items-center py-[10em]">
      <h1 className="text-left max-md:text-center text-dark-blue font-publicSans text-4xl">
        Next generation digital banking
      </h1>
      <p className="text-left max-md:text-center text-grayish-blue font-publicSans text-sm">
        Take your financial life online. Your Easybank account will be a
        one-stp-shop for spending, svaing, budgeting, investing, and much more.
      </p>
      <Button label="Request Invite" />
    </div>
  );
};

export default OpeningTextCard;
