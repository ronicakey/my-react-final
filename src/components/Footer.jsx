import React from 'react';

const Footer = () => {
  return (
    <div className="container">
      <footer className="row py-4 my-4 border-top">
        <div className="col mb-2">
          <img src="img/logo.png" className="me-2 align-left" width="165px">
          </img>
          <p style={{ color:"#1F1B6F", fontSize:"14px", fontWeight:"bold", textAlign:"left" }}>
            С нами не соскучишься!
          </p>
        </div>
        <div className="col mb-2 text-end lh-sm" style={{ color:"#1F1B6F", fontSize:"14px" }}>
          <h6>Copyright info:</h6>
          <ul className="list-unstyled">
            <li>Rytr's AI copywriting software</li>
            <li>Stable Diffusion 2.1 Dreamshaper_33 model, Deliberate_v2 model</li>
            <li>Stable Diffusion 1.5 Lexica Aperture V2</li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Footer;