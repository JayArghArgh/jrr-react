import React from 'react';

const About = (props) => {
  return (
    <div className="row about">
      <div className="col-sm-12 col-md-12">
        <p><span className="firstcharacter">I</span> have recently completed a Certificate in Full Stack Web Development
          at
          Monash University whilst concurrently studying for bachelor of Information Technology at RMIT with the goal
          being
          a successful transition from a very experienced career in the spatial industry, to a new career in web and
          software development.</p>
        <ul>
          <li>I have demonstrated natural capabilities building websites, basic software, and micro-games.</li>
          <li>I have experience in
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fab fa-python custom-li"></i></span>Python</li>
              <li><span className="fa-li"><i className="fab fa-java custom-li"></i></span>Java</li>
              <li><span className="fa-li"><i className="fab fa-js-square custom-li"></i></span>JavaScript</li>
              <li><span className="fa-li"><i className="fab fa-html5 custom-li"></i></span>HTML</li>
              <li><span className="fa-li"><i className="fab fa-css3-alt custom-li"></i></span>CSS</li>
            </ul>
            <li>As well as advanced technical abilities with GIS, CAD, and surveying platforms.</li>
            <li>And a proven track record managing technical projects by gathering requirements, preparing project
              plans,
              and delivering tailored solutions
            </li>
          </li>
        </ul>
      </div>
    </div>
  )
};

export default About;