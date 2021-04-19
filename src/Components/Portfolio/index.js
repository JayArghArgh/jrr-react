import React from 'react';
import PortfolioItem from "../PortfolioItem";
import MyModal from "../MyModal";

const Portfolio = (props) => {
  return (
    <div>
      <div id="portfolio">
        <div className="container">
          <div className="row">
            <div className={"col-md-12"}>
              <h1>My Portfolio</h1>
              <p>My employment history has seen me create a range of products, 3D CAD drafting, GIS, Python / Java Scripts, and
                more. My more recent web app projects are below.</p>
            </div>
          </div>
            <div className="row">
              {props.portfolioItems.map(pItem => (
                  <PortfolioItem itemDetails={pItem} key={pItem.id}/>
                )
              )}
            </div>
        </div>
        <MyModal />
      </div>

    </div>
  );
};

export default Portfolio;