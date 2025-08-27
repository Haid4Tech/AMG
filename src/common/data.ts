import { IMenuItems, IIcons } from "./types";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Instagram from "@mui/icons-material/Instagram";
import YouTube from "@mui/icons-material/YouTube";
// import Twitter from "@mui/icons-material/Twitter";
// import Facebook from "@mui/icons-material/Facebook";

export const menuItems: Array<IMenuItems> = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About Us",
    url: "/about",
  },
  {
    title: "Products",
    url: "/products",
  },
  {
    title: "News",
    url: "/news",
  },
  {
    title: "Contact",
    url: "/contact",
  },
];

export const socialMedia: Array<IIcons> = [
  // {
  //   label: "Facebook",
  //   Icon: Facebook,
  //   url: "",
  // },
  {
    label: "Instagram",
    Icon: Instagram,
    url: "https://www.instagram.com/amgenergystorage/",
  },
  // {
  //   label: "Twitter",
  //   Icon: Twitter,
  //   url: "",
  // },
  {
    label: "LinkedIn",
    Icon: LinkedIn,
    url: "",
  },
  {
    label: "Youtube",
    Icon: YouTube,
    url: "",
  },
];

export const coreValues = [
  {
    slug: "Trust First",
    label: "Intregrity",
    description:
      "We uphold the highest standards of honesty and transparency, ensuring every battery, solar panel, and turbine we assemble reflects our unwavering commitment to ethical practices and trusted relationships.",
    cover:
      "https://destinyimpactchurch.org/wp-content/uploads/2022/09/integrity.jpg",
  },
  {
    slug: "Customer Driven",
    label: "Customer Focus",
    description:
      "We put our customers at the heart of our operations, designing tailored clean energy solutions that meet their needs today while empowering them to build a more sustainable and reliable future.",
    cover:
      "https://plus.unsplash.com/premium_photo-1661764559869-f6052a14b4c9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    slug: "Green Future",
    label: "Sustainability",
    description:
      "We drive a cleaner, greener world by engineering energy systems that minimize environmental impact, maximize efficiency, and contribute to a long-term transition to sustainable energy.",
    cover:
      "https://images.unsplash.com/photo-1620415629284-975004d37752?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    slug: "Future Ready",
    label: "Innovation",
    description:
      "We continuously push the boundaries of clean energy technology, developing advanced batteries, solar panels, and turbines that redefine performance and reliability in the energy sector.",
    cover:
      "https://images.unsplash.com/photo-1529854140025-25995121f16f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    slug: "Stronger Together",
    label: "Teamwork & Collaboration",
    description:
      "We believe the best solutions are built together, fostering a culture where diverse expertise and collaboration power the creation of innovative, integrated energy systems.",
    cover:
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
