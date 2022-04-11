import Person from "../../../shared/Person"
import "./style.css"
import { useState, useEffect } from "react"
import data from "./data"


function OurTeam() {

  const [scrollTitle, setScrollTitle] = useState("")
  const [scrollPerson, setScrollPerson] = useState("")
  const [scrollAnimation, setScrollAnimation] = useState("")
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
    if (scrollPosition >= 700) {
      setScrollTitle("scroll-title")
    }
    if (scrollPosition >= 900) {
      setScrollPerson("scroll-person")
    }
    // if (scrollPosition >= 2500) {
    //   setScrollAnimation("person-animation")
    // }
  }, [scrollPosition])

  return (
    <div className="ourTeam">
      <p className={`${scrollTitle} title`}>OUR TEAM</p>
      <p className={`${scrollTitle} heading`}>I'm a paragraph. Click here to add your</p>
      <p className={`${scrollTitle} heading`}>own text and edit me.</p>
      <div className={`${scrollPerson} d-f wrap`}>
        {
          data.map(item => (
            <Person
              key={item.id}
              name={item.name}
              profesion={item.profesion}
              img={item.img}
              className={item.class}
            />
          ))
        }
      </div>
    </div>
  )
}

export default OurTeam
