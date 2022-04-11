import ProfesionInfo from "../../shared/ProfesionInfo"
import "./style.css"
import { useState, useEffect } from "react"
import data from "./data"


function ServicesWrapper() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [])
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
    <div className={`${scroll} servicesWrapper`}>
      <p className="title">SERVICES</p>
      <div className="profesionInfo-column">
        {
          data.map(item => (
            <ProfesionInfo
              key={item.id}
              money={item.money}
              hr={item.hr}
              profesion={item.profesion}
              img={item.img}
            />
          ))
        }
      </div>
    </div>
  );
}



export default ServicesWrapper
