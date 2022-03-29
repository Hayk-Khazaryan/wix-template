import "./style.css"
import Slider from "react-slick"



function Testimonials() {
       const settings = {
              adaptiveHeight: true,
              dots: true,
              infinite: true,
              speed: 500,
              slidesToShow: 1,
              slidesToScroll: 1
       };
       return (
              <div className="testimonials">
                     <p className="title">TESTIMONIALS</p>
                     <Slider {...settings}>
                            <div className="slider-wrapper">
                                   <p className="text-1">
                                          “I'm a testimonial. Click to edit me and add text that says something nice about you and your services.”
                                   </p>
                                   <p className="text-2">
                                          Project Manager
                                   </p>
                                   <p className="text-3">
                                          Dora Bridges
                                   </p>
                            </div>
                            <div className="slider-wrapper">
                                   <p className="text-1">
                                          “I'm a testimonial. Click to edit me and add text that says something nice about you and your services.”
                                   </p>
                                   <p className="text-2">
                                          Operations Manager
                                   </p>
                                   <p className="text-3">
                                          Sima Patel
                                   </p>
                            </div>
                            <div className="slider-wrapper">
                                   <p className="text-1">
                                          “I'm a testimonial. Click to edit me and add text that says something nice about you and your services.”
                                   </p>
                                   <p className="text-2">
                                          Markering Director
                                   </p>
                                   <p className="text-3">
                                          Brad Stevens
                                   </p>
                            </div>
                     </Slider>
              </div>
       )
}


export default Testimonials 