import React from 'react';
import PortfolioItem from "../PortfolioItem";

const Portfolio = (props) => {
  return (
    <section id="portfolio">
      <div id="skew-lower" className="skew-c"></div>
      <div className="container">
        <div className="row">
          <div className="colour-block-small">
            <h1>My Portfolio</h1>
            <p>My employment history has seen me create a range of products, 3D CAD drafting, GIS, Python / Java Scripts, and
              more. My more recent web app projects are below.</p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {console.log("props: ", props.portfolioItems)}
            {props.portfolioItems.map(pItem => (
                <PortfolioItem itemDetails={pItem} key={pItem.id}/>
              )
            )}
          </div>
        </div>
      </div>
    {/*  Modal goes here*/}
      <div className="wave-black-top portfolio"></div>
    </section>
  );
};

export default Portfolio;