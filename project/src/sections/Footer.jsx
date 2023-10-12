import { logoWhite } from "../assets/images";
import { footerIcons, footerLinks1, footerLinks2 } from "../constants";
import { Button } from "../components";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="container flex flex-row justify-between items-center font-publicSans py-10 h-[11em] max-md:flex-col max-md:justify-center max-md:h-[32em]"
    >
      <div className="flex-[1.5] flex flex-row justify-between items-center h-full gap-20 max-md:flex-col max-md:justify-center max-md:gap-8">
        <div className="flex-[1] flex flex-col justify-between items-start h-full max-md:flex-col max-md:items-center max-md:gap-8">
          <img src={logoWhite} alt="logo" />
          <div className="w-full flex flex-col justify-between items-center max-md:justify-center">
            <ul className="w-full flex flex-row justify-between items-center max-md:w-[50vw]">
              {footerIcons.map((icon, index) => (
                <li key={index}>
                  <img src={icon} alt={icon} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex-[2] flex flex-row justify-between items-center w-full h-full max-md:flex-col max-md:justify-center max-md:gap-3">
          <div className="w-full h-full">
            <ul className="w-full h-full flex flex-col justify-between items-start max-md:items-center max-md:gap-2">
              {footerLinks1.map((link, index) => (
                <li key={index}>
                  <a
                    className="text-white text-basis font-light"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full h-full">
            <ul className="w-full h-full flex flex-col justify-between items-start max-md:justify-center max-md:items-center max-md:gap-3">
              {footerLinks2.map((link, index) => (
                <li key={index}>
                  <a className="text-white font-light" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex-[1] flex flex-col justify-between items-end h-full max-md:items-center max-md:mt-8">
        <Button label="Reqeust Invite" />
        <p className="text-sm text-grayish-blue">
          @Easybank. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
