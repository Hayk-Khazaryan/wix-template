import "./style.css";
import { useState, useEffect } from "react"


function AboutWrapper() {
  const [scrollTitle, setScrollTitle] = useState("")
  const [scrollImg, setScrollImg] = useState("")
  const [scrollBoth, setScrollBoth] = useState("")
  const [scrollPosition, setScrollPosition] = useState(0)
  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    };
  }, [])

  useEffect(() => {
    if (scrollPosition >= 0) {
      setScrollTitle("scroll-title")
      setScrollImg("scroll-img")
    }
    if (scrollPosition >= 250) {
      setScrollBoth("scroll-both")
    }
  }, [scrollPosition])


  return (
    <div className="aboutWrapper">
      <p className={`${scrollTitle} title`}>ABOUT</p>
      <div className={`${scrollImg} text-img`}>
        <div className={`${scrollBoth} text-both`}>
          <p className="text">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. Feel free to drag and drop me
            anywhere you like on your page. I’m a great place for you to tell a
            story and let your users know a little more about you.
          </p>
          <p className="text">
            This is a great space to write a long text about your company and
            your services. You can use this space to go into a little more
            detail about your company. Talk about your team and what services
            you provide. Tell your visitors the story of how you came up with
            the idea for your business and what makes you different from your
            competitors. Make your company stand out and show your visitors who
            you are.
          </p>
        </div>
        <img src="https://static.wixstatic.com/media/82fcd3_0fdc534469f5472699491ca8fc95574a~mv2.jpg/v1/fill/w_489,h_634,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/82fcd3_0fdc534469f5472699491ca8fc95574a~mv2.jpg" />
      </div>
    </div>
  );
}

export default AboutWrapper;
