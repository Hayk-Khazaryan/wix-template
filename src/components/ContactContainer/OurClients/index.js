import "./style.css"
import AbcIcon from '@mui/icons-material/Abc'
import AirplayIcon from '@mui/icons-material/Airplay'
import AlignVerticalTopIcon from '@mui/icons-material/AlignVerticalTop'
import ArchiveIcon from '@mui/icons-material/Archive'
import { useState, useEffect } from "react"


function OurClients() {

       const [scrollTitle, setScrollTitle] = useState("")
       const [scrollIcon, setScrollIcon] = useState("")
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
              if (scrollPosition >= 1800) {
                     setScrollTitle("scroll-title")
              }
              if (scrollPosition >= 1900) {
                     setScrollIcon("scroll-icon")
              }
       }, [scrollPosition])

       return (
              <div className="ourClients">
                     <p className={`${scrollTitle} title`}>OUR CLIENTS</p>
                     <div className="d-f">
                            <AbcIcon className={`${scrollIcon}`} />
                            <AirplayIcon className={`${scrollIcon}`} />
                            <AlignVerticalTopIcon className={`${scrollIcon}`} />
                            <ArchiveIcon className={`${scrollIcon}`} />
                     </div>
              </div>
       )
}


export default OurClients