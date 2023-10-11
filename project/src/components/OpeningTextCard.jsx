import { Button } from "../components";

const OpeningTextCard = () => {
  return (
    <div className="basis-[33%] max-md:basis-[80%] flex flex-col justify-center items-start gap-5 max-md:items-center py-[10em] max-md:pt-[100%] max-md:py-[4em] max-md:px-[1em]">
      <h1 className="max-w-[10em] text-left max-md:text-center text-dark-blue font-publicSans text-4xl max-md:text-3xl">
        Next generation digital banking
      </h1>
      <p className="max-w-[30em] text-left max-md:text-center text-grayish-blue font-publicSans text-sm max-md:text-basis">
        Take your financial life online. Your Easybank account will be a
        one-stp-shop for spending, svaing, budgeting, investing, and much more.
      </p>
      <Button label="Request Invite" />
    </div>
  );
};

export default OpeningTextCard;
