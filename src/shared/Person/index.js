import "./style.css";
import { useState, useEffect } from "react"



function Person({ img, name, profesion, className }) {

  const [scrollImg, setScrollImg] = useState("")
  const [scrollName, setScrollName] = useState("")
  const [scrollProfession, setScrollProfession] = useState("")
  const [scrollText, setScrollText] = useState("")
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
    if (scrollPosition > 100) {
      setScrollImg("scroll-img")
    }
    if (scrollPosition > 150) {
      setScrollName("scroll-name")
    }
    if (scrollPosition > 200) {
      setScrollProfession("scroll-profession")
    }
    if (scrollPosition > 250) {
      setScrollText("scroll-text")
    }
  }, [scrollPosition])

  return (
    <div className={`${className} person`}>
      <img className={`${scrollImg} img`} src={img} alt="" />
      <p className={`${scrollName} name`}>{name}</p>
      <p className={`${scrollProfession} profession`}>{profesion}</p>
      <p className={`${scrollText} text`}>
        I'm a paragraph. Click here to add your own text and edit me. It’s easy.
        Just click “Edit Text” or double click me to add your own content and
        make changes to the font. I’m a great place for you to tell a story and
        let your users know a little more about you.
      </p>
    </div >
  );
}

export default Person;
