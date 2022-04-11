import Paragraph from "../../../shared/Paragraph"
import "./style.css"
import { useState, useEffect } from "react"



function ContainerParagraph() {

  const [scroll, setScroll] = useState("")
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
    if (scrollPosition >= 450) {
      setScroll("scroll")
    }
  }, [scrollPosition])

  return (
    <div className="contanierParagraph">
      <Paragraph className={scroll} title="SERVICES" />
      <Paragraph className={scroll} title="PROJECTS" />
      <Paragraph className={scroll} title="CLIENTS" />
    </div>
  );
}

export default ContainerParagraph;
