import React from 'react';

const Footer = (props) => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">

          <div className="col-md-12 col-sm-12">
            <h3><i className="fas fa-skull"></i> JayArghArgh</h3>
            <span className="fa-li"><i className="fas fa-phone-square-alt custom-li"></i></span><a href="tel:+61437932469">+
            61 437 932 469</a> ||
            <span className="fa-li"><i className="fab fa-skype custom-li"></i></span><a href="skype:info_385776?chat">+61 8
            7200 0070</a> ||
            <span className="fa-li"><i className="far fa-paper-plane custom-li"></i></span><a
            href="mailto:jayarghargh@gmail.com">JayArghArgh @gmail.com</a> ||
            <span className="fa-li"><i className="fas fa-laptop"></i></span><a href="http://jayarghargh.com">Portfolio</a>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer;