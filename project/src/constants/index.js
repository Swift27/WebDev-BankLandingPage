import {
  iconOnline,
  iconBudgeting,
  iconOnboarding,
  iconApi,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
  { href: "#blog", label: "Blog" },
  { href: "#careers", label: "Careers" },
];

export const features = [
  {
    img: iconOnline,
    heading: "Online Banking",
    text: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
  },
  {
    img: iconBudgeting,
    heading: "Simple Budgeting",
    text: "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.",
  },
  {
    img: iconOnboarding,
    heading: "Fast Onboarding",
    text: "We don't do branches. Open your account in minutres online and start taking control of your finances right away.",
  },
  {
    img: iconApi,
    heading: "Open API",
    text: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  },
];
