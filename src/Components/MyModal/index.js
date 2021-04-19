import React from "react";
import "./style.css";

const MyModal = (props) => {
  return (
    <div id="portfolio-modal" className="modal model-sm">
      {/*The Close Button*/}
      <span className="close">&times;</span>

      {/*Modal Content (The Image)*/}
      <img className="modal-content" id="modal_image"/>

      {/*Modal Caption (Image Text)*/}
      <div id="caption"></div>
    </div>
  )
};

export default MyModal;