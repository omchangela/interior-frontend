import "./services.css";
import services from "./services.json";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import photo1 from "../images/rr-hospital.jpg";
import icon1 from "../images/Icon1.svg";
import photo2 from "../images/veego.jpg";
import icon2 from "../images/Icon2.svg";
import photo3 from "../images/v-edu.jpg";
import icon3 from "../images/Icon3.svg";

export function Services() {
  return (
    <div className="services">
      <div className="services-header">
        <h1>
          Services<p>Home / Services</p>
        </h1>
      </div>
      <div className="service-types">
        {services.services.map((type, index) => (
          <div className="service-type" key={index}>
            <h2>{type.service_name}</h2>
            <p>{type.service_content}</p>
            <Link to={`/servicesingle`}>
              <button>
                Read More <BsArrowRight style={{ marginLeft: "5px" }} color="#007bff" />
              </button>
            </Link>
          </div>
        ))}
      </div>

      <div className="howWeWork">
        <div className="how-title">
          <h1>Our Services</h1>
          <p>
            It is a long established fact will be distracted. Lorem Ipsum is
            simply dummy text of the printing and typesetting industry.
          </p>
        </div>

        {[{ photo: photo1, icon: icon1, title: "RR Hospital", content: "We successfully completed RR Hospital's interior works." },
          { photo: photo2, icon: icon2, title: "Veego Charitable Trust", content: "We successfully completed Veego Charitable Trust's interior works." },
          { photo: photo3, icon: icon3, title: "V Education Institutions", content: "We successfully completed V Education Institutions's interior works." }
        ].map((item, index) => (
          <div className="how-content" key={index}>
            <div className="hc-img">
              <img src={item.photo} alt={`concept ${index + 1}`} />
            </div>
            <div className="hc-text">
              <div className="hc-text-anima">
                <img src={item.icon} alt="icon" />
                <p>{String(index + 1).padStart(2, '0')}</p>
              </div>
              <div className="hc-subtext">
                <h2>{item.title}</h2>
                <p>{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="interno">
        <h1>Wanna join the interno?</h1>
        <p>It is a long established fact will be distracted.</p>
        <Link to='/contact'>
          <button>Contact With Us <AiOutlineArrowRight style={{ marginLeft: "5px" }} color="#292F36" /></button>
        </Link>
      </div>
    </div>
  );
}
