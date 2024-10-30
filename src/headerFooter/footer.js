import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./footer.css";

export function Footer() {
  return (
    <div className="footer">
      <div className="f-info">
        <section className="f-social-medias">
          <div className="f-logo-text">
            <Link style={{ display: "flex" }} to="/">
              <div className="f-logo">
                {/* Add your logo image here */}
              </div>
              <div className="f-text">
                <p>Logo</p>
              </div>
            </Link>
          </div>
          <div className="f-about-text">
            <p>
              It is a long established fact that a reader will be distracted
              looking at its layout.
            </p>
          </div>
          <div className="f-smedia">
            <ul>
              <li>
                <a href="https://www.facebook.com/">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com/">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/">
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section className="f-pages">
          <p>Pages</p>
          <ul>
            <li>
              <Link to={`/aboutus`}>About Us</Link>
            </li>
            
            <li>
              <Link to={`/contact`}>Contact Us</Link>
            </li>
            <li>
              <Link to={`/services`}>Services</Link>
            </li>
          </ul>
        </section>
        <section className="f-services">
          <p>Services</p>
          <ul>
            <li>
              <Link to={`/serviceSingle`}>Kitchen</Link>
            </li>
            <li>
              <Link to={`/serviceSingle`}>Living Area</Link>
            </li>
            <li>
              <Link to={`/serviceSingle`}>Bathroom</Link>
            </li>
            <li>
              <Link to={`/serviceSingle`}>Dining Hall</Link>
            </li>
            <li>
              <Link to={`/serviceSingle`}>Bedroom</Link>
            </li>
          </ul>
        </section>
        <section className="f-contact">
          <p>Contact</p>
          <p>55 East Andhra pradesh. india</p>
          <p>
            <a href="mailto:contact@interno.com">contact@interno.com</a>
          </p>
          <p>+91 9723554357</p>
        </section>
      </div>
      <div className="terms">
        <ul>
          <li>
            <Link to={`/terms`}>&bull; Terms & Conditions</Link>
          </li>
          <li>
            <Link to={`/privacy-policy`}>&bull; Privacy Policy</Link>
          </li>
          <li>
            <Link to={`/cookies-policy`}>&bull; Cookies Policy</Link>
          </li>
        </ul>
      </div>
      <div className="f-copyright">
        <p>Copyright © Om Patel</p>
      </div>
    </div>
  );
}
