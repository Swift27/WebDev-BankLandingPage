import { logoWhite } from "../assets/images";
import { footerIcons, footerLinks1, footerLinks2 } from "../constants";
import { Button } from "../components";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="container flex flex-row justify-between items-center font-publicSans py-10 h-[11em]"
    >
      <div className="flex-1 flex flex-row justify-between items-center h-full gap-20">
        <div className="flex-[1] flex flex-col justify-between items-start h-full">
          <img src={logoWhite} alt="logo" className="fill-white stroke-white" />
          <div className="w-full flex flex-col justify-between items-center">
            <ul className="w-full flex flex-row justify-between items-center">
              {footerIcons.map((icon, index) => (
                <li key={index}>
                  <img src={icon} alt={icon} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex-[1.5] flex flex-row justify-between items-center w-full h-full">
          <div className="w-full h-full">
            <ul className="w-full h-full flex flex-col justify-between items-start">
              {footerLinks1.map((link, index) => (
                <li key={index}>
                  <a className="text-white font-light" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full h-full">
            <ul className="w-full h-full flex flex-col justify-between items-start">
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
      <div className="flex-1 flex flex-col justify-between items-end h-full">
        <Button label="Reqeust Invite" />
        <p className="text-sm text-grayish-blue">
          @Easybank. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
