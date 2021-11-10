import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import carbg from "./carbg.jpg";
import shoplogo from "./shoplogo.jpg";

const slideImages = [
  "https://cdn.glitch.com/457f257d-f55e-43fb-b9e6-3fbfc4029c84%2Fthumbnails%2Fwaxproservice.jpg?1621519760064",
  "https://cdn.glitch.com/457f257d-f55e-43fb-b9e6-3fbfc4029c84%2Fthumbnails%2Fppfservice.jpg?1621519822965",
  "https://cdn.glitch.com/457f257d-f55e-43fb-b9e6-3fbfc4029c84%2Fthumbnails%2Fceramiccoatingservice.jpg?1621519835486",
  "https://cdn.glitch.com/457f257d-f55e-43fb-b9e6-3fbfc4029c84%2Fthumbnails%2Fwrappingservice.jpg?1621519853689"
];

function Services() {
  return (
    <div className="container-fluid bgimg1" style={{backgroundImage:`url("https://cdn.glitch.com/457f257d-f55e-43fb-b9e6-3fbfc4029c84%2Fdouble-bubble-outline.png?v=1622367600718")`, backgroundRepeat: 'no-repeat'}}><h2 className="center2" >Services</h2>
    <div
      className="slide-container "
      style={{ height: "420px"}}
    >
      
      <Slide>
        <div className="each-slide col-12   col-md-6  offset-md-3" >
          <div style={{ height: "420px" }}>
            <img className="image-fluid"src={slideImages[0]} style={{width:"100%",height:"90%"}}/>
            <h1 style={{ color: "red" ,textAlign:"center",backgroundColor:"grey"}}>Waxpro Coating</h1>
          </div>
          
        </div>
        <div className="each-slide col-12 col-md-6   offset-md-3 " >
          <div style={{ height: "420px" }}>
            <img className="image-fluid" src={slideImages[1]} style={{width:"100%",height:"90%"}}/>
            <h1 style={{ color: "red" ,textAlign:"center",backgroundColor:"grey"}}>PPF </h1>
          </div>
          
        </div>
        <div className="each-slide  col-12 col-md-6   offset-md-3" >
          <div style={{ height: "420px" }}>
            <img className="image-fluid" src={slideImages[2]} style={{width:"100%",height:"90%"}}/>
            <h1 style={{ color: "red" ,textAlign:"center",backgroundColor:"grey"}}>Ceramic Coating</h1>
          </div>
          
        </div>
        <div className="each-slide col-12 col-md-6    offset-md-3" >
          <div style={{ height: "420px" }}>
            <img className="image-fluid" src={slideImages[3]} style={{width:"100%",height:"90%"}}/>
            <h1 style={{ color: "red" ,textAlign:"center",backgroundColor:"grey"}}>Wrapping</h1>
          </div>
          
        </div>
      </Slide>
    </div>
      </div>
  );
}
export default Services;
