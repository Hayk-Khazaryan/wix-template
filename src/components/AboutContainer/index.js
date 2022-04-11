import { useEffect } from "react"
import FirstSection from "./FirstSection"
import OurTeam from "./OurTeam"

function About() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
  }, [])
  return (
    <>
      <FirstSection />
      <OurTeam />
    </>
  );
}

export default About;
