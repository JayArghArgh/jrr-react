import React from 'react';
import "./style.css";

const Elevator = (props) => {
  return (
      <div className="container-fluid">
        <div className={"elevator"} >
          <h1>JayArghArgh - Full Stack Developer</h1>
          <div class="testimonial-quote group">
            <img src="img/JR_profile_sml.png" alt="Justin R Reid"/>
              <div class="quote-container">
                <blockquote>
                  <p>I enjoy identifying opportunities to reduce costs, increase efficiencies, and drive new ways of working.
                    <br />I have an eye for detail and a passion for technology."</p>
                </blockquote>
                <cite><span>Justin R. Reid</span><br />
                  Full Stack Developer<br />
                </cite>
              </div>
          </div>
        </div>
      </div>
  )
}

export default Elevator;