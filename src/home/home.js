import "./home.css";
import photoBg from "../images/backgroung/homeBg.jpg";
import { Link } from "react-router-dom";
import { BsArrowRight, BsTelephone } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import services from "../servicesPage/services.json";
import thoughts from "./peopleThoughts.json";

import home1 from "../images/home/home1.jpg";
import hPoject1 from "../images/home/hProject1.jpg";
import hhProject2 from "../images/home/hProject2.jpg";
import hhProject3 from "../images/home/hProject3.jpg";
import customer1 from "../images/home/customer.jpg";

export function Home() {
  const projects = [
    { title: "Decoration Work", img: hPoject1 },
    { title: "Interior Work", img: hhProject2 },
    { title: "Project Plan", img: hhProject3 },
    { title: "Interior design", img: hhProject2 },
  ];

  const loopedProjects = [...projects]; // Duplicate the projects array

  return (
    <div className="home">
      <div className="homeNews" style={{ backgroundImage: `url(${photoBg})` }}>
        <h1>Let Your Home Be Unique</h1>
        <p>
          There are many variations of the passages of lorem Ipsum
          fromavailable,variations of the passages.
        </p>
        <Link to="services">
          <button>
            Check Services
            <BsArrowRight style={{ marginLeft: "2%", color: "#ffffff" }} />
          </button>
        </Link>
      </div>
      <div className="homeOther">
        <div className="homePlans">
          {services.services
            .filter((services, index) => index < 3)
            .map((s, ind) => {
              return (
                <div className="homePlan" key={ind}>
                  <h2>{s.service_name}</h2>
                  <p>{s.service_content}</p>
                  <Link to={`/project-details`}>
                    <button>
                      Read More
                      <BsArrowRight
                        style={{ marginLeft: "4%", color: "#ffffff" }}
                      />
                    </button>
                  </Link>
                </div>
              );
            })}
        </div>
        <div className="homeAboutUs">
          <div className="hp-subtext">
            <h1>We Create The Art Of Stylish Living Stylishly</h1>
            <p>
              It is a long established fact that a reader will be distracted
              by the readable content of a page when looking at its layout.
            </p>
            <div className="callUs">
              <div className="phoneNum">
                <p className="h-icon">
                  <BsTelephone />
                </p>
                <a href="tel: +91 9999999999">
                  <p>
                    +91 9999999999
                    <br />
                    <span>Call Us Anytime</span>
                  </p>
                </a>
              </div>

              <Link to={`/contact`}>
                <button>
                  Get Free Estimate
                  <BsArrowRight style={{ marginLeft: "2%", color: "#ffffff" }} />
                </button>
              </Link>
            </div>
          </div>
          <div className="hp-img">
            <img src={home1} alt="concept" />
          </div>
        </div>

        <div className="people-thoughts">
          <h1>What People Think <br /> About Us</h1>
          <div className="people">
            {thoughts.people.map((req, ind) => (
              <div className="person" key={ind}>
                <div className="person-title">
                  <div>
                    <img src={customer1} alt="customer" />
                  </div>
                  <p>
                    {req.fullname}
                    <br />
                    <span>{req.country}</span>
                  </p>
                </div>
                <p className="thought">{req.thoughts}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="homeProjects">
          <h1>Our Services</h1>
          <p>
            It is a long-established fact that a reader will be distracted by the
            readable content of a page while looking at its layout.
          </p>
          <div className="hp-list scroll-container">
            <div className="hp-list-inner">
              {[...loopedProjects, ...loopedProjects].map((project, index) => (
                <div key={index} className="hp-project flex-shrink-0">
                  <Link to={`/project-details`}>
                    <div className="hp-pro-img">
                      <img src={project.img} alt="project" />
                    </div>
                    <div className="hp-pro-detail">
                      <div className="hp-pro-info">
                        <p className="hp-prj-title">{project.title}</p>
                        <p className="hp-prj-path">Decor / Architecture</p>
                      </div>
                      <div className="hp-pro-btn">
                        <button>
                          <IoIosArrowForward />
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      <div className="h-interno">
        <h1>Discuss Project With Us</h1>
        <p>It is a long established fact will be distracted.</p>
        <Link to={`/contact`}>
          <button>
            Contact With Us
            <AiOutlineArrowRight
              style={{ marginLeft: "5px" }}
              color="#000000"
            />
          </button>
        </Link>
      </div>
    </div>
  );
}
