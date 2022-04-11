import "./style.css"
import Slider from "react-slick"
import { useState, useEffect } from "react"
import data from "./data"


function Testimonials() {
       const settings = {
              adaptiveHeight: true,
              dots: true,
              infinite: true,
              speed: 500,
              slidesToShow: 1,
              slidesToScroll: 1
       };
       const [scrollTitle, setScrollTitle] = useState("")
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
              if (scrollPosition >= 2300) {
                     setScrollTitle("scroll-title")
              }
              if (scrollPosition >= 2400) {
                     setScrollText("scroll-text")
              }
       }, [scrollPosition])
       return (
              <div className="testimonials">
                     <p className={`${scrollTitle} title`}>TESTIMONIALS</p>
                     <Slider {...settings}>
                            {
                                   data.map(item => (
                                          <div className={`${scrollText} slider-wrapper`} key={item.id}>
                                                 <p className="text-1">
                                                        {item.text1}
                                                 </p>
                                                 <p className="text-2">
                                                        {item.text2}
                                                 </p>
                                                 <p className="text-3">
                                                        {item.text3}
                                                 </p>
                                          </div>
                                   ))
                            }
                     </Slider>
              </div>
       )
}


export default Testimonials 