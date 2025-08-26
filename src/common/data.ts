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
