import "./style.css"
import { Link } from "react-router-dom"
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'

function Footer() {
       return (
              <footer className="footer">
                     <div className="first-chiled">
                            <Link className="title">JAMES CONSULTING</Link>
                            <p className="text">500 Terry Francois Street</p>
                            <p className="text">San Francisco, CA 94158</p>
                            <Link className="text">Mail: info@mysite.com</Link>
                            <p className="text">Tel: 123-456-7890</p>
                     </div>
                     <div className="secound-chiled">
                            <p className="title">MENU</p>
                            <Link className="text" to="/">About</Link>
                            <Link className="text" to="/projects">Projects</Link>
                            <Link className="text" to="/services">Services</Link>
                            <Link className="text" to="toolsTips">Tools & Tips</Link>
                            <Link className="text" to="contact">Contact</Link>
                     </div>
                     <div className="thrth-chiled">
                            <p className="title">SOCIALS</p>
                            <Link to="https://www.facebook.com/"> <FacebookIcon /></Link>
                            <Link to="https://twitter.com/?lang=ru"><TwitterIcon /></Link>
                            <p>© 2023 by JAMES CONSULTING.</p>
                            <div className="d-f">
                                   <p>Proudly created with</p>
                                   <Link className="wix">Wix.com</Link>
                            </div>

                     </div>
              </footer>
       )
}


export default Footer