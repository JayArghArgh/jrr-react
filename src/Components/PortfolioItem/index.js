import React from "react";
const PortfolioItem = (props) => {
  return (
    <div className="col-sm-12 col-md-3">
      <div className="card">
        <img id="image_1" src="img/emplectory.png" className="card-img-top" alt="Employee Directory" />
          <div className="card-body">
            <p className="card-text">Emplectory..</p>
            <ul>
              <li>React</li>
              <li>Axios</li>
              <li>API</li>
            </ul>
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fab fa-internet-explorer custom-li"></i></span><a
                href="https://fsc-portfolio.github.io/emplectory/" target="_blank">View</a></li>
              <li><span className="fa-li"><i className="fab fa-github custom-li"></i></span><a
                href="https://github.com/FSC-Portfolio/emplectory" target="_blank">GitHub</a></li>
            </ul>
          </div>
      </div>
    </div>
  );
};
export default PortfolioItem;