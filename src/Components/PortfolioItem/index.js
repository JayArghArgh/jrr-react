import React from "react";
const PortfolioItem = (props) => {
  return (
    <div className="col-sm-12 col-md-3">
      <div className="card">
        <img id={props.itemDetails.image_id} src={props.itemDetails.image} className="card-img-top" alt={props.itemDetails.image_alt} />
          <div className="card-body">
            <p className="card-text">{props.itemDetails.name}</p>
            <ul>
              {/*Add list component*/}
              <li>React</li>
              <li>Axios</li>
              <li>API</li>
            </ul>
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fab fa-internet-explorer custom-li"></i></span><a
                href={props.itemDetails.deploy.deploy_url} target="_blank" rel="">Deployed on {props.itemDetails.deploy.deploy_name}</a></li>
              <li><span className="fa-li"><i className="fab fa-github custom-li"></i></span><a
                href={props.itemDetails.repo.repo_url} target="_blank" rel="">{props.itemDetails.repo.repo_name}</a></li>
            </ul>
          </div>
      </div>
    </div>
  );
};
export default PortfolioItem;