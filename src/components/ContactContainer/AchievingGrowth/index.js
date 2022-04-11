import ButtonWrapper from "../../../shared/button-wrapper"
import "./style.css"
import { useState, useEffect } from "react"



function AchievingGrowth() {

  const [scroll, setScroll] = useState("")
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
    if (scrollPosition >= 0) {
      setScroll("scroll")
    }
  }, [scrollPosition])

  return (
    <div className="achievingGrowth">
      <div className="img"></div>
      <div className={`${scroll} developing-strategies`}>
        <p className="text">Developing Innovative Strategies</p>
        <p className="title">ACHIEVING GROWTH</p>
        <ButtonWrapper name="Book A Consultation" className={"book"} />
      </div>
    </div>
  );
}

export default AchievingGrowth;
