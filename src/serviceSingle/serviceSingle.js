import "./serviceSingle.css";

import servicePhoto from "../images/serviceSingle.jpg";
import ReactPlayer from "react-player/youtube";


export function ServiceSingle() {
  return (
    <div className="serviceSingle">
      <div className="serviceS-header">
        <h1>
          Service Single<p>Home / Service Single</p>
        </h1>
      </div>
      <div className="serviceS-info">
        <div className="ss-info-detail">
          <h1>We set the trends of modern living Services.</h1>
          <p>
            <span>
              It is a long established fact that a reader will be distracted by
              the of readable content of a page{" "}
            </span>
            <br />
            <br />
            when lookings at its layouts the points spriof using that it has a
            more less normal.A wonderful serenity has taken pgossession of my
            entire soul, like thesce sweet morndsings of sphring which I enjoy
            with my forwhole heart. I am alone, and feel the charm of
            excgistence in this spot, which was created for the bliss of souls
            like mine. <br />
            <br />
            When lookings at its layouts the points spriof using that it has a
            more less normal.A wonderful serenity has taken pgossession of my
            entire soul, like thesce sweet morndsings of sphring which I enjoy
            with my forwhole heart. I am alone, and feel the charm of
            excgistence in this spot, which was created for the bliss of souls
            like mine.
          </p>
        </div>
        <div className="ss-info-brands">

        </div>
        <div className="ss-info-video">
          <ReactPlayer
            width="100%"
            height="350px"
            className="react-player"
            controls
            light
            url="https://youtu.be/bzdaqME1Q98?si=gL1IJxb_c2yONuKH"
          />
        </div>
        <div className="ss-pointers">
          <div className="ss-pointer one">
            <h1>Use of Interior</h1>
            <ul>
              <li>We provide high quality design services.</li>
              <li>Project on time and Latest Design.</li>
              <li>Scientific Skills For getting a better result.</li>
              <li>Renovations Benefit of Service.</li>
              <li>We are confident about our projects.</li>
            </ul>
          </div>
          <div className="ss-pointer two">
            <h1>Make an Art</h1>
            <ul>
              <li>We provide high quality design services.</li>
              <li>Project on time and Latest Design.</li>
              <li>Scientific Skills For getting a better result.</li>
              <li>Renovations Benefit of Service.</li>
              <li>We are confident about our projects.</li>
            </ul>
          </div>
        </div>
        <div className="go-portfolio">
            <div className="gp-img">
                <img src={servicePhoto} alt="service"></img>
            </div>
            <div className="gp-text">
                <h1>We love design.That's how we got here.</h1>
                <p>It is a long established fact that a reader will be distracted by the of readable content .</p>
                  </div>
        </div>
        
      </div>
    </div>
  );
}
