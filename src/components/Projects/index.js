import Person from "../../shared/Person"
import "./style.css"
import { useState, useEffect } from "react"
import data from "./data"



function Projects() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
  }, [])

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
    if (scrollPosition >= 0) {
      setScroll("scroll")
    }
  }, [scrollPosition])
  return (
    <div className="projectsWrapper">
      <p className={`${scroll} title`}>PROJECTS</p>
      <div className="wrap">
        {
          data.map(item => (
            <Person
              key={item.id}
              name={item.name}
              img={item.img}
            />
          ))
        }
      </div>
    </div>
  );
}

export default Projects;
