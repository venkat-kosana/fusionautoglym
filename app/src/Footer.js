import React from 'react'
import { Link } from "react-router-dom";

function Footer() {
    return (
        
            <div><footer>
                <div class="container-fluid align-items-center" style={{backgroundColor:'black'}}>
            <div class="row py-5 text-center">
                <div class="col-12">
    
    
                    <h2 class="text-light text-center">Interested in booking an appointment?</h2>
                    <button class="btn btn-outline-light btn-light btn-lg mt-3">
                      <a href=" https://wa.me/919381454544" target="_blank" className="brand">Let us know!</a></button>
                </div>
            </div>
            <div class="row text-center">
                <div class="col-12 col-md-4 py-3">
                    <h5 class="text-info pb-3 font-size1">More Links</h5>
                    
                    <Link to="/" class="text-light d-block brand font-size">Home</Link>
                    <Link to="/contact" class="text-light d-block brand font-size">Contact us</Link>
                    <Link to="/plans" class="text-light brand font-size">Plans</Link>
                </div>
                <div class="col-12 col-md-4 text-light text-justify py-3 text-center">
                    <p style={{fontSize:22,marginBottom:0}}>
                      FUSION AUTOGLYM                       </p><p style={{fontSize:17}}>
                        ------------------Make over to your car!------------------
    
                    </p>
                </div>
                <div class="col-12 col-md-4 py-3">
                    <h5 class="text-info pb-3 font-size1">Our Social Media</h5>
                            <a href="https://www.instagram.com/fusion_autoglym/?igshid=bgagwvfb48su " target="_blank">
                                <i class="fab fa-instagram white-color" ></i>
                    </a><br/><br/>
                            <a href="https://www.facebook.com/Fusion-Autoglym-110606137102744/ " target="_blank">
                                <i class="fab fa-facebook white-color"></i>
                            </a>

                    
                </div>
            </div>
    
            <div class=" text-mutes">
                <p class="text-center" style={{color:'white'}}>Copyrights @Webaholics 2021</p>
            </div>
    
        </div>
                </footer></div>
        
    )
}

export default Footer;
