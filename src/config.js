import Contact from "./components/ContactContainer";
import AboutContainer from "./components/AboutContainer";
import Projects from "./components/Projects";
import Services from "./components/Services";
import ToolsTips from "./components/ToolsTips";

const NavigationItems = [
  {
    path: "/",
    label: "About",
    component: AboutContainer,
  },
  {
    path: "/projects",
    label: "Projects",
    component: Projects,
  },
  {
    path: "/services",
    label: "Services",
    component: Services,
  },
  {
    path: "/toolsTips",
    label: "Tools & Tips",
    component: ToolsTips,
  },
  {
    path: "/contact",
    label: "Contact",
    component: Contact,
  },
];

export default NavigationItems;
