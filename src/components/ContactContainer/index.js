import { useEffect } from "react"
import AboutUs from "./AboutUs"
import AchievingGrowth from "./AchievingGrowth"
import ContainerParagraph from "./ContainerParagraph"
import OurClients from "./OurClients"
import Testimonials from "./Testimonials"

function Contact() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
  }, [])
  return (
    <>
      <AchievingGrowth />
      <ContainerParagraph />
      <AboutUs />
      <OurClients />
      <Testimonials />
    </>
  );
}

export default Contact;
