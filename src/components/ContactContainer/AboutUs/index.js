import ButtonWrapper from "../../../shared/button-wrapper"
import "./style.css"
import { useState, useEffect } from "react"



function AboutUs() {

  const [scrollTitle, setScrollTitle] = useState("")
  const [scrollText, setScrollText] = useState("")
  const [scrollPosition, setScrollPosition] = useState(0)
  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  useEffect(() => {
    if (scrollPosition >= 1100) {
      setScrollTitle("scroll-title")
    }
    if (scrollPosition > 1200) {
      setScrollText("scroll-text")
    }
  }, [scrollPosition])

  return (
    <div className="aboutUs">
      <div className="background"></div>
      <div className="background-color"></div>
      <div className="about-us">
        <p className={`${scrollTitle} title`}>ABOUT US</p>
        <p className={`${scrollText} text`}>
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. Feel free to drag and drop me
          anywhere you like on your page. I’m a great place for you to tell a
          story and let your users know a little more about you.
        </p>
        <p className={`${scrollText} text`}>
          This is a great space to write a long text about your company and your
          services. You can use this space to go into a little more detail about
          your company. Talk about your team and what services you provide. Tell
          your visitors the story of how you came up with the idea for your
          business and what makes you different from your competitors. Make your
          company stand out and show your visitors who you are.
        </p>
        <ButtonWrapper name="Learn More" className={`${scrollText} more`} />
      </div>
    </div>
  );
}

export default AboutUs;
