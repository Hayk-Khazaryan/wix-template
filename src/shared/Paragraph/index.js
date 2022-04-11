import "./style.css"
import ButtonWrapper from "../button-wrapper"
import { useState, useEffect } from "react"




function Paragraph({ className, title }) {
  const [scrollTitle, setScrollTitle] = useState("")
  const [scrollText, setScrollText] = useState("")
  const [scrollButton, setScrollButton] = useState("")
  const [scrollPosition, setScrollPosition] = useState(0)

  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  useEffect(() => {
    if (scrollPosition > 5) {
      setScrollTitle("scroll-title")
    }
    if (scrollPosition > 10) {
      setScrollText("scroll-text")
    }
    if (scrollPosition > 15) {
      setScrollButton("scroll-button")
    }
  }, [scrollPosition])
  return (
    <div className={`${className} paragraph`}>
      <p className={`${scrollTitle} title`}>{title}</p>
      <p className={`${scrollText} text`}>
        I'm a paragraph. Click here to add your own text and edit me. It’s easy.
        Just click “Edit Text” or double click me to add your own content and
        make changes to the font. I’m a great place for you to tell a story and
        let your users know a little more about you.
      </p>
      <ButtonWrapper name="More Info" className={`${scrollButton} info`} />
    </div>
  );
}

export default Paragraph;
