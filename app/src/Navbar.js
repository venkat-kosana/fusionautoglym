import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar fixed-top bg-white">
        <div className="container-fluid my-2 ">
          <a
            href="/"
            className="nav-left anchor-brand text-dark font-weight-bold font-size1 brand"
          >
            FUSION AUTOGLYM
          </a>
          
            <Link to="/contact" className="ms-auto brand">
              <button className="btn btn-outline-info  ">
                <span className="font-size ">Contact Us </span>
              </button>
            </Link>
          

          <div className="flex-grow-0 " style={{flexDirection:"column"}}>
            
              
              
               <Link
              to="/plans"
              className="nav-item nav-link text-dark font-weight-boldx-3 my-auto font-size  brand "
            >
              Plans
            </Link>
             
            
           
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
