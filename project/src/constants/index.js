import {
  iconOnline,
  iconBudgeting,
  iconOnboarding,
  iconApi,
} from "../assets/images";

import {
  imageCurrency,
  imageRestaurant,
  imagePlane,
  imageConfetti,
} from "../assets/images";

import {
  logo,
  iconFacebook,
  iconYoutube,
  iconTwitter,
  iconPinterest,
  iconInstagram,
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

export const articles = [
  {
    img: imageCurrency,
    author: "Claire Robinson",
    heading: "Receive money in any currency with no fees",
    text: "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single...",
  },
  {
    img: imageRestaurant,
    author: "Wilson Hutton",
    heading: "Treat yourself without worrying about money",
    text: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...",
  },
  {
    img: imagePlane,
    author: "Wilson Hutton",
    heading: "Take your Easybank card wherever you go",
    text: "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you...",
  },
  {
    img: imageConfetti,
    author: "Claire Robinson",
    heading: "Our invite-only Beta accounts are now live!",
    text: "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site...",
  },
];

export const footerIcons = [
  iconFacebook,
  iconYoutube,
  iconTwitter,
  iconPinterest,
  iconInstagram,
];

export const footerLinks1 = [
  { href: "#absout-us", label: "About Us" },
  { href: "#contact", label: "Contact" },
  { href: "#blog", label: "Blog" },
];

export const footerLinks2 = [
  { href: "#careers", label: "Careers" },
  { href: "#support", label: "Support" },
  { href: "#privacy-policy", label: "Privacy Policy" },
];
